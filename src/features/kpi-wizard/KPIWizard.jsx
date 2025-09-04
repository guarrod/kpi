import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import Fade from "./components/Fade";
import StepService from "./steps/StepService";
import StepMVP from "./steps/StepMVP";
import StepSelectKPIs from "./steps/StepSelectKPIs";
import StepTargets from "./steps/StepTargets";
import StepSummary from "./steps/StepSummary";
import KPI_DETAILS from "./kpi-details";
import { createRun, saveRun, loadRun } from "./runs-storage";

// Helpers puros
const computeQuarter = (d = new Date()) => {
  const q = Math.floor(d.getMonth() / 3) + 1;
  return `Q${q}`;
};

const filterKPIsHelper = (catalog, cats, search) => {
  const s = (search || "").toLowerCase();
  return catalog.filter(
    (k) =>
      cats.includes(k.cat) &&
      (k.title.toLowerCase().includes(s) ||
        k.desc.toLowerCase().includes(s) ||
        k.how.toLowerCase().includes(s))
  );
};

const buildSummary = (selected, catalog, service, bizGoal, userGoal, tasks) => {
  const selectedKPIs = Object.keys(selected).map((id) => ({
    id,
    ...catalog.find((k) => k.id === id),
    ...selected[id],
  }));
  return {
    servicio: service,
    objetivo_negocio: bizGoal,
    objetivo_usuario: userGoal,
    tareas_clave: (tasks || []).filter(Boolean),
    kpis: selectedKPIs,
  };
};

