import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target, Gauge, ListChecks, LineChart, CheckCircle2, ArrowRight,
  ArrowLeft, Plus, Trash2, Search, Filter, Copy, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

// =====================
// Utilidades y helpers
// =====================
const Fade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="p-2 rounded-2xl bg-gray-100">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);

// Helpers puros (testeables)
const computeQuarter = (d = new Date()) => {
  const q = Math.floor(d.getMonth() / 3) + 1; // 1..4
  return `Q${q}`;
};

const filterKPIsHelper = (catalog, cats, search) => {
  const s = (search || "").toLowerCase();
  return catalog.filter(k =>
    cats.includes(k.cat) && (
      k.title.toLowerCase().includes(s) ||
      k.desc.toLowerCase().includes(s) ||
      k.how.toLowerCase().includes(s)
    )
  );
};

const buildSummary = (selected, catalog, service, bizGoal, userGoal, tasks) => {
  const selectedKPIs = Object.keys(selected).map(id => ({
    id,
    ...catalog.find(k => k.id === id),
    ...selected[id]
  }));
  return {
    servicio: service,
    objetivo_negocio: bizGoal,
    objetivo_usuario: userGoal,
    tareas_clave: (tasks || []).filter(Boolean),
    kpis: selectedKPIs,
  };
};

// ---------------------------------
// Catálogo de KPI's (resumen + cómo)
// ---------------------------------
const KPI_CATALOG = [
  // Uso & Adopción
  { id: "adoption", cat: "Uso & Adopción", title: "Tasa de adopción", how: "% de empresas que usan una funcionalidad en X días desde lanzamiento.", desc: "¿Se empieza a usar lo nuevo?" },
  { id: "active", cat: "Uso & Adopción", title: "Usuarios activos (DAU/MAU)", how: "Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.", desc: "¿Hay hábito?" },
  { id: "activation", cat: "Uso & Adopción", title: "Tasa de activación", how: "% que completan la primera operación clave tras registrarse.", desc: "¿Llegan al momento 'aha'?" },
  { id: "feature-usage", cat: "Uso & Adopción", title: "Uso por funcionalidad", how: "% de sesiones con uso de la función (ej. pagos masivos).", desc: "¿Qué tanto se usa cada módulo?" },

  // Eficiencia & Fricción
  { id: "time-on-task", cat: "Eficiencia & Fricción", title: "Tiempo en tarea", how: "Promedio (p50/p90) desde inicio a confirmación.", desc: "¿Qué tan rápido ocurre?" },
  { id: "success", cat: "Eficiencia & Fricción", title: "Tasa de éxito", how: "% de operaciones completadas sin error (sin necesidad de reintentos).", desc: "¿Se logra sin trabas?" }, // (fusionado con retry)
  { id: "steps", cat: "Eficiencia & Fricción", title: "Pasos por tarea", how: "Promedio de pantallas/clics para completar.", desc: "¿Es compacto?" },
  { id: "abandon", cat: "Eficiencia & Fricción", title: "Tasa de abandono", how: "% que inician y no finalizan el flujo.", desc: "¿Dónde se caen?" },
  { id: "user-errors", cat: "Eficiencia & Fricción", title: "Errores de usuario/flujo", how: "Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.", desc: "¿Qué rompe la tarea para el cliente?" }, // (ajustado)
  { id: "latency", cat: "Eficiencia & Fricción", title: "Tiempo de respuesta", how: "ms de latencia en endpoints/pantallas clave.", desc: "¿Carga rápido?" },
  { id: "interruption", cat: "Eficiencia & Fricción", title: "Transacciones interrumpidas", how: "% de operaciones que no concluyen por timeout o caída técnica.", desc: "¿Qué tan confiable es?" }, // (nuevo)

  // Satisfacción & Experiencia
  { id: "nps", cat: "Satisfacción & Experiencia", title: "NPS", how: "% promotores − % detractores tras usar el módulo.", desc: "¿Nos recomendarían?" },
  { id: "csat", cat: "Satisfacción & Experiencia", title: "CSAT", how: "Promedio de satisfacción 1–5 al finalizar tarea.", desc: "¿Quedaron conformes?" },
  { id: "sus", cat: "Satisfacción & Experiencia", title: "SUS", how: "Escala SUS 0–100 post-uso o en tests.", desc: "¿Es usable?" },
  { id: "ces", cat: "Satisfacción & Experiencia", title: "CES", how: "Esfuerzo percibido 1–5 para completar.", desc: "¿Cuánto costó hacerlo?" },
  { id: "complaints", cat: "Satisfacción & Experiencia", title: "Reclamos/incidencias", how: "Tasa por 10k operaciones y tiempo de resolución.", desc: "¿Cuánto ruido generamos?" },

  // Conversión & Negocio
  { id: "conversion", cat: "Conversión & Negocio", title: "Tasa de conversión", how: "% que completan la acción clave (apertura, crédito, etc.).", desc: "¿Se concreta el valor?" },
  { id: "value", cat: "Conversión & Negocio", title: "Valor transaccionado", how: "USD movidos por canal/funcionalidad.", desc: "¿Cuánto se mueve?" },
  { id: "cross", cat: "Conversión & Negocio", title: "Cross-selling digital", how: "% que contratan otro producto desde el flujo.", desc: "¿Ampliamos relación?" },
  { id: "retention", cat: "Conversión & Negocio", title: "Retención (churn inverso)", how: "% que siguen activos en X meses.", desc: "¿Se quedan con nosotros?" },

  // Autoservicio & Costos
  { id: "selfservice", cat: "Autoservicio & Costos", title: "% autogestión exitosa", how: "% de casos resueltos sin intervención humana.", desc: "¿Resuelven solos?" },
  { id: "digital-vs-branch", cat: "Autoservicio & Costos", title: "Digital vs. sucursal", how: "% de operaciones digitales vs. presenciales.", desc: "¿Migramos el canal?" },
  { id: "support-reduction", cat: "Autoservicio & Costos", title: "Reducción llamadas soporte", how: "Variación de llamadas sobre el tema.", desc: "¿Bajó el costo?" },
  { id: "help-usage", cat: "Autoservicio & Costos", title: "Uso de ayuda digital", how: "% de consultas resueltas vía FAQ/chatbot vs tickets.", desc: "¿Qué tan efectiva es la ayuda digital?" }, // (nuevo)


  // Seguridad & Cumplimiento
  { id: "failed-login", cat: "Seguridad & Cumplimiento", title: "Intentos de login fallidos", how: "# por 1.000 sesiones, bloqueo de cuentas.", desc: "¿Hay fricción o riesgo?" },
  { id: "2fa", cat: "Seguridad & Cumplimiento", title: "2FA éxito", how: "% de autenticaciones 2FA exitosas.", desc: "¿Funciona la seguridad?" },
  { id: "kyc", cat: "Seguridad & Cumplimiento", title: "Tiempo KYC", how: "Minutos promedio de verificación.", desc: "¿Qué tan ágil es?" },
  { id: "fraud", cat: "Seguridad & Cumplimiento", title: "Fraude detectado/prevenido", how: "# / monto bloqueado.", desc: "¿Protegemos bien?" },
  { id: "onboarding", cat: "Seguridad & Cumplimiento", title: "Tiempo de activación de empresa/usuario", how: "Tiempo promedio desde registro hasta poder operar en banca empresas.", desc: "¿Qué tan rápido arrancan los nuevos clientes?" }, // (nuevo)


  // Salud técnica
  { id: "uptime", cat: "Salud técnica", title: "Disponibilidad (uptime)", how: "% mensual de uptime del servicio.", desc: "¿Está arriba?" },
  { id: "errors-5xx", cat: "Salud técnica", title: "Errores 4xx/5xx", how: "Tasa por 10k requests.", desc: "¿Estable en producción?" },
  { id: "mttr", cat: "Salud técnica", title: "MTTR", how: "Tiempo medio de recuperación ante incidentes.", desc: "¿Cuán rápido reponemos?" },
];