// Catálogo de KPI (resumen + cómo)
const KPI_CATALOG = [
  // Uso & Adopción
  { id: "adoption", cat: "Uso & Adopción", title: "Tasa de adopción", how: "% de empresas que usan una funcionalidad en X días desde lanzamiento.", desc: "¿Se empieza a usar lo nuevo?" },
  { id: "active", cat: "Uso & Adopción", title: "Usuarios activos (DAU/MAU)", how: "Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.", desc: "¿Hay hábito?" },
  { id: "activation", cat: "Uso & Adopción", title: "Tasa de activación", how: "% que completan la primera operación clave tras registrarse.", desc: "¿Llegan al momento 'aha'?" },
  { id: "featureUsage", cat: "Uso & Adopción", title: "Uso por funcionalidad", how: "% de sesiones con uso de la función (ej. pagos masivos).", desc: "¿Qué tanto se usa cada módulo?" },

  // Eficiencia & Fricción
  { id: "timeOnTask", cat: "Eficiencia & Fricción", title: "Tiempo en tarea", how: "Promedio (p50/p90) desde inicio a confirmación.", desc: "¿Qué tan rápido ocurre?" },
  { id: "success", cat: "Eficiencia & Fricción", title: "Tasa de éxito", how: "% de operaciones completadas sin error (sin necesidad de reintentos).", desc: "¿Se logra sin trabas?" },
  { id: "steps", cat: "Eficiencia & Fricción", title: "Pasos por tarea", how: "Promedio de pantallas/clics para completar.", desc: "¿Es compacto?" },
  { id: "abandon", cat: "Eficiencia & Fricción", title: "Tasa de abandono", how: "% que inician y no finalizan el flujo.", desc: "¿Dónde se caen?" },
  { id: "userError", cat: "Eficiencia & Fricción", title: "Errores de usuario/flujo", how: "Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.", desc: "¿Qué rompe la tarea para el cliente?" },
  { id: "latency", cat: "Eficiencia & Fricción", title: "Tiempo de respuesta", how: "ms de latencia en endpoints/pantallas clave.", desc: "¿Carga rápido?" },
  { id: "interruption", cat: "Eficiencia & Fricción", title: "Transacciones interrumpidas", how: "% de operaciones que no concluyen por timeout o caída técnica.", desc: "¿Qué tan confiable es?" },

  // Satisfacción & Experiencia
  { id: "nps", cat: "Satisfacción & Experiencia", title: "NPS", how: "% promotores − % detractores tras usar el módulo.", desc: "¿Nos recomendarían?" },
  { id: "csat", cat: "Satisfacción & Experiencia", title: "CSAT", how: "Promedio de satisfacción 1–5 al finalizar tarea.", desc: "¿Quedaron conformes?" },
  { id: "sus", cat: "Satisfacción & Experiencia", title: "SUS", how: "Escala SUS 0–100 post-uso.", desc: "¿Qué tan usable es?" },

  // Conversión & Negocio
  { id: "conversion", cat: "Conversión & Negocio", title: "Tasa de conversión", how: "% de usuarios que completan una acción objetivo.", desc: "¿Cuántos completan?" },
  { id: "value", cat: "Conversión & Negocio", title: "Valor por usuario", how: "ARPU u otra medida de valor.", desc: "¿Cuánto valor produce?" },
  { id: "cross", cat: "Conversión & Negocio", title: "Cross/Up-sell", how: "% de clientes que adoptan módulos adicionales.", desc: "¿Se expande el uso?" },
  { id: "retention", cat: "Conversión & Negocio", title: "Retención", how: "% de clientes que siguen activos.", desc: "¿Se quedan?" },

  // Autoservicio & Costos
  { id: "selfservice", cat: "Autoservicio & Costos", title: "Autoservicio", how: "% de tareas resueltas sin soporte humano.", desc: "¿Cuánto se auto-resuelve?" },
  { id: "digitalVsBranch", cat: "Autoservicio & Costos", title: "Digital vs Sucursal", how: "% de operaciones digitales vs presenciales.", desc: "¿Cuánto migra a digital?" },
  { id: "supportReduction", cat: "Autoservicio & Costos", title: "Reducción de soporte", how: "Variación de tickets por 1.000 usuarios.", desc: "¿Baja el soporte?" },

  // Seguridad & Cumplimiento
  { id: "helpUsage", cat: "Seguridad & Cumplimiento", title: "Uso de ayuda", how: "% de sesiones con vistas a ayuda.", desc: "¿Necesitan ayuda?" },
  { id: "failedLogin", cat: "Seguridad & Cumplimiento", title: "Login fallido", how: "Intentos fallidos por usuario.", desc: "¿Problemas de acceso?" },
  { id: "twoFa", cat: "Seguridad & Cumplimiento", title: "2FA", how: "% de sesiones con 2FA.", desc: "¿Aumenta la seguridad?" },
  { id: "kyc", cat: "Seguridad & Cumplimiento", title: "KYC", how: "% de KYC completado.", desc: "¿Cumplimiento?" },
  { id: "fraud", cat: "Seguridad & Cumplimiento", title: "Fraude", how: "Intentos/bloqueos por fraude.", desc: "¿Riesgo controlado?" },

  // Salud técnica
  { id: "onboarding", cat: "Salud técnica", title: "Onboarding técnico", how: "Tiempo/esfuerzo de alta técnica.", desc: "¿Cuán complejo es?" },
  { id: "uptime", cat: "Salud técnica", title: "Uptime", how: "% de disponibilidad.", desc: "¿Disponibilidad estable?" },
  { id: "errors5xx", cat: "Salud técnica", title: "Errores 5xx", how: "Errores 5xx por 10k req.", desc: "¿Errores del servidor?" },
  { id: "mttr", cat: "Salud técnica", title: "MTTR", how: "Tiempo medio de recuperación.", desc: "¿Qué tan rápido reponemos?" },
];

const KPI_URLS = {
  adoption: "/kpi/adoption",
  active: "/kpi/active",
  activation: "/kpi/activation",
  featureUsage: "/kpi/featureUsage",
  timeOnTask: "/kpi/timeOnTask",
  success: "/kpi/success",
  steps: "/kpi/steps",
  abandon: "/kpi/abandon",
  userError: "/kpi/userError",
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
  digitalVsBranch: "/kpi/digitalVsBranch",
  supportReduction: "/kpi/supportReduction",
  helpUsage: "/kpi/helpUsage",
  failedLogin: "/kpi/failedLogin",
  twoFa: "/kpi/twoFa",
  kyc: "/kpi/kyc",
  fraud: "/kpi/fraud",
  onboarding: "/kpi/onboarding",
  uptime: "/kpi/uptime",
  errors5xx: "/kpi/errors5xx",
  mttr: "/kpi/mttr",
};

const KPI_CATALOG_WITH_URL = KPI_CATALOG.map((k) => ({ ...k, url: KPI_URLS[k.id] || "" }));