// URLs de detalle por KPI (para modal o documentación)
const KPI_URLS = {
  adoption: "/kpi/adoption",
  active: "/kpi/active",
  activation: "/kpi/activation",
  "feature-usage": "/kpi/feature-usage",
  "time-on-task": "/kpi/time-on-task",
  success: "/kpi/success",
  steps: "/kpi/steps",
  abandon: "/kpi/abandon",
  "user-errors": "/kpi/user-errors",
  latency: "/kpi/latency",
  interruption: "/kpi/interruption",
  nps: "/kpi/nps",
  csat: "/kpi/csat",
  sus: "/kpi/sus",
  ces: "/kpi/ces",
  complaints: "/kpi/complaints",
  conversion: "/kpi/conversion",
  value: "/kpi/value",
  cross: "/kpi/cross",
  retention: "/kpi/retention",
  selfservice: "/kpi/selfservice",
  "digital-vs-branch": "/kpi/digital-vs-branch",
  "support-reduction": "/kpi/support-reduction",
  "help-usage": "/kpi/help-usage",
  "failed-login": "/kpi/failed-login",
  "2fa": "/kpi/2fa",
  kyc: "/kpi/kyc",
  fraud: "/kpi/fraud",
  onboarding: "/kpi/onboarding",
  uptime: "/kpi/uptime",
  "errors-5xx": "/kpi/errors-5xx",
  mttr: "/kpi/mttr",
};

// Catálogo enriquecido con URL
const KPI_CATALOG_WITH_URL = KPI_CATALOG.map(k => ({ ...k, url: KPI_URLS[k.id] || "" }));

// Contenido editable por KPI para el modal
// Estructura: { [id]: { title: string, subtitle: string, html: string } }
// Puedes rellenar libremente el campo html con tu propio contenido.
const KPI_DETAILS = {
  // Ejemplos:
   adoption: {
     title: "Tasa de adopción",
     subtitle: "Uso & Adopción",
     html: `<p>Define el porcentaje de empresas que usan una funcionalidad en X días desde su lanzamiento.</p>
            <ul><li>Fórmula: nuevos usuarios de la funcionalidad / total objetivo.</li></ul>`
   },
   active: {
     title: "Tasa de actividad",
     subtitle: "Uso & Adopción",
     html: `<p>Define el porcentaje de empresas que usan una funcionalidad en X días desde su lanzamiento.</p>
            <ul><li>Fórmula: nuevos usuarios de la funcionalidad / total objetivo.</li></ul>`
   },
   activation: {
     title: "El de activacion",
     subtitle: "Uso & Adopción",
     html: `<p>Define el porcentaje de empresas que usan una funcionalidad en X días desde su lanzamiento.</p>
            <ul><li>Fórmula: nuevos usuarios de la funcionalidad / total objetivo.</li></ul>`
   },
   active: {
     title: "Tasa de actividad",
     subtitle: "Uso & Adopción",
     html: `<p>Define el porcentaje de empresas que usan una funcionalidad en X días desde su lanzamiento.</p>
            <ul><li>Fórmula: nuevos usuarios de la funcionalidad / total objetivo.</li></ul>`
   },
};

const CATEGORIES = [
  "Uso & Adopción",
  "Eficiencia & Fricción",
  "Satisfacción & Experiencia",
  "Conversión & Negocio",
  "Autoservicio & Costos",
  "Seguridad & Cumplimiento",
  "Salud técnica",
];

export default function KPIWizard() {
  const [step, setStep] = React.useState(0);
  const [service, setService] = React.useState("");
  const [bizGoal, setBizGoal] = React.useState("");
  const [userGoal, setUserGoal] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const [tasks, setTasks] = React.useState(["", ""]);

  const [search, setSearch] = React.useState("");
  const [filterCats, setFilterCats] = React.useState(CATEGORIES);
  const [selected, setSelected] = React.useState({}); // {kpiId: {baseline:"", target:"", timeframe:"Qx"}}
  const [toast, setToast] = React.useState(null);
  const [info, setInfo] = React.useState({ open: false, url: "", title: "", id: "" });

  const progress = ((step + 1) / 5) * 100;

  const filteredKPIs = filterKPIsHelper(KPI_CATALOG_WITH_URL, filterCats, search);

  // Base opcional para URLs (de .env)
  const KPI_BASE = import.meta?.env?.VITE_KPI_BASE_URL || "";
  const resolveKpiUrl = (url) => {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    return `${KPI_BASE}${url}`;
  };

  // Datos enriquecidos para el modal (title/subtitle/html) con fallback al catálogo
  const kpiForModal = React.useMemo(() => KPI_CATALOG_WITH_URL.find(x => x.id === info.id), [info.id]);
  const modalDetail = React.useMemo(() => {
    if (!kpiForModal) return null;
    const d = KPI_DETAILS[info.id] || {};
    return {
      title: d.title || kpiForModal.title,
      subtitle: d.subtitle || kpiForModal.cat,
      html: d.html || `<p>${kpiForModal.desc}</p><p style="color:#6b7280;font-size:12px;">Cómo se mide: ${kpiForModal.how}</p>`
    };
  }, [info.id, kpiForModal]);

  const toggleCat = (cat) => {
    setFilterCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleKPI = (id) => {
    setSelected(prev => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = { baseline: "", target: "", timeframe: computeQuarter() };
      return copy;
    });
  };

  const updateSelected = (id, field, value) => {
    setSelected(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const addTask = () => setTasks(prev => [...prev, ""]);
  const removeTask = (i) => setTasks(prev => prev.filter((_, idx) => idx !== i));
  const updateTask = (i, v) => setTasks(prev => prev.map((t, idx) => idx === i ? v : t));

  const resetAll = () => {
    setStep(0);
    setService("");
    setBizGoal("");
    setUserGoal("");
    setNotes("");
    setTasks(["", ""]);
    setSearch("");
    setFilterCats(CATEGORIES);
    setSelected({});
  };

  const summary = () => buildSummary(selected, KPI_CATALOG_WITH_URL, service, bizGoal, userGoal, tasks);

  const copyMarkdown = async () => {
    const data = summary();
    const md = [
      `# KPI Sheet — ${data.servicio || "(servicio)"}`,
      `\n**Objetivo de negocio:** ${data.objetivo_negocio || "-"}`,
      `\n**Objetivo de usuario:** ${data.objetivo_usuario || "-"}`,
      `\n**Tareas clave:**`,
      ...data.tareas_clave.map(t => `- ${t}`),
      `\n## KPI’s seleccionados`,
      ...data.kpis.map(k => `- **${k.title}** (${k.cat}) — ${k.desc}\n  - Cómo se mide: ${k.how}\n  - Baseline: ${k.baseline || ""}\n  - Meta: ${k.target || ""}\n  - Liberación: ${k.timeframe || ""}`)
    ].join("\n");
    try { await navigator.clipboard.writeText(md); } catch {}
    alert("Resumen copiado en Markdown ✅");
  };

  // Función para guardar (sin CORS preflight)
  async function guardarResultadosKPI(payload) {
    const url = window.__KPI_ENDPOINT__;
    if (!url) throw new Error('Falta window.__KPI_ENDPOINT__');

    console.log('KPI: guardarResultadosKPI → POST', { url, payload });
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload) // sin Content-Type para evitar preflight
    });

    const txt = await res.text();
    if (txt.startsWith('error')) {
      throw new Error(txt);
    }
    console.log('KPI: guardarResultadosKPI → respuesta', txt);
    return txt; // 'ok'
  }

  // Guarda cada ejecución en un backend externo (Apps Script/Drive/Sheets)