const CATEGORIES = [
  "Uso & Adopción",
  "Eficiencia & Fricción",
  "Satisfacción & Experiencia",
  "Conversión & Negocio",
  "Autoservicio & Costos",
  "Seguridad & Cumplimiento",
  "Salud técnica",
];

async function sha256Base64(str) {
  try {
    const enc = new TextEncoder();
    const buf = await crypto.subtle.digest("SHA-256", enc.encode(str));
    const bytes = new Uint8Array(buf);
    let bin = "";
    for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  } catch {
    return "";
  }
}

export default function KPIWizard() {
  const [step, setStep] = React.useState(0);
  const [runId, setRunId] = React.useState(null);
  const [service, setService] = React.useState("");
  const [bizGoal, setBizGoal] = React.useState("");
  const [userGoal, setUserGoal] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [tasks, setTasks] = React.useState(["", ""]);
  const [search, setSearch] = React.useState("");
  const [filterCats, setFilterCats] = React.useState(CATEGORIES);
  const [selected, setSelected] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [info, setInfo] = React.useState({ open: false, url: "", title: "", id: "" });

  const progress = ((step + 1) / 5) * 100;
  const filteredKPIs = filterKPIsHelper(KPI_CATALOG_WITH_URL, filterCats, search);

  const KPI_BASE = import.meta?.env?.VITE_KPI_BASE_URL || "";
  const resolveKpiUrl = (url) => {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    return `${KPI_BASE}${url}`;
  };

  const kpiForModal = React.useMemo(
    () => KPI_CATALOG_WITH_URL.find((x) => x.id === info.id),
    [info.id]
  );
  const modalDetail = React.useMemo(() => {
    if (!kpiForModal) return null;
    const d = KPI_DETAILS[info.id];
    if (!d) return null; // si no hay detalle precargado, usamos iframe o fallback
    return {
      title: d.title || kpiForModal.title,
      subtitle: d.subtitle || kpiForModal.cat,
      html:
        d.html ||
        `<p>${kpiForModal.desc}</p><p style="color:#6b7280;font-size:12px;">Cómo se mide: ${kpiForModal.how}</p>`,
    };
  }, [info.id, kpiForModal]);

  const toggleCat = (cat) => {
    setFilterCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleKPI = (id) => {
    setSelected((prev) => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = { baseline: "", target: "", timeframe: computeQuarter() };
      return copy;
    });
  };

  const updateSelected = (id, field, value) => {
    setSelected((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const addTask = () => setTasks((prev) => [...prev, ""]);
  const removeTask = (i) => setTasks((prev) => prev.filter((_, idx) => idx !== i));
  const updateTask = (i, v) => setTasks((prev) => prev.map((t, idx) => (idx === i ? v : t)));

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

  const startNewRun = () => {
    if (typeof window === 'undefined') {
      resetAll();
      return;
    }
    const prevService = service;
    const newId = createRun({ title: prevService || '(sin nombre)' });
    setRunId(newId);
    const url = new URL(window.location.href);
    url.searchParams.set('run', newId);
    window.history.replaceState({}, '', url.toString());
    resetAll();
  };

  const summary = () =>
    buildSummary(
      selected,
      KPI_CATALOG_WITH_URL,
      service,
      bizGoal,
      userGoal,
      tasks
    );

  const copyMarkdown = async () => {
    const data = summary();
    const md = [
      `# KPI Sheet – ${data.servicio || "(servicio)"}`,
      `\n**Objetivo de negocio:** ${data.objetivo_negocio || "-"}`,
      `\n**Objetivo de usuario:** ${data.objetivo_usuario || "-"}`,
      `\n**Tareas clave:**`,
      ...data.tareas_clave.map((t) => `- ${t}`),
      `\n## KPIs seleccionados`,
      ...data.kpis.map(
        (k) =>
          `- **${k.title}** (${k.cat}) – ${k.desc}\n  - Cómo se mide: ${k.how}\n  - Baseline: ${k.baseline || ""}\n  - Meta: ${k.target || ""}\n  - Liberación: ${k.timeframe || ""}`
      ),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(md);
    } catch {}
    alert("Resumen copiado en Markdown.");
  };

  const finalize = async () => {
    const core = summary();
    const payloadHash = await sha256Base64(JSON.stringify(core));
    const data = { id: runId, ...core, payloadHash, timestamp: new Date().toISOString() };
    try {
      const key = "kpi_wizard_runs";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push(data);
      localStorage.setItem(key, JSON.stringify(prev));
    } catch (e) {}

    const ENDPOINT = import.meta.env.VITE_KPI_ENDPOINT;
    if (!ENDPOINT) {
      if (setToast) {
        setToast("Falta configurar VITE_KPI_ENDPOINT (.env.production)");
        setTimeout(() => setToast(null), 4000);
      }
      return;
    }

    const onSuccess = () => {
      try {
        const snap = snapshot();
        saveRun(runId, { ...snap, status: 'sent' }, { title: service || '(sin nombre)' });
      } catch {}
      if (setToast) {
        setToast("OK. KPIs enviados");
        setTimeout(() => {
          if (React.startTransition) { React.startTransition(() => startNewRun()); }
          else { startNewRun(); }
          setToast(null);
        }, 0);
      } else {
        if (React.startTransition) { React.startTransition(() => startNewRun()); }
        else { startNewRun(); }
      }
    };

    try {
      const json = JSON.stringify(data);
      if (navigator.sendBeacon) {
        const url = (() => {
          try {
            const u = new URL(ENDPOINT, window.location.href);
            u.searchParams.set('ua', navigator.userAgent || '');
            return u.toString();
          } catch { return ENDPOINT; }
        })();
        const ok = navigator.sendBeacon(
          url,
          new Blob([json], { type: "text/plain;charset=UTF-8" })
        );
        if (ok) {
          onSuccess();
          return;
        }
      }
      const postUrl = (() => {
        try {
          const u = new URL(ENDPOINT, window.location.href);
          u.searchParams.set('ua', navigator.userAgent || '');
          return u.toString();
        } catch { return ENDPOINT; }
      })();
      await fetch(postUrl, { method: "POST", mode: "no-cors", body: json });
      onSuccess();
    } catch (e) {
      if (setToast) {
        setToast("Error al enviar. Revisa la consola.");
        setTimeout(() => setToast(null), 4000);
      }
    }
  };

  const Stepper = () => (
    <div className="flex items-center gap-2 mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-full ${i <= step ? "bg-magno-600" : "bg-gray-200"}`}
        />
      ))}
    </div>
  );

  // ----- Autosave helpers -----
  const snapshot = React.useCallback(() => ({
    id: runId,
    step,
    service,
    bizGoal,
    userGoal,
    notes,
    tasks,
    selected,
    status: "draft",
  }), [runId, step, service, bizGoal, userGoal, notes, tasks, selected]);

  // Initialize run: load from URL ?run= or create new
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const existing = url.searchParams.get('run');
    if (existing) {
      const saved = loadRun(existing);
      if (saved) {
        setRunId(existing);
        setStep(saved.step ?? 0);
        setService(saved.service ?? "");
        setBizGoal(saved.bizGoal ?? "");
        setUserGoal(saved.userGoal ?? "");
        setNotes(saved.notes ?? "");
        setTasks(Array.isArray(saved.tasks) ? saved.tasks : ["", ""]);
        setSelected(saved.selected || {});
        return;
      }
    }
    const id = createRun({ title: service || "(sin nombre)" });
    setRunId(id);
    url.searchParams.set('run', id);
    window.history.replaceState({}, '', url.toString());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Throttled autosave on changes
  const saveRef = React.useRef({ timer: null, lastHash: "" });
  React.useEffect(() => {
    if (!runId) return;
    const data = snapshot();
    const hash = JSON.stringify(data);
    if (saveRef.current.lastHash === hash) return;
    if (saveRef.current.timer) clearTimeout(saveRef.current.timer);
    saveRef.current.timer = setTimeout(() => {
      try {
        saveRun(runId, data, { title: service || '(sin nombre)' });
        saveRef.current.lastHash = hash;
        // console.debug('Autosaved run', runId);
      } catch (e) {
        // console.warn('Autosave failed', e);
      }
    }, 1500);
    return () => {
      if (saveRef.current.timer) clearTimeout(saveRef.current.timer);
    };
  }, [runId, service, bizGoal, userGoal, notes, tasks, selected, step, snapshot]);

  // Flush save on page hide/unload
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const flush = () => {
      if (!runId) return;
      try {
        const data = snapshot();
        saveRun(runId, data, { title: service || '(sin nombre)' });
        saveRef.current.lastHash = JSON.stringify(data);
      } catch {}
    };
    const onVis = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('visibilitychange', onVis);
    window.addEventListener('pagehide', flush);
    window.addEventListener('beforeunload', flush);
    return () => {
      window.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pagehide', flush);
      window.removeEventListener('beforeunload', flush);
    };
  }, [runId, snapshot, service]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Mentoría KPI – Wizard</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>Pantalla {step + 1} de 5</span>
          <div className="w-40"><Progress value={progress} /></div>
          <Button
            variant="outline"
            size="sm"
            className="ml-2 gap-2"
            onClick={() => {
              if (window.confirm('¿Resetear el flujo actual? Se perderán los cambios no enviados.')) {
                startNewRun();
              }
            }}
            title="Resetear y empezar desde cero"
          >
            <RefreshCw className="h-4 w-4" /> Resetear
          </Button>
        </div>
      </div>

      <Stepper />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <Fade key="s1">
            <StepService
              service={service}
              setService={setService}
              bizGoal={bizGoal}
              setBizGoal={setBizGoal}
              userGoal={userGoal}
              setUserGoal={setUserGoal}
              notes={notes}
              setNotes={setNotes}
            />
          </Fade>
        )}

        {step === 1 && (
          <Fade key="s2">
            <StepMVP
              tasks={tasks}
              addTask={addTask}
              removeTask={removeTask}
              updateTask={updateTask}
            />
          </Fade>
        )}

        {step === 2 && (
          <Fade key="s3">
            <StepSelectKPIs
              search={search}
              setSearch={setSearch}
              categories={CATEGORIES}
              filterCats={filterCats}
              toggleCat={toggleCat}
              filteredKPIs={filteredKPIs}
              selected={selected}
              toggleKPI={toggleKPI}
              setInfo={setInfo}
              resolveKpiUrl={resolveKpiUrl}
            />
          </Fade>
        )}

        {step === 3 && (
          <Fade key="s4">
            <StepTargets
              selected={selected}
              kpiCatalogWithUrl={KPI_CATALOG_WITH_URL}
              updateSelected={updateSelected}
              setInfo={setInfo}
              resolveKpiUrl={resolveKpiUrl}
            />
          </Fade>
        )}

        {step === 4 && (
          <Fade key="s5">
            <StepSummary
              service={service}
              bizGoal={bizGoal}
              userGoal={userGoal}
              notes={notes}
              tasks={tasks}
              selected={selected}
              kpiCatalogWithUrl={KPI_CATALOG_WITH_URL}
              setInfo={setInfo}
              resolveKpiUrl={resolveKpiUrl}
              copyMarkdown={copyMarkdown}
              resetAll={resetAll}
            />
          </Fade>
        )}
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <Button
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Anterior
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">{Object.keys(selected).length} KPIs</span>
          <Button
            onClick={() => (step === 4 ? finalize() : setStep((s) => Math.min(4, s + 1)))}
            className="gap-2"
          >
            {step === 4 ? "Finalizar" : "Siguiente"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {info.open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => {
            setInfo({ open: false, url: "", title: "", id: "" });
          }}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b">
              <div className="font-semibold text-sm">
                Más info: {modalDetail?.title || info.title}
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-full border text-sm"
                  onClick={() => {
                    setInfo({ open: false, url: "", title: "", id: "" });
                  }}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              {modalDetail ? (
                <div className="p-4 overflow-y-auto h-full">
                  {modalDetail?.subtitle && (
                    <div className="text-xs text-gray-500 mb-2">
                      {modalDetail.subtitle}
                    </div>
                  )}
                  <div
                    className="prose max-w-none text-sm"
                    dangerouslySetInnerHTML={{ __html: modalDetail.html }}
                  />
                </div>
              ) : info.url ? (
                <iframe
                  src={info.url}
                  className="w-full h-full rounded-b-xl"
                  title="Más info"
                />
              ) : (
                <div className="p-4 text-sm text-gray-500">
                  No hay URL disponible para este KPI.
                </div>
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