const finalize = async () => {
  const data = { ...summary(), timestamp: new Date().toISOString() };
  console.log('KPI: payload creado', data);

  // Respaldo local (opcional)
  try {
    const key = 'kpi_wizard_runs';
    const prev = JSON.parse(localStorage.getItem(key) || '[]');
    prev.push(data);
    localStorage.setItem(key, JSON.stringify(prev));
    console.log('KPI: guardado local en localStorage');
  } catch (e) {
    console.warn('KPI: no se pudo guardar en localStorage', e);
  }

  // Lee endpoint desde env
  const ENDPOINT = import.meta.env.VITE_KPI_ENDPOINT;
  if (!ENDPOINT) {
    console.error('KPI: falta configurar VITE_KPI_ENDPOINT');
    if (setToast) {
      setToast('⚠️ Falta configurar VITE_KPI_ENDPOINT (.env.production)');
      setTimeout(() => setToast(null), 4000);
    }
    return;
  }

  const onSuccess = () => {
    console.log('KPI: envío despachado (beacon o fetch no-cors)');
    if (setToast) {
      setToast('✅ KPIs enviados');
      // reset sin bloquear el hilo principal
      setTimeout(() => {
        if (React.startTransition) {
          React.startTransition(() => resetAll());
        } else {
          resetAll();
        }
        setToast(null);
      }, 0);
    } else {
      // fallback silencioso
      if (React.startTransition) {
        React.startTransition(() => resetAll());
      } else {
        resetAll();
      }
    }
  };

  try {
    const json = JSON.stringify(data);

    // 1) Intento con sendBeacon (sin CORS)
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(
        ENDPOINT,
        new Blob([json], { type: 'text/plain;charset=UTF-8' })
      );
      if (ok) {
        console.log('KPI: beacon enviado');
        onSuccess();
        return;
      }
      console.warn('KPI: sendBeacon devolvió false, probamos fetch(no-cors)');
    }

    // 2) Fallback con fetch(no-cors) sin headers
    await fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: json });
    console.log('KPI: fetch(no-cors) despachado');
    onSuccess();
  } catch (e) {
    console.error('KPI: error enviando al endpoint', e);
    if (setToast) {
      setToast('❌ Error al enviar. Revisa la consola.');
      setTimeout(() => setToast(null), 4000);
    }
  }
};




  const Stepper = () => (
    <div className="flex items-center gap-2 mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? 'bg-magno-600' : 'bg-gray-200'}`} />
      ))}
    </div>
  );

  // =====================
  // Tests (dev opcional)
  // =====================
  React.useEffect(() => {
    try {
      // Ejecuta estos tests solo si el host define el flag global
      if (typeof window !== 'undefined' && window.__RUN_KPI_TESTS__) {
        console.group("KPIWizard :: tests");
        // computeQuarter
        console.assert(computeQuarter(new Date('2025-02-01')) === 'Q1', 'computeQuarter Feb -> Q1');
        console.assert(computeQuarter(new Date('2025-08-01')) === 'Q3', 'computeQuarter Aug -> Q3');
        // filterKPIsHelper
        const testCats = ["Uso & Adopción"]; const fk = filterKPIsHelper(KPI_CATALOG, testCats, 'adop');
        console.assert(fk.some(x => x.id === 'adoption'), 'filterKPIs finds adoption');
        // buildSummary
        const sel = { nps: { baseline: '60', target: '75', timeframe: 'Q4' } };
        const sum = buildSummary(sel, KPI_CATALOG, 'Nómina', 'Reducir costos', 'Pagar sin errores', ['Cargar archivo']);
        console.assert(sum.kpis[0].id === 'nps' && sum.servicio === 'Nómina', 'buildSummary basics');
        console.groupEnd();
      }
    } catch {}
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Mentoría KPI — Wizard</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>Pantalla {step + 1} de 5</span>
          <div className="w-40"><Progress value={progress} /></div>
        </div>
      </div>

      <Stepper />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <Fade key="s1">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={Target} title="1) Alineación de objetivos" subtitle="Define el marco antes de idear: negocio + usuario + servicio" />
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Servicio / producto</Label>
                  <div className="flex gap-2 mt-1">
                    <Input placeholder="Ej. Pago a terceros" value={service} onChange={e => setService(e.target.value)} />
                    {/* Selector removido: el servicio se ingresa manualmente */}
                  </div>
                </div>
                <div>
                  <Label>Objetivo de negocio</Label>
                  <Input placeholder="Ej. Reducir costos de atención" value={bizGoal} onChange={e => setBizGoal(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label>Objetivo de usuario</Label>
                  <Input placeholder="Ej. Completar pagos masivos sin errores" value={userGoal} onChange={e => setUserGoal(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label>Notas / contexto</Label>
                  <Textarea placeholder="Riesgos, dependencias, hipótesis…" value={notes} onChange={e => setNotes(e.target.value)} className="mt-1" />
                </div>
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 1 && (
          <Fade key="s2">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={Gauge} title="2) Tareas/flujo clave" subtitle="Enumera 2–3 micro journeys críticos y dónde hay fricción" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input placeholder={`Tarea ${i + 1} (ej. Cargar archivo de nómina)`} value={t} onChange={e => updateTask(i, e.target.value)} />
                      {tasks.length > 1 && (
                        <Button variant="ghost" size="icon" onClick={() => removeTask(i)} className="shrink-0"><Trash2 className="h-4 w-4" /></Button>
                      )}
  </div>
                  ))}
                  <Button onClick={addTask} variant="secondary" className="gap-2"><Plus className="h-4 w-4" /> Añadir tarea</Button>
                </div>
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 2 && (
          <Fade key="s3">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={ListChecks} title="3) Selección de KPI’s" subtitle="Marca los KPI’s relevantes (relevancia, medibilidad y accionabilidad)" />
              </CardHeader>
              <CardContent>
                <div className="gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-1 mb-4">
                    <Search className="h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar KPI por nombre o descripción…" value={search} onChange={e => setSearch(e.target.value)} />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* <Filter className="h-4 w-4 text-gray-500" /> */}
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => toggleCat(cat)}
                        className={`px-2 py-1 rounded-full text-xs border ${filterCats.includes(cat) ? 'bg-magno-600 text-white border-magno-600' : 'bg-white text-gray-700'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredKPIs.map(k => (
                    <label key={k.id} className={`border rounded-2xl p-4 cursor-pointer transition-shadow ${selected[k.id] ? 'border-magno-600 shadow-md' : 'hover:shadow-sm'}`}>
                      <div className="flex items-start gap-3">
                        <Checkbox checked={!!selected[k.id]} onCheckedChange={() => toggleKPI(k.id)} />
                        <div>
                          <div className="gap-2 mb-1">
                            <div className="font-medium flex items-center gap-2">
                              {k.title}
                              {k.url && (
                                <button
                                  type="button"
                                  title="Más info"
                                  onClick={(e) => { e.stopPropagation(); setInfo({ open: true, url: resolveKpiUrl(k.url), title: k.title, id: k.id }); }}
                                  className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                                >
                                  ?
                                </button>
                              )}
                            </div>
                            <div><Badge variant="outline">{k.cat}</Badge></div>
                            
                          </div>
                          <p className="text-sm text-gray-600">{k.desc}</p>
                          <p className="text-xs text-gray-400 mt-1">Cómo se mide: {k.how}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {Object.keys(selected).length === 0 && (
                  <p className="text-sm text-gray-500 mt-4">Tip: empieza marcando 2–3 KPI’s máximo para mantener el foco.</p>
                )}
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 3 && (
          <Fade key="s4">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={LineChart} title="4) Baseline y meta" subtitle="Define punto de partida y objetivo por KPI seleccionado" />
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.keys(selected).length === 0 && (
                  <p className="text-sm text-gray-500">Primero selecciona KPI’s en la pantalla anterior.</p>
                )}
                {Object.keys(selected).map(id => {
                  const k = KPI_CATALOG_WITH_URL.find(x => x.id === id);
                  return (
                    <div key={id} className="border rounded-2xl p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{k.cat}</Badge>
                          <span className="font-semibold">{k.title}</span>
                          {k.url && (
                            <button
                              type="button"
                              title="Más info"
                              onClick={() => setInfo({ open: true, url: resolveKpiUrl(k.url), title: k.title, id: k.id })}
                              className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                            >
                              ?
                            </button>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{k.how}</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3 mt-2">
                        <div>
                          <Label>Baseline</Label>
                          <Input placeholder="Ej. 82% / 2m 30s" value={selected[id].baseline} onChange={e => updateSelected(id, 'baseline', e.target.value)} />
                        </div>
                        <div>
                          <Label>Meta</Label>
                          <Input placeholder="Ej. 92% / 1m 45s" value={selected[id].target} onChange={e => updateSelected(id, 'target', e.target.value)} />
                        </div>
                        <div>
                          <Label>Liberación</Label>
                          <Input placeholder="Momento estimado para liberar (opcional)" value={selected[id].timeframe || ''} onChange={e => updateSelected(id, 'timeframe', e.target.value)} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 4 && (
          <Fade key="s5">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={CheckCircle2} title="5) Resumen y confirmación" subtitle="Todo listo para compartir y repetir en otro servicio" />
              </CardHeader>
              <CardContent>
                <div className="grid md:[grid-template-columns:3fr_4fr] gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contexto</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Servicio / producto:</span> {service || <i className="text-gray-400">—</i>}</p>
                      <p><span className="font-medium">Objetivo de negocio:</span> <br /> {bizGoal || <i className="text-gray-400">—</i>}</p>
                      <p><span className="font-medium">Objetivo de usuario:</span> <br /> {userGoal || <i className="text-gray-400">—</i>}</p>
                      {notes && <p className="text-gray-500">{notes}</p>}
                    </div>
                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-2">Tareas clave</h4>
                    <ul className="list-disc ml-5 text-sm space-y-1">
                      {tasks.filter(Boolean).map((t, i) => (<li key={i}>{t}</li>))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">KPI’s seleccionados</h4>
                    <div className="space-y-3">
                      {Object.keys(selected).length === 0 && <p className="text-sm text-gray-500">No hay KPI’s seleccionados.</p>}
                      {Object.keys(selected).map(id => {
                        const k = KPI_CATALOG_WITH_URL.find(x => x.id === id);
                        const meta = selected[id];
                        return (
                          <div key={id} className="border rounded-2xl p-3">
                            <div className="items-center justify-between gap-2">
                              <div className="mb-2">
                                  <Badge variant="outline">{k.cat}</Badge>
                                  
                              </div>
                              <div className="gap-2">
                                <div className="font-medium flex items-center gap-2">
                                  {k.title}
                                  {k.url && (
                                    <button
                                      type="button"
                                      title="Más info"
                                      onClick={() => setInfo({ open: true, url: resolveKpiUrl(k.url), title: k.title, id: k.id })}
                                      className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                                    >
                                      ?
                                    </button>
                                  )}
                                </div>
                                <div className="text-xs text-gray-500">{k.desc}</div>
                              </div>
                              
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs mt-2">
                              <div><span className="text-gray-500">Baseline:</span> {meta.baseline || <i>—</i>}</div>
                              <div><span className="text-gray-500">Meta:</span> {meta.target || <i>—</i>}</div>
                              <div><span className="text-gray-500">Liberación:</span> {meta.timeframe || <i>—</i>}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <Button onClick={copyMarkdown} className="gap-2"><Copy className="h-4 w-4" /> Copiar resumen (Markdown)</Button>
                  <Button variant="secondary" onClick={resetAll} className="gap-2"><RefreshCw className="h-4 w-4" /> Nuevo servicio</Button>
                </div>
              </CardContent>
            </Card>
          </Fade>
        )}
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <Button
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep(s => Math.max(0, s - 1))}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Anterior
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">{Object.keys(selected).length} KPI’s</span>
          <Button onClick={() => (step === 4 ? finalize() : setStep(s => Math.min(4, s + 1)))} className="gap-2">
            {step === 4 ? 'Finalizar' : 'Siguiente'} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
   {/* Toast flotante dentro del root (no rompe el nodo raíz) */}
      {info.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => { setInfo({ open: false, url: '', title: '', id: '' }); }}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 border-b">
              <div className="font-semibold text-sm">Más info: {modalDetail?.title || info.title}</div>
              <div className="flex items-center gap-2">
                {info.url && <a href={info.url} target="_blank" rel="noreferrer" className="text-xs text-magno-600 underline">Abrir en nueva pestaña</a>}
                <a href={`https://www.google.com/search?q=${encodeURIComponent('KPI ' + info.title)}&udm=14`} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline">Ver en Google (Gemini)</a>
                <button className="w-7 h-7 rounded-full border text-sm" onClick={() => { setInfo({ open: false, url: '', title: '', id: '' }); }}>×</button>
              </div>
            </div>
            <div className="flex-1">
              {modalDetail ? (
                <div className="p-4 overflow-auto h-full">
                  {modalDetail?.subtitle && <div className="text-xs text-gray-500 mb-2">{modalDetail.subtitle}</div>}
                  <div className="prose max-w-none text-sm" dangerouslySetInnerHTML={{ __html: modalDetail.html }} />
                </div>
              ) : info.url ? (
                <iframe src={info.url} className="w-full h-full rounded-b-xl" title="Más info" />
              ) : (
                <div className="p-4 text-sm text-gray-500">No hay URL disponible para este KPI.</div>
              )}
            </div>
          </div>
        </div>
      )}
   {toast && (
     <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-black/90 text-white px-4 py-2 shadow-lg">
       {toast}
     </div>
   )}
 </div>
  );
}
