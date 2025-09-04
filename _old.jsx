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
// Cat+ílogo de KPI's (resumen + c+¦mo)
// ---------------------------------
const KPI_CATALOG = [
  // Uso & Adopci+¦n
  { id: "adoption", cat: "Uso & Adopci+¦n", title: "Tasa de adopci+¦n", how: "% de empresas que usan una funcionalidad en X d+¡as desde lanzamiento.", desc: "-+Se empieza a usar lo nuevo?" },
  { id: "active", cat: "Uso & Adopci+¦n", title: "Usuarios activos (DAU/MAU)", how: "Usuarios +¦nicos diarios/mensuales que iniciaron sesi+¦n o realizaron acciones.", desc: "-+Hay h+íbito?" },
  { id: "activation", cat: "Uso & Adopci+¦n", title: "Tasa de activaci+¦n", how: "% que completan la primera operaci+¦n clave tras registrarse.", desc: "-+Llegan al momento 'aha'?" },
  { id: "featureUsage", cat: "Uso & Adopci+¦n", title: "Uso por funcionalidad", how: "% de sesiones con uso de la funci+¦n (ej. pagos masivos).", desc: "-+Qu+® tanto se usa cada m+¦dulo?" },

  // Eficiencia & Fricci+¦n
  { id: "timeOnTask", cat: "Eficiencia & Fricci+¦n", title: "Tiempo en tarea", how: "Promedio (p50/p90) desde inicio a confirmaci+¦n.", desc: "-+Qu+® tan r+ípido ocurre?" },
  { id: "success", cat: "Eficiencia & Fricci+¦n", title: "Tasa de +®xito", how: "% de operaciones completadas sin error (sin necesidad de reintentos).", desc: "-+Se logra sin trabas?" }, // (fusionado con retry)
  { id: "steps", cat: "Eficiencia & Fricci+¦n", title: "Pasos por tarea", how: "Promedio de pantallas/clics para completar.", desc: "-+Es compacto?" },
  { id: "abandon", cat: "Eficiencia & Fricci+¦n", title: "Tasa de abandono", how: "% que inician y no finalizan el flujo.", desc: "-+D+¦nde se caen?" },
  { id: "userError", cat: "Eficiencia & Fricci+¦n", title: "Errores de usuario/flujo", how: "Errores percibidos (ej. validaci+¦n fallida) por cada 1.000 operaciones.", desc: "-+Qu+® rompe la tarea para el cliente?" }, // (ajustado)
  { id: "latency", cat: "Eficiencia & Fricci+¦n", title: "Tiempo de respuesta", how: "ms de latencia en endpoints/pantallas clave.", desc: "-+Carga r+ípido?" },
  { id: "interruption", cat: "Eficiencia & Fricci+¦n", title: "Transacciones interrumpidas", how: "% de operaciones que no concluyen por timeout o ca+¡da t+®cnica.", desc: "-+Qu+® tan confiable es?" }, // (nuevo)

  // Satisfacci+¦n & Experiencia
  { id: "nps", cat: "Satisfacci+¦n & Experiencia", title: "NPS", how: "% promotores ÔêÆ % detractores tras usar el m+¦dulo.", desc: "-+Nos recomendar+¡an?" },
  { id: "csat", cat: "Satisfacci+¦n & Experiencia", title: "CSAT", how: "Promedio de satisfacci+¦n 1ÔÇô5 al finalizar tarea.", desc: "-+Quedaron conformes?" },
  { id: "sus", cat: "Satisfacci+¦n & Experiencia", title: "SUS", how: "Escala SUS 0ÔÇô100 post-uso o en tests.", desc: "-+Es usable?" },
  { id: "ces", cat: "Satisfacci+¦n & Experiencia", title: "CES", how: "Esfuerzo percibido 1ÔÇô5 para completar.", desc: "-+Cu+ínto cost+¦ hacerlo?" },
  { id: "complaints", cat: "Satisfacci+¦n & Experiencia", title: "Reclamos/incidencias", how: "Tasa por 10k operaciones y tiempo de resoluci+¦n.", desc: "-+Cu+ínto ruido generamos?" },

  // Conversi+¦n & Negocio
  { id: "conversion", cat: "Conversi+¦n & Negocio", title: "Tasa de conversi+¦n", how: "% que completan la acci+¦n clave (apertura, cr+®dito, etc.).", desc: "-+Se concreta el valor?" },
  { id: "value", cat: "Conversi+¦n & Negocio", title: "Valor transaccionado", how: "USD movidos por canal/funcionalidad.", desc: "-+Cu+ínto se mueve?" },
  { id: "cross", cat: "Conversi+¦n & Negocio", title: "Cross-selling digital", how: "% que contratan otro producto desde el flujo.", desc: "-+Ampliamos relaci+¦n?" },
  { id: "retention", cat: "Conversi+¦n & Negocio", title: "Retenci+¦n (churn inverso)", how: "% que siguen activos en X meses.", desc: "-+Se quedan con nosotros?" },

  // Autoservicio & Costos
  { id: "selfservice", cat: "Autoservicio & Costos", title: "% autogesti+¦n exitosa", how: "% de casos resueltos sin intervenci+¦n humana.", desc: "-+Resuelven solos?" },
  { id: "digitalVsBranch", cat: "Autoservicio & Costos", title: "Digital vs. sucursal", how: "% de operaciones digitales vs. presenciales.", desc: "-+Migramos el canal?" },
  { id: "supportReduction", cat: "Autoservicio & Costos", title: "Reducci+¦n llamadas soporte", how: "Variaci+¦n de llamadas sobre el tema.", desc: "-+Baj+¦ el costo?" },
  { id: "helpUsage", cat: "Autoservicio & Costos", title: "Uso de ayuda digital", how: "% de consultas resueltas v+¡a FAQ/chatbot vs tickets.", desc: "-+Qu+® tan efectiva es la ayuda digital?" }, // (nuevo)


  // Seguridad & Cumplimiento
  { id: "failedLogin", cat: "Seguridad & Cumplimiento", title: "Intentos de login fallidos", how: "# por 1.000 sesiones, bloqueo de cuentas.", desc: "-+Hay fricci+¦n o riesgo?" },
  { id: "twoFa", cat: "Seguridad & Cumplimiento", title: "2FA +®xito", how: "% de autenticaciones 2FA exitosas.", desc: "-+Funciona la seguridad?" },
  { id: "kyc", cat: "Seguridad & Cumplimiento", title: "Tiempo KYC", how: "Minutos promedio de verificaci+¦n.", desc: "-+Qu+® tan +ígil es?" },
  { id: "fraud", cat: "Seguridad & Cumplimiento", title: "Fraude detectado/prevenido", how: "# / monto bloqueado.", desc: "-+Protegemos bien?" },
  { id: "onboarding", cat: "Seguridad & Cumplimiento", title: "Tiempo de activaci+¦n de empresa/usuario", how: "Tiempo promedio desde registro hasta poder operar en banca empresas.", desc: "-+Qu+® tan r+ípido arrancan los nuevos clientes?" }, // (nuevo)


  // Salud t+®cnica
  { id: "uptime", cat: "Salud t+®cnica", title: "Disponibilidad (uptime)", how: "% mensual de uptime del servicio.", desc: "-+Est+í arriba?" },
  { id: "errors5xx", cat: "Salud t+®cnica", title: "Errores 4xx/5xx", how: "Tasa por 10k requests.", desc: "-+Estable en producci+¦n?" },
  { id: "mttr", cat: "Salud t+®cnica", title: "MTTR", how: "Tiempo medio de recuperaci+¦n ante incidentes.", desc: "-+Cu+ín r+ípido reponemos?" },
];

// URLs de detalle por KPI (para modal o documentaci+¦n)
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

// Cat+ílogo enriquecido con URL
const KPI_CATALOG_WITH_URL = KPI_CATALOG.map(k => ({ ...k, url: KPI_URLS[k.id] || "" }));

// Contenido editable por KPI para el modal
// Estructura: { [id]: { title: string, subtitle: string, html: string } }
// Puedes rellenar libremente el campo html con tu propio contenido.
const KPI_DETAILS = {
  // Ejemplos:
  adoption: {
  title: "Tasa de adopci+¦n",
  subtitle: "Mide la velocidad y amplitud de uso de nuevas funcionalidades o productos.",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de adopci+¦n</strong> refleja el porcentaje de usuarios o empresas que empiezan a utilizar una nueva
        funcionalidad o producto dentro de un periodo de tiempo espec+¡fico (por ejemplo, durante las primeras 
        7, 14 o 30 d+¡as tras su lanzamiento). Es un indicador esencial para entender la aceptaci+¦n inicial de 
        una novedad y evaluar si el esfuerzo de desarrollo est+í generando el impacto esperado.
      </p>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de adopci+¦n (%) = (N+¦mero de usuarios que adoptan la nueva funcionalidad +À 
            Total de usuarios objetivo) +ù 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La proporci+¦n de clientes que prueban o integran la nueva funcionalidad.</li>
          <li>La efectividad de las campa+¦as de lanzamiento y comunicaci+¦n.</li>
          <li>El nivel de inter+®s real que genera una mejora o producto en la base de usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Una tasa <strong>alta</strong> indica que la innovaci+¦n responde a una necesidad concreta y ofrece valor claro.</li>
          <li>Una tasa <strong>baja</strong> puede sugerir que los usuarios no perciben el beneficio, que la soluci+¦n no es lo suficientemente simple, o que falta difusi+¦n interna/externa.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Frecuencia recomendada de medici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Semanal durante el primer mes tras el lanzamiento.</li>
          <li>Mensual para evaluar la consolidaci+¦n del uso.</li>
        </ul>
      </div>
    </div>
  `
  },
  active: {
  title: "Usuarios activos (DAU/MAU)",
  subtitle: "Mide h+íbito y recurrencia de uso en ventanas diaria y mensual.",
  html: `
    <div class="space-y-4">
      <p>
        <strong>DAU</strong> (Daily Active Users) y <strong>MAU</strong> (Monthly Active Users) cuantifican cu+íntos
        usuarios +¦nicos interact+¦an con el producto en un d+¡a o en un mes, respectivamente. En banca empresas,
        ayuda a entender si hay <em>h+íbito</em> y recurrencia de uso en tareas clave (p. ej., pagos, consultas de saldos).
      </p>

      <div>
        <p class="font-semibold">Definiciones:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU:</strong> N+¦mero de usuarios <em>+¦nicos</em> que realizaron al menos una acci+¦n v+ílida en un d+¡a (login, consulta, transacci+¦n, etc.).</li>
          <li><strong>MAU:</strong> N+¦mero de usuarios <em>+¦nicos</em> que realizaron al menos una acci+¦n v+ílida en los +¦ltimos 30 d+¡as.</li>
          <li><strong>Stickiness (DAU/MAU):</strong> Relaci+¦n que aproxima la frecuencia de uso mensual. Un mayor valor sugiere h+íbito m+ís fuerte.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmulas:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>DAU = # usuarios +¦nicos activos en D</code></li>
          <li><code>MAU = # usuarios +¦nicos activos en +¦ltimos 30 d+¡as</code></li>
          <li><code>Stickiness (%) = (DAU +À MAU) +ù 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La magnitud de la base que realmente usa el canal digital (no solo registrada).</li>
          <li>La frecuencia/constancia con la que vuelven (stickiness).</li>
          <li>Impacto de lanzamientos o campa+¦as en el uso recurrente (picos vs consolidaci+¦n).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n y se+¦ales:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU alto pero stickiness bajo:</strong> picos por eventos (p. ej. fin de mes) pero poco h+íbito diario.</li>
          <li><strong>MAU alto y stickiness creciente:</strong> adopci+¦n sostenida y m+ís tareas recurrentes en digital.</li>
          <li><strong>Ca+¡das bruscas:</strong> pueden indicar incidentes, fricci+¦n nueva o cambios en procesos (ej. token, KYC).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de ÔÇ£usuario activoÔÇØ claro:</strong> define qu+® cuenta como actividad v+ílida (evitar solo ÔÇ£abrir appÔÇØ).</li>
          <li><strong>Segmenta por empresa/rol:</strong> banca empresas tiene m+¦ltiples usuarios por cuenta; segmenta por rol (pagador, aprobador, visor).</li>
          <li><strong>Vista por m+¦dulo:</strong> DAU/MAU global + por funcionalidades clave (p. ej., N+¦mina, Transferencias exterior).</li>
          <li><strong>Normaliza por estacionalidad:</strong> compara semanas equivalentes y controla periodos de cierre/fin de mes.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En septiembre: <code>MAU = 8.000</code> empresas/usuarios activos.</li>
          <li>Un d+¡a t+¡pico: <code>DAU = 2.000</code>.</li>
          <li><code>Stickiness = (2.000 +À 8.000) +ù 100 = 25%</code>.</li>
          <li>Si lanzas pagos masivos y sube a 2.600 DAU con 8.200 MAU, <code>stickiness = 31,7%</code> ÔåÆ h+íbito en alza.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar ÔÇ£usuarios registradosÔÇØ con activos: son universos diferentes.</li>
          <li>Evitar contar sesiones m+¦ltiples del mismo usuario como usuarios distintos (asegura unicidad).</li>
          <li>No uses solo DAU o solo MAU: la relaci+¦n DAU/MAU evita lecturas sesgadas.</li>
        </ul>
      </div>
    </div>
    `
  },
  activation: {
  title: "Tasa de activaci+¦n",
  subtitle: "Del registro al primer valor: -+cu+íntos llegan a su primera acci+¦n clave?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de activaci+¦n</strong> mide el porcentaje de usuarios/empresas que,
        tras <em>registrarse o habilitar acceso</em>, completan su <strong>primera acci+¦n de valor</strong>
        (p. ej., realizar un pago, cargar n+¦mina, aprobar una transferencia, descargar un estado con +®xito).
        Es un indicador de si el onboarding y el flujo inicial realmente conducen a valor.
      </p>

      <div>
        <p class="font-semibold">Definiciones clave:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de activaci+¦n:</strong> la <em>primera</em> acci+¦n que demuestra valor real (no solo login). Debe ser +¦nica, medible y trazable.</li>
          <li><strong>Ventana de activaci+¦n:</strong> tiempo m+íximo considerado desde el alta (p. ej., 7, 14 o 30 d+¡as) para contar una activaci+¦n como v+ílida.</li>
          <li><strong>Unidad de medida:</strong> por <em>usuario</em> o por <em>empresa</em> (en banca empresas suele medirse a nivel de empresa <em>y</em> a nivel de roles: pagador, aprobador, visor).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de activaci+¦n (%) = (N-¦ de cuentas/usuarios que completan el evento de activaci+¦n dentro de la ventana +À N-¦ total de nuevos registrados/habilitados) +ù 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficacia del onboarding (configuraci+¦n de token, permisos, l+¡mites, KYC) para llevar a la primera acci+¦n de valor.</li>
          <li>La claridad del valor percibido del canal digital para empresas.</li>
          <li>La facilidad de descubrir y ejecutar el flujo inicial clave (p. ej., ÔÇ£pago simpleÔÇØ o ÔÇ£carga de n+¦minaÔÇØ).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alta activaci+¦n:</strong> buen onboarding + propuesta de valor clara + fricci+¦n baja en el primer flujo.</li>
          <li><strong>Baja activaci+¦n:</strong> se+¦ales de fricci+¦n (tokenizaci+¦n, permisos, aprobaciones), valor poco visible, o ventana demasiado corta.</li>
          <li><strong>Tiempo a activaci+¦n (TTA):</strong> usarlo como complemento: d+¡as/horas promedio al primer evento de valor.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Define <em>un</em> evento de activaci+¦n por m+¦dulo (p. ej., en n+¦mina ÔÇ£archivo cargado y pago confirmadoÔÇØ).</li>
          <li>Segmenta por <strong>rol</strong> (pagador, aprobador) y por <strong>tama+¦o de empresa</strong> (micro, pyme, corporativa).</li>
          <li>Elige una <strong>ventana realista</strong> seg+¦n el ciclo del cliente (p. ej., 14 d+¡as para pagos, 30 d+¡as para n+¦mina).</li>
          <li>Complementa con <strong>embudo de activaci+¦n</strong> (alta ÔåÆ token ÔåÆ permisos ÔåÆ primera transacci+¦n).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo (empresa):</p>
        <ul class="list-disc list-inside pl-2">
          <li>En 30 d+¡as: 1.000 empresas habilitadas.</li>
          <li>Dentro de 14 d+¡as: 620 realizan su primer pago o cargan n+¦mina con +®xito.</li>
          <li><code>Tasa de activaci+¦n = (620 +À 1.000) +ù 100 = 62%</code>.</li>
          <li>Si el <em>Tiempo a activaci+¦n</em> promedio baja de 6 a 3 d+¡as tras mejoras de onboarding, vamos en la direcci+¦n correcta.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No contar <strong>login</strong> como activaci+¦n; debe ser una acci+¦n de valor.</li>
          <li>Evitar <strong>ventanas</strong> demasiado cortas (subestiman activaci+¦n) o demasiado largas (diluyen lectura).</li>
          <li>Cuidado con <strong>duplicados</strong> (m+¦ltiples usuarios por empresa) y con <strong>eventos t+®cnicos</strong> que marcan +®xito sin que el usuario lo perciba.</li>
        </ul>
      </div>
    </div>
  `
  },
  featureUsage: {
  title: "Uso por funcionalidad",
  subtitle: "Profundidad de uso: -+qu+® tanto se usan los distintos m+¦dulos?",
  html: `
    <div class="space-y-4">
      <p>
        El KPI de <strong>Uso por funcionalidad</strong> mide el porcentaje de sesiones o usuarios
        que utilizan una funcionalidad espec+¡fica del producto (ej. pagos masivos, transferencias
        internacionales, descarga de certificados). Permite identificar qu+® m+¦dulos generan m+ís
        valor y cu+íles pueden estar infrautilizados.
      </p>

      <div>
        <p class="font-semibold">Definici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Porcentaje de usuarios o sesiones que usan una funcionalidad sobre el total de usuarios o sesiones en un periodo dado.</li>
          <li>Puede medirse por <em>usuario +¦nico</em> (empresas que al menos una vez usaron la funci+¦n) o por <em>sesiones</em> (veces que la funci+¦n fue usada en relaci+¦n al total de sesiones).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Uso funcionalidad (%) = (N-¦ de usuarios/sesiones que usaron la funcionalidad +À N-¦ total de usuarios/sesiones en el periodo) +ù 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>El nivel de adopci+¦n y relevancia de cada m+¦dulo de la banca empresas.</li>
          <li>La efectividad de las campa+¦as de comunicaci+¦n o lanzamientos de nuevas funciones.</li>
          <li>Oportunidades de simplificaci+¦n: funcionalidades cr+¡ticas con bajo uso pueden indicar problemas de discoverability o complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alto uso:</strong> la funcionalidad es percibida como valiosa y probablemente resuelve una necesidad recurrente.</li>
          <li><strong>Bajo uso:</strong> puede deberse a que los usuarios no conocen la funci+¦n, no conf+¡an en ella o encuentran fricci+¦n en el acceso.</li>
          <li>Un cambio en la interfaz que aumenta el uso puede ser evidencia de mejora en la experiencia de descubrimiento.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Medir el uso por <strong>segmento</strong> (tipo de empresa, rol de usuario, sector).</li>
          <li>Complementar con <strong>encuestas cualitativas</strong> para entender por qu+® no se usa una funci+¦n cr+¡tica.</li>
          <li>Relacionar con m+®tricas de <strong>adopci+¦n y retenci+¦n</strong> para identificar correlaciones (ej. empresas que usan 3+ funcionalidades tienden a quedarse m+ís tiempo).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 10.000 usuarios activos en banca empresas.</li>
          <li>De ellos, 3.200 usaron la funcionalidad ÔÇ£pagos masivosÔÇØ.</li>
          <li><code>Uso pagos masivos = (3.200 +À 10.000) +ù 100 = 32%</code>.</li>
          <li>Si tras mejorar la visibilidad del acceso sube a 4.800 usuarios, el uso escala a 48% ÔåÆ evidencia de impacto positivo.</li>
        </ul>
      </div>
    </div>
  `
  },
  timeOnTask: {
  title: "Tiempo en tarea",
  subtitle: "Eficiencia y fricci+¦n: -+cu+ínto tarda un usuario en completar una acci+¦n clave?",
  html: `
    <div class="space-y-4">
      <p>
        El KPI de <strong>Tiempo en tarea</strong> mide la duraci+¦n promedio que un usuario emplea
        para completar un flujo o acci+¦n clave en el sistema (ej. realizar una transferencia,
        cargar n+¦mina, descargar un estado de cuenta). Es un indicador central de eficiencia y
        facilidad de uso.
      </p>

      <div>
        <p class="font-semibold">Definici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Tiempo promedio (mediana p50 y, opcionalmente, percentil p90) desde el inicio hasta la confirmaci+¦n de una tarea.</li>
          <li>Se mide en segundos o minutos, dependiendo del tipo de flujo.</li>
          <li>Debe excluir tiempos de inactividad prolongada para no sesgar el dato.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tiempo en tarea = (+ú tiempos de finalizaci+¦n de la tarea +À N-¦ de tareas completadas)</code>
          </li>
          <li>Recomendado: reportar <code>p50</code> y <code>p90</code> en lugar de solo el promedio, para reflejar variabilidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficiencia del flujo de usuario.</li>
          <li>La claridad de la interfaz y los pasos necesarios para completar la acci+¦n.</li>
          <li>El impacto de cambios en dise+¦o o performance en la productividad del usuario.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tiempos bajos:</strong> procesos optimizados y simples.</li>
          <li><strong>Tiempos altos:</strong> indicio de fricci+¦n, pasos innecesarios, carga lenta o errores frecuentes.</li>
          <li>Comparar entre <strong>nuevos</strong> y <strong>usuarios recurrentes</strong> ayuda a detectar problemas de aprendizaje vs problemas de dise+¦o.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir claramente inicio y fin de cada tarea (ej. clic en ÔÇ£Nueva transferenciaÔÇØ ÔåÆ confirmaci+¦n exitosa).</li>
          <li>Registrar tanto el <strong>tiempo activo</strong> como los posibles <strong>tiempos de espera del sistema</strong>.</li>
          <li>Complementar con <strong>eventos de error</strong> para detectar si los tiempos altos est+ín vinculados a fallos.</li>
          <li>Comparar despu+®s de <strong>redise+¦os o mejoras</strong> para validar impacto.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 1.200 operaciones de carga de n+¦mina.</li>
          <li>Mediana (p50): 2 min 10 s.</li>
          <li>Percentil 90 (p90): 4 min 30 s.</li>
          <li>Tras optimizar validaciones, el p50 baj+¦ a 1 min 20 s y el p90 a 2 min 45 s ÔåÆ evidencia clara de mejora en eficiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No confundir tiempo bajo con buena experiencia: un tiempo muy corto puede indicar que el usuario abandon+¦ o cometi+¦ un error sin completar.</li>
          <li>No usar solo promedio: puede ocultar casos extremos donde pocos usuarios sufren fricci+¦n severa.</li>
        </ul>
      </div>
    </div>
  `
  },
  success: {
  title: "Tasa de +®xito",
  subtitle: "Eficiencia & Fricci+¦n: -+cu+íntas operaciones se completan sin problemas?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de +®xito</strong> mide el porcentaje de operaciones o tareas que los usuarios logran
        completar sin errores, bloqueos o necesidad de repetir pasos. En banca empresas es un KPI clave
        para evaluar la <em>confiabilidad y usabilidad de los flujos cr+¡ticos</em> como transferencias,
        pagos masivos o apertura de cuentas.
      </p>

      <div>
        <p class="font-semibold">Definici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporci+¦n de operaciones iniciadas que llegan a completarse correctamente.</li>
          <li>Se considera +®xito cuando el sistema confirma la operaci+¦n y el usuario percibe que se logr+¦ el objetivo.</li>
          <li>Incluye la reducci+¦n de <strong>reintentos</strong> y de errores de validaci+¦n o t+®cnicos.</li>\n          </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>Tasa de +®xito (%) = (N-¦ de operaciones completadas exitosamente +À N-¦ total de operaciones iniciadas) +ù 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La capacidad del sistema para permitir que los usuarios completen sus objetivos.</li>
          <li>La solidez de los flujos de negocio frente a fricciones t+®cnicas o de dise+¦o.</li>
          <li>El impacto de mejoras de UX en la reducci+¦n de errores y ca+¡das.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tasa alta (&gt;95%):</strong> indica que la mayor+¡a de los usuarios logran completar sus operaciones sin problemas.</li>
          <li><strong>Tasa baja (&lt;90%):</strong> alerta sobre fricciones cr+¡ticas: errores t+®cnicos, validaciones confusas, problemas de dise+¦o o flujos poco claros.</li>
          <li>Un aumento sostenido en la tasa tras un redise+¦o es evidencia fuerte de mejora de la experiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir con claridad qu+® cuenta como ÔÇ£+®xitoÔÇØ en cada flujo (ej. transferencia confirmada, n+¦mina procesada sin rechazos).</li>
          <li>Separar causas de fallos: <em>errores del usuario</em> (datos mal ingresados) vs <em>errores t+®cnicos</em> (servidor, red, token).</li>
          <li>Analizar +®xito por segmento (empresa grande, pyme, rol del usuario) para detectar d+¦nde falla m+ís.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 5.000 transferencias iniciadas.</li>
          <li>De ellas, 4.600 llegaron a confirmaci+¦n exitosa.</li>
          <li><code>Tasa de +®xito = (4.600 +À 5.000) +ù 100 = 92%</code>.</li>
          <li>Tras simplificar el formulario de transferencia, la tasa sube a 97% ÔåÆ se reducen los errores de digitaci+¦n.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No basta con contar intentos: se debe medir hasta el final del flujo (ej. confirmaci+¦n de operaci+¦n).</li>
          <li>Evitar considerar ÔÇ£guardado en borradoresÔÇØ como +®xito; el KPI debe reflejar valor real entregado al usuario.</li>
          <li>Si la tasa baja repentinamente, cruzar con m+®tricas t+®cnicas (latencia, uptime) para detectar la causa ra+¡z.</li>
        </ul>
      </div>
    </div>
  `
  },
  steps: {
  title: "Pasos por tarea",
  subtitle: "Eficiencia & Fricci+¦n: mide la simplicidad de los flujos",
  html: `
    <div class="space-y-4">
      <p>
        El KPI <strong>Pasos por tarea</strong> cuantifica la cantidad de pantallas, clics o interacciones 
        que necesita un usuario para completar una acci+¦n espec+¡fica dentro del producto digital. 
        Es un indicador directo de la <em>eficiencia y simplicidad de los flujos</em>.
      </p>

      <div>
        <p class="font-semibold">Definici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Cuenta de pantallas o interacciones necesarias para completar un flujo de inicio a fin.</li>
          <li>Puede medirse en clics, pantallas o campos requeridos seg+¦n el dise+¦o del producto.</li>
          <li>Se recomienda medir tanto el <em>m+¡nimo te+¦rico</em> como el <em>promedio real</em> que siguen los usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Pasos promedio = (Suma de pasos de todos los usuarios que completaron la tarea +À Total de usuarios que completaron la tarea)</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricci+¦n percibida en el recorrido de una tarea.</li>
          <li>La eficiencia del dise+¦o y si se est+í pidiendo informaci+¦n redundante.</li>
          <li>La oportunidad de optimizar flujos para reducir complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Pocos pasos:</strong> generalmente indica simplicidad y mayor probabilidad de +®xito.</li>
          <li><strong>Muchos pasos:</strong> suele correlacionarse con m+ís abandonos, errores y frustraci+¦n.</li>
          <li>En banca, algunos pasos adicionales son inevitables (ej. autenticaci+¦n, doble aprobaci+¦n), por lo que el benchmark debe considerar <em>regulaci+¦n</em> y <em>seguridad</em>.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Identificar pasos que no aportan valor y eliminarlos o automatizarlos.</li>
          <li>Diferenciar pasos <em>obligatorios</em> por seguridad/regulaci+¦n de pasos <em>opcionales</em> o redundantes.</li>
          <li>Analizar por segmentos de empresa: grandes corporativos suelen requerir m+ís pasos por controles internos (ej. doble firma).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Flujo actual de <strong>transferencia simple</strong>: 7 pasos (seleccionar cuenta, ingresar monto, beneficiario, descripci+¦n, confirmar, token, recibo).</li>
          <li>Se optimiza a 5 pasos eliminando campos redundantes y precargando datos.</li>
          <li><code>Pasos promedio antes = 7</code> ÔåÆ <code>Pasos promedio despu+®s = 5</code>.</li>
          <li>El abandono se reduce de 12% a 6% tras simplificar el flujo.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No medir solo el flujo te+¦rico; en la pr+íctica los usuarios pueden repetir pasos o retroceder.</li>
          <li>No todos los pasos pesan igual: algunos son r+ípidos (un clic) y otros m+ís costosos (llenar formularios largos).</li>
          <li>Cuidado con eliminar pasos cr+¡ticos de seguridad solo para ÔÇ£bajar el n+¦meroÔÇØ; la clave es optimizar sin comprometer confianza.</li>
        </ul>
      </div>
    </div>
  `
  },
  abandon: {
  title: "Tasa de abandono",
  subtitle: "Eficiencia & Fricci+¦n: -+d+¦nde y cu+ínto se caen los usuarios en el flujo?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de abandono</strong> cuantifica el porcentaje de usuarios/empresas que inician un flujo
        (p. ej., transferencia, pagos masivos, registro) pero no lo completan. Es un indicador cr+¡tico
        de <em>fricci+¦n</em> y suele correlacionar con complejidad, tiempos altos o errores de validaci+¦n/t+®cnicos.
      </p>

      <div>
        <p class="font-semibold">Definici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporci+¦n de instancias iniciadas que no alcanzan el estado de confirmaci+¦n/+®xito.</li>
          <li>Puede medirse a nivel de flujo completo o por <em>paso del embudo</em> para localizar el punto exacto de ca+¡da.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">F+¦rmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de abandono (%) = (N-¦ de operaciones iniciadas no completadas +À N-¦ total de operaciones iniciadas) +ù 100</code>
          </li>
          <li>
            <code>Abandono por paso (%) = (N-¦ que pasan por el paso i y no llegan al i+1 +À N-¦ que llegan al paso i) +ù 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">-+Qu+® mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricci+¦n real en formularios, validaciones, autenticaci+¦n (token/2FA) y tiempos de espera.</li>
          <li>La claridad del flujo (campos, instrucciones, estados de error).</li>
          <li>El impacto de incidentes t+®cnicos (timeouts, ca+¡das) en la continuidad del proceso.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretaci+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Abandono alto</strong> suele indicar excesivos pasos/campos, latencia elevada o mensajes de error poco accionables.</li>
          <li><strong>Disminuciones</strong> tras un redise+¦o son evidencia de mejora; contr+ístalo con <em>Tasa de +®xito</em> y <em>Tiempo en tarea</em>.</li>
          <li>Analiza <em>por segmento</em> (rol, tama+¦o de empresa) para detectar fricciones espec+¡ficas.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Instrumentar el <strong>embudo paso a paso</strong> (inicio ÔåÆ datos ÔåÆ revisi+¦n ÔåÆ confirmaci+¦n) para ubicar el escal+¦n de fuga.</li>
          <li>Registrar <strong>causas de salida</strong> (cerr+¦ pesta+¦a, error 4xx/5xx, validaci+¦n fallida, timeout).</li>
          <li>Separar <strong>abandono voluntario</strong> (desistimiento) de <strong>forzado</strong> (error t+®cnico/autenticaci+¦n).</li>
          <li>Controlar <strong>estacionalidad</strong> (fin de mes, horarios cr+¡ticos) al comparar periodos.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Mes actual: 10.000 transferencias iniciadas; 1.300 no llegan a confirmaci+¦n.</li>
          <li><code>Abandono total = (1.300 +À 10.000) +ù 100 = 13%</code>.</li>
          <li>Embudo muestra que el 60% de los abandonos sucede en el paso de <em>token</em> (2FA) ÔåÆ priorizar mejora de UX del token y latencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar <strong>abandono</strong> con <strong>rechazos posteriores</strong> (p. ej., control antifraude) si la UX ya confirm+¦ al usuario.</li>
          <li>Evitar promediar todo el embudo: el valor por paso es el que habilita acciones concretas.</li>
          <li>Si el abandono sube, cruza con <em>Tiempo de respuesta</em>, <em>Errores 4xx/5xx</em> e <em>Interrupciones</em> para hallar causa ra+¡z.</li>
        </ul>
      </div>
    </div>
  `
  },
  userError: {
  title: "Errores de usuario/flujo",
  subtitle: "Eficiencia & Fricci+¦n: validaciones y pasos que rompen la tarea para el cliente",
  html: `
  <div class="space-y-4">
    <p>
      <strong>Errores de usuario/flujo</strong> cuantifica los fallos que enfrentan los usuarios al completar
      una tarea por causas de <em>flujo/UX</em> (validaciones confusas, campos obligatorios poco claros, 
      formatos estrictos, pasos redundantes) m+ís que por incidentes puramente t+®cnicos (4xx/5xx).
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Errores originados por interacci+¦n o dise+¦o: validaciones, formatos, permisos, l+¡mites y reglas de negocio.</li>
        <li>No incluye ca+¡das del servidor ni timeouts (eso va a <em>Errores 4xx/5xx</em> o <em>Interrupciones</em>).</li>
        <li>Se mide por flujo (ej. transferencias, pagos masivos, altas) y por paso del embudo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos comunes en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Validaci+¦n de campos:</strong> formato de cuenta, RUC/NIT, email, monto con separadores.</li>
        <li><strong>Reglas de negocio:</strong> l+¡mites diarios superados, beneficiario no habilitado, rol sin permisos.</li>
        <li><strong>Autenticaci+¦n de paso:</strong> token/2FA ingresado fuera de ventana de tiempo.</li>
        <li><strong>Archivos:</strong> planilla de n+¦mina con columnas inv+ílidas, extensiones no permitidas.</li>
        <li><strong>Flujo:</strong> usuarios que retroceden por no entender el orden aprobaci+¦nÔÇôconfirmaci+¦n.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores de usuario (%) = (N-¦ de intentos con error de usuario +À N-¦ total de intentos) +ù 100</code></li>
        <li><code>Errores por 1.000 ops = (N-¦ de errores de usuario +À N-¦ de operaciones) +ù 1.000</code></li>
        <li><code>Top-errores = ranking por tipo de error (validaci+¦n, permiso, l+¡mite, formatoÔÇª)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Claridad de formularios, mensajes y reglas de negocio en el flujo.</li>
        <li>Descubribilidad de requisitos (ej. habilitar beneficiario antes de transferir).</li>
        <li>Madurez del dise+¦o para prevenir errores (m+ís que solo reportarlos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa de errores de usuario</strong> suele correlacionar con <em>abandono</em> y menor <em>tasa de +®xito</em>.</li>
        <li>Si los errores caen y la <em>tasa de +®xito</em> sube, el flujo gan+¦ claridad y robustez.</li>
        <li>Analizar por <em>paso</em> del embudo y <em>rol</em> (pagador, aprobador, visor) para acciones precisas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Instrumentaci+¦n granular:</strong> evento por tipo de error y por campo (ej. <code>error: monto_formato</code>).</li>
        <li><strong>Mensajes accionables:</strong> indicar qu+® fall+¦ y c+¦mo resolver (ej. formato requerido, enlace a habilitar beneficiario).</li>
        <li><strong>Prevenci+¦n:</strong> m+íscaras de entrada, autocompletado, validaci+¦n en tiempo real, defaults inteligentes.</li>
        <li><strong>Segmentaci+¦n:</strong> por tama+¦o de empresa/rol y por dispositivo (web vs. m+¦vil).</li>
        <li><strong>Loop con soporte:</strong> mapear los errores top con tickets/FAQs para cerrar brechas de contenido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 20.000 intentos de transferencia; 1.200 con errores de usuario.</li>
        <li><code>Tasa de errores = (1.200 +À 20.000) +ù 100 = 6%</code>; los top-errores son <em>formato de cuenta</em> (35%) y <em>l+¡mite excedido</em> (28%).</li>
        <li>Tras mejorar validaci+¦n en vivo y explicar l+¡mites disponibles, la tasa baja a 3,2% y la <em>tasa de +®xito</em> sube 4 pp.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>errores t+®cnicos</strong>; separa ambos para intervenir correctamente.</li>
        <li>Evita mensajes gen+®ricos (ÔÇ£Error desconocidoÔÇØ): impiden aprendizaje y acci+¦n.</li>
        <li>Si un mismo error concentra &gt;20% de los casos, prior+¡zalo como +®pica de UX/negocio.</li>
      </ul>
    </div>
  </div>
  `
  },
  latency: {
  title: "Tiempo de respuesta",
  subtitle: "Eficiencia & Fricci+¦n: rapidez del sistema al ejecutar acciones clave",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de respuesta</strong> mide cu+ínto tarda el sistema en mostrar la
      respuesta o confirmar una acci+¦n tras la interacci+¦n del usuario. En banca empresas,
      es cr+¡tico porque impacta directamente en la <em>percepci+¦n de eficiencia y confianza</em>
      en procesos como transferencias, pagos masivos o consultas de saldos.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo promedio en milisegundos o segundos que tarda en responder un servicio, endpoint o pantalla tras la acci+¦n del usuario.</li>
        <li>Se mide tanto en <em>frontend</em> (renderizado, carga de pantalla) como en <em>backend</em> (respuesta de APIs, servicios).</li>
        <li>Se recomienda separar <strong>tiempo de respuesta percibido</strong> (lo que ve el cliente) del <strong>tiempo t+®cnico</strong> (logs del sistema).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de respuesta = +ú tiempos de respuesta +À N-¦ de solicitudes</code></li>
        <li><code>Percentil P90 = tiempo por debajo del cual responden el 90% de las solicitudes</code></li>
        <li><code>Percentil P95 = tiempo por debajo del cual responden el 95% de las solicitudes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La rapidez del sistema para ejecutar operaciones cr+¡ticas.</li>
        <li>La estabilidad en picos de carga (ej. fin de mes, d+¡as de pago de n+¦mina).</li>
        <li>El impacto de la latencia en el abandono de flujos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt;1s:</strong> excelente, experiencia fluida.</li>
        <li><strong>1ÔÇô3s:</strong> aceptable en banca, aunque puede sentirse lento en consultas simples.</li>
        <li><strong>&gt;3s:</strong> alto riesgo de frustraci+¦n y abandono, sobre todo en acciones frecuentes como consultar saldos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir tanto promedio como percentiles (P90/P95) para detectar problemas en los peores escenarios.</li>
        <li>Incluir medici+¦n <strong>end-to-end</strong> (desde clic hasta render final), no solo tiempos de servidor.</li>
        <li>Segregar por tipo de flujo: consultas (r+ípidas), operaciones de carga (m+ís complejas).</li>
        <li>Comparar <strong>latencia percibida</strong> con feedback de usuarios para validar la experiencia real.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consulta de saldos: promedio 1.2s, P90 = 2.1s ÔåÆ aceptable.</li>
        <li>Transferencia internacional: promedio 4.5s, P95 = 7s ÔåÆ alto riesgo de frustraci+¦n.</li>
        <li>Tras optimizar APIs, bajamos a 2.8s promedio y 4.5s P95 ÔåÆ mejora notable en la experiencia.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo promedios: pueden ocultar casos cr+¡ticos de lentitud.</li>
        <li>Evitar medir solo backend; el usuario percibe la suma de <em>todo el ciclo</em> (front + red + backend).</li>
        <li>No descuidar picos de carga: un servicio estable en horario normal puede colapsar en cierres de n+¦mina.</li>
      </ul>
    </div>
  </div>
  `
  },
  interruption: {
  title: "Transacciones interrumpidas",
  subtitle: "Eficiencia & Fricci+¦n: operaciones que no concluyen por ca+¡das o timeouts",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Transacciones interrumpidas</strong> mide el porcentaje de operaciones
      que fueron iniciadas pero no llegaron a completarse debido a problemas t+®cnicos como 
      <em>timeouts</em>, ca+¡das de red, errores de comunicaci+¦n con sistemas externos o interrupciones 
      inesperadas en el flujo.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones abandonadas de forma no voluntaria por parte del usuario.</li>
        <li>Incluye fallos en APIs, desconexiones, expiraciones de sesi+¦n y errores de infraestructura.</li>
        <li>No deben confundirse con abandonos voluntarios (usuario cierra el flujo o decide no continuar).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de interrupciones (%) = (N-¦ de transacciones interrumpidas +À N-¦ total de transacciones iniciadas) +ù 100</code></li>
        <li><code>Interrupciones por 1.000 ops = (N-¦ de interrupciones +À N-¦ total de operaciones) +ù 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad real de los flujos cr+¡ticos de negocio.</li>
        <li>El impacto de fallos t+®cnicos en la experiencia y la confianza del cliente.</li>
        <li>Riesgo de p+®rdida de operaciones valiosas (p. ej., transferencias de alto monto, pagos masivos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Baja tasa (&lt;1%):</strong> esperada en sistemas bancarios estables.</li>
        <li><strong>Tasa media (1ÔÇô3%):</strong> indica problemas localizados (ej. picos de carga, integraci+¦n con un servicio externo).</li>
        <li><strong>Tasa alta (&gt;5%):</strong> alerta roja: genera p+®rdida de confianza y potencial reclamo/regulaci+¦n.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas de medici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Registrar <strong>c+¦digo de error</strong> y <strong>momento del flujo</strong> donde ocurri+¦ la interrupci+¦n.</li>
        <li>Diferenciar interrupciones <em>recuperables</em> (ej. reintento autom+ítico exitoso) de las <em>cr+¡ticas</em> (usuario perdi+¦ la operaci+¦n).</li>
        <li>Medir <strong>por m+¦dulo</strong> (ej. n+¦mina vs transferencias internacionales) para ubicar la causa ra+¡z.</li>
        <li>Cruzar con <em>latencia</em> y <em>errores t+®cnicos</em> para encontrar correlaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 15.000 transferencias iniciadas.</li>
        <li>De ellas, 450 se interrumpieron por timeout o ca+¡da.</li>
        <li><code>Tasa de interrupciones = (450 +À 15.000) +ù 100 = 3%</code>.</li>
        <li>El 70% ocurri+¦ en horario de cierre de n+¦mina ÔåÆ indicador de necesidad de escalar infraestructura.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>abandono</strong>: deben medirse por separado.</li>
        <li>Evitar ocultar interrupciones en promedios de +®xito; deben tener su propio KPI.</li>
        <li>Si los reintentos autom+íticos superan el 10%, considerar redise+¦o o mejora en capacidad del sistema.</li>
      </ul>
    </div>
  </div>
  `
  },
  nps: {
  title: "NPS (Net Promoter Score)",
  subtitle: "Satisfacci+¦n & Experiencia: -+nos recomendar+¡an a un colega/empresa?",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>NPS</strong> estima la lealtad e intenci+¦n de recomendaci+¦n del cliente. 
      En banca empresas se usa para entender, tras una interacci+¦n o en general, 
      si una compa+¦+¡a recomendar+¡a el canal digital a otra empresa/colega.
    </p>

    <div>
      <p class="font-semibold">Pregunta est+índar:</p>
      <ul class="list-disc list-inside pl-2">
        <li>ÔÇ£Del 0 al 10, -+qu+® tan probable es que recomiendes nuestra banca empresas a un colega?ÔÇØ</li>
        <li>Se clasifica la respuesta en:
          <ul class="list-disc list-inside pl-6">
            <li><strong>Promotores:</strong> 9ÔÇô10</li>
            <li><strong>Pasivos:</strong> 7ÔÇô8</li>
            <li><strong>Detractores:</strong> 0ÔÇô6</li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>NPS = (% Promotores) ÔêÆ (% Detractores)</code> ÔåÆ rango de ÔêÆ100 a +100</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Tipos de NPS:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Relacional:</strong> percepci+¦n general del canal (medici+¦n peri+¦dica: trimestral/mensual).</li>
        <li><strong>Transaccional:</strong> posterior a un flujo espec+¡fico (ej. pagos masivos, transferencias al exterior) para detectar fricci+¦n puntual.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Lealtad y probabilidad de recomendaci+¦n (proxy de crecimiento org+ínico).</li>
        <li>Impacto de mejoras o incidentes en la experiencia percibida.</li>
        <li>Brechas entre m+¦dulos (comparar NPS por funcionalidad/flujo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (gu+¡a general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;= 50:</strong> excelente (experiencia muy s+¦lida).</li>
        <li><strong>0 a 49:</strong> bueno/aceptable con oportunidades claras.</li>
        <li><strong>&lt; 0:</strong> alerta: predominan experiencias negativas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Acompa+¦ar con pregunta abierta: ÔÇ£-+Cu+íl fue la principal raz+¦n de tu puntuaci+¦n?ÔÇØ para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y <strong>tama+¦o de empresa</strong>.</li>
        <li>Detonar NPS transaccional solo tras <em>+®xito o fallo</em> del flujo para entender diferencias.</li>
        <li>Vincular NPS con m+®tricas operativas (latencia, errores, tasa de +®xito) para causa ra+¡z.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo de c+ílculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas v+ílidas: 400. Promotores: 200 (50%), Pasivos: 120 (30%), Detractores: 80 (20%).</li>
        <li><code>NPS = 50% ÔêÆ 20% = +30</code> (bueno, con margen de mejora).</li>
        <li>Tras optimizar token en pagos masivos, los detractores bajan a 10% ÔåÆ <code>NPS = 50% ÔêÆ 10% = +40</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar NPS aislado: complementarlo con <em>CSAT</em>, <em>CES</em> y m+®tricas del flujo.</li>
        <li>Evitar muestras sesgadas (solo quienes completaron con +®xito); incluir fallos/cancelaciones.</li>
        <li>Cuidar la frecuencia: demasiado NPS puede fatigar y bajar la tasa de respuesta.</li>
      </ul>
    </div>
  </div>
  `
  },
  csat: {
  title: "CSAT (Customer Satisfaction)",
  subtitle: "Satisfacci+¦n & Experiencia: satisfacci+¦n inmediata tras una interacci+¦n",
  html: `
  <div class="space-y-4">
    <p>
      <strong>CSAT</strong> mide la satisfacci+¦n percibida por el usuario justo despu+®s de una interacci+¦n
      o flujo espec+¡fico (p. ej., consulta de saldos, transferencia, carga de n+¦mina). Es un indicador
      t+íctico y de lectura r+ípida sobre c+¦mo se sinti+¦ la experiencia <em>en ese momento</em>.
    </p>

    <div>
      <p class="font-semibold">Pregunta t+¡pica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>ÔÇ£En una escala de 1 a 5, -+qu+® tan satisfecho quedaste con [este proceso/flujo]?ÔÇØ</li>
        <li>Escala com+¦n: 1 = Muy insatisfecho ÔÇª 5 = Muy satisfecho.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas m+ís usadas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CSAT promedio = (+ú puntuaciones) +À (# de respuestas)</code>  ÔåÆ en escala 1ÔÇô5.</li>
        <li><code>CSAT Top-2 (%) = ((# de respuestas con 4 o 5) +À # total de respuestas) +ù 100</code></li>
        <li><code>Tasa de respuesta = (# de encuestas contestadas +À # de invitaciones) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepci+¦n inmediata de calidad y facilidad del flujo.</li>
        <li>El impacto de fricciones puntuales (latencia, validaciones, token) en la satisfacci+¦n.</li>
        <li>Diferencias entre m+¦dulos o segmentos (rol, tama+¦o de empresa).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (gu+¡a general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CSAT Top-2 ÔëÑ 85%:</strong> experiencia muy satisfactoria.</li>
        <li><strong>70ÔÇô84%:</strong> aceptable, con oportunidades de mejora.</li>
        <li><strong>&lt; 70%:</strong> alerta: revisar fricciones y causa ra+¡z.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Disparar CSAT <em>transaccional</em> al final de flujos cr+¡ticos (p. ej., transferencia confirmada).</li>
        <li>Incluir una <strong>pregunta abierta</strong> opcional (ÔÇ£-+Qu+® podemos mejorar?ÔÇØ) para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y por <strong>m+¦dulo</strong>.</li>
        <li>Controlar <strong>sesgo de +®xito</strong>: tambi+®n medir cuando el flujo falla o se aborta.</li>
        <li>Cruzar CSAT con <em>latencia</em>, <em>errores</em> y <em>tasa de +®xito</em> para diagn+¦stico.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Respuestas: 600. Con ÔÇ£4 o 5ÔÇØ: 468 ÔåÆ <code>CSAT Top-2 = (468 +À 600) +ù 100 = 78%</code>.</li>
        <li>Tras optimizar validaciones en el formulario de transferencias, Top-2 sube a 86% y el tiempo en tarea baja 25%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar CSAT solo: complementa con <strong>NPS</strong> (lealtad) y <strong>CES</strong> (esfuerzo).</li>
        <li>Evitar encuestas excesivas que bajen la tasa de respuesta.</li>
        <li>No mezclar preguntas o escalas diferentes en el tiempo sin recalibrar hist+¦ricos.</li>
      </ul>
    </div>
  </div>
  `
  },
  sus: {
  title: "SUS (System Usability Scale)",
  subtitle: "Satisfacci+¦n & Experiencia: escala estandarizada de usabilidad percibida",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>SUS</strong> es una encuesta estandarizada de 10 +¡tems creada por John Brooke en 1986,
      ampliamente usada para medir la <em>usabilidad percibida</em> de un sistema digital.
      Proporciona un puntaje de 0 a 100 que resume la experiencia del usuario en t+®rminos de 
      facilidad de uso, consistencia y confianza.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Escala de 10 preguntas con respuestas tipo Likert (1 = totalmente en desacuerdo, 5 = totalmente de acuerdo).</li>
        <li>Las preguntas se alternan entre formulaciones positivas y negativas para evitar sesgo.</li>
        <li>El resultado es un puntaje +¦nico entre 0 y 100 (no es porcentaje).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos de +¡tems:</p>
      <ul class="list-disc list-inside pl-2">
        <li>ÔÇ£Me gustar+¡a usar este sistema con frecuencia.ÔÇØ</li>
        <li>ÔÇ£Encontr+® el sistema innecesariamente complejo.ÔÇØ</li>
        <li>ÔÇ£Pens+® que el sistema era f+ícil de usar.ÔÇØ</li>
        <li>ÔÇ£Necesitar+¡a apoyo t+®cnico para poder usar este sistema.ÔÇØ</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula de c+ílculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Cada respuesta se normaliza en una escala 0ÔÇô4 seg+¦n si la pregunta es positiva o negativa.</li>
        <li>Se suman los valores y se multiplican por 2.5 ÔåÆ <strong>puntaje final 0ÔÇô100</strong>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 80:</strong> excelente, sistema altamente usable.</li>
        <li><strong>70ÔÇô80:</strong> bueno, con mejoras posibles.</li>
        <li><strong>50ÔÇô70:</strong> aceptable, experiencia con fricciones.</li>
        <li><strong>&lt; 50:</strong> usabilidad deficiente, requiere redise+¦o.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepci+¦n subjetiva de usabilidad (no mide satisfacci+¦n ni est+®tica).</li>
        <li>La comparabilidad con benchmarks de la industria, al ser una escala est+índar.</li>
        <li>La evoluci+¦n tras cambios en el producto (antes vs despu+®s de un redise+¦o).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Un grupo de 20 usuarios eval+¦a la carga de n+¦mina con el SUS.</li>
        <li>Puntaje promedio: 68 ÔåÆ aceptable pero con fricciones.</li>
        <li>Tras simplificar el flujo, el puntaje sube a 82 ÔåÆ evidencia de mejora en usabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir SUS con satisfacci+¦n general (ese es CSAT o NPS).</li>
        <li>Evitar muestras muy peque+¦as (&lt;10 usuarios) ÔåÆ resultados poco fiables.</li>
        <li>No usar SUS como +¦nico indicador; complementarlo con m+®tricas de eficiencia (tiempo en tarea, tasa de +®xito).</li>
      </ul>
    </div>
  </div>
  `
  },
  ces: {
  title: "CES (Customer Effort Score)",
  subtitle: "Satisfacci+¦n & Experiencia: mide el esfuerzo percibido para completar una tarea",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>CES</strong> eval+¦a cu+ínto esfuerzo sinti+¦ un usuario al completar un flujo o tarea espec+¡fica.
      En banca empresas es clave porque procesos como <em>pagos masivos</em>, <em>transferencias internacionales</em> 
      o <em>carga de n+¦mina</em> pueden ser complejos, y este KPI permite medir qu+® tan costoso resulta para el cliente.
    </p>

    <div>
      <p class="font-semibold">Pregunta t+¡pica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>ÔÇ£-+Qu+® tan f+ícil fue completar la tarea?ÔÇØ</li>
        <li>Escala de 1 a 5 (o 1 a 7), donde 1 = Muy f+ícil, 5/7 = Muy dif+¡cil.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula de c+ílculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CES promedio = (+ú puntuaciones de esfuerzo +À N-¦ de respuestas)</code></li>
        <li>Opcional: reportar % de respuestas ÔÇ£Muy f+ícilÔÇØ o ÔÇ£F+ícilÔÇØ como indicador de +®xito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El nivel de fricci+¦n que percibe el usuario en el flujo.</li>
        <li>El impacto de la complejidad del dise+¦o y requisitos del negocio en la experiencia.</li>
        <li>El costo cognitivo y operativo para completar tareas cr+¡ticas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CES bajo (1ÔÇô2):</strong> flujos f+íciles de completar, experiencia +¦ptima.</li>
        <li><strong>CES medio (3):</strong> esfuerzo aceptable pero con oportunidades de simplificaci+¦n.</li>
        <li><strong>CES alto (4ÔÇô5 o m+ís):</strong> alto nivel de fricci+¦n; correlaciona con abandono y reclamos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir CES <strong>por flujo cr+¡tico</strong> (p. ej., n+¦mina vs. transferencias) para accionar mejoras espec+¡ficas.</li>
        <li>Complementar con m+®tricas objetivas (<em>tiempo en tarea</em>, <em>errores de usuario</em>) para validar.</li>
        <li>Recoger feedback cualitativo opcional (ÔÇ£-+Qu+® te result+¦ m+ís dif+¡cil?ÔÇØ) para diagnosticar.</li>
        <li>Comparar CES antes/despu+®s de cambios para probar impacto de simplificaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas: 300. Promedio CES = 2.1 (escala 1ÔÇô5).</li>
        <li>Usuarios destacan que cargar archivos de n+¦mina requiere mucho ajuste ÔåÆ ÔÇ£dif+¡cilÔÇØ.</li>
        <li>Tras mejorar la validaci+¦n en vivo de planillas, CES baja a 1.4 ÔåÆ menor esfuerzo percibido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir ÔÇ£esfuerzoÔÇØ con ÔÇ£satisfacci+¦nÔÇØ: un flujo puede ser satisfactorio pero demandar esfuerzo.</li>
        <li>Evitar escalas diferentes en el tiempo (1ÔÇô5 vs 1ÔÇô7) sin recalibrar hist+¦ricos.</li>
        <li>No usar CES en flujos demasiado triviales (p. ej., login), reservarlo para procesos con carga cognitiva real.</li>
      </ul>
    </div>
  </div>
  `
  },
  complaints: {
  title: "Reclamos / Incidencias",
  subtitle: "Satisfacci+¦n & Experiencia: volumen y resoluci+¦n de problemas reportados por usuarios",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Reclamos / Incidencias</strong> mide la cantidad y proporci+¦n de casos reportados por los
      usuarios en relaci+¦n con el uso del producto. Refleja directamente la <em>percepci+¦n de calidad y confianza</em>
      del canal, y permite identificar +íreas de fricci+¦n que generan costos adicionales en soporte y afectan la
      satisfacci+¦n.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Casos generados por usuarios a trav+®s de canales de atenci+¦n (call center, tickets, chat, sucursal).</li>
        <li>Incluye tanto reclamos formales como incidencias t+®cnicas reportadas por usuarios.</li>
        <li>Se relaciona con volumen de operaciones para medir su frecuencia relativa.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de reclamos (%) = (N-¦ de reclamos/incidencias +À N-¦ total de operaciones) +ù 100</code></li>
        <li><code>Reclamos por 10.000 operaciones = (N-¦ de reclamos +À N-¦ de operaciones) +ù 10.000</code></li>
        <li><code>% resueltos en primer contacto = (N-¦ de reclamos resueltos al primer intento +À N-¦ total de reclamos) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La robustez y estabilidad de los flujos (menos errores ÔåÆ menos reclamos).</li>
        <li>El costo operativo derivado de incidencias (atenci+¦n, soporte, reprocesos).</li>
        <li>La confianza del cliente: a menor tasa de reclamos, mayor percepci+¦n de fiabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Tasa baja (&lt;0.5%):</strong> indica buena estabilidad y experiencia.</li>
        <li><strong>Tasa moderada (0.5ÔÇô1.5%):</strong> aceptable, con puntos de fricci+¦n a monitorear.</li>
        <li><strong>Tasa alta (&gt;1.5%):</strong> se+¦al de alerta: requiere an+ílisis de causa ra+¡z.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar reclamos por <strong>categor+¡a</strong>: t+®cnica, operativa, UX, fraude.</li>
        <li>Analizar correlaci+¦n con otros KPIÔÇÖs (abandono, errores de usuario, latencia).</li>
        <li>Medir tiempo medio de resoluci+¦n (TMR) y % resueltos en primer contacto.</li>
        <li>Priorizar incidencias de alto impacto econ+¦mico o reputacional.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 200.000 operaciones digitales; 1.200 reclamos/incidencias registrados.</li>
        <li><code>Tasa de reclamos = (1.200 +À 200.000) +ù 100 = 0.6%</code>.</li>
        <li>60% resueltos en primer contacto, tiempo medio de resoluci+¦n = 36 horas.</li>
        <li>El 40% de los reclamos corresponden a fallos en carga de n+¦mina ÔåÆ foco de mejora inmediato.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: la gravedad e impacto econ+¦mico/reputacional son igual o m+ís importantes.</li>
        <li>No centralizar todas las categor+¡as en un solo bucket: segmentar para poder accionar.</li>
        <li>No dejar sin integrar con m+®tricas de autoservicio: un reclamo evitado digitalmente es ahorro directo.</li>
      </ul>
    </div>
  </div>
  `
  },
  conversion: {
  title: "Tasa de conversi+¦n",
  subtitle: "Conversi+¦n & Negocio: mide cu+íntos completan la acci+¦n clave esperada",
  html: `
  <div class="space-y-4">
    <p>
      La <strong>Tasa de conversi+¦n</strong> refleja el porcentaje de usuarios/empresas que, tras iniciar
      un flujo, llegan a completar la acci+¦n clave que define el +®xito de ese proceso.
      En banca empresas este KPI es esencial para evaluar la efectividad de flujos como
      <em>apertura de productos</em>, <em>pagos masivos</em>, <em>transferencias internacionales</em>
      o <em>registro de servicios</em>.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporci+¦n de usuarios que alcanzan el objetivo final frente al total que inici+¦ el flujo.</li>
        <li>Debe estar asociado a una <em>acci+¦n de valor</em> clara (ej. pago confirmado, servicio activado, inversi+¦n fondeada).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de conversi+¦n (%) = (N-¦ de usuarios/empresas que completaron la acci+¦n clave +À N-¦ total de usuarios/empresas que iniciaron el flujo) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad del dise+¦o del flujo para guiar al usuario hasta el +®xito.</li>
        <li>La claridad de la propuesta de valor y beneficios percibidos.</li>
        <li>La capacidad de convertir la intenci+¦n en acci+¦n concluida.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta conversi+¦n (&gt;80%):</strong> el flujo es claro, confiable y atractivo.</li>
        <li><strong>Conversi+¦n media (50ÔÇô79%):</strong> aceptable, pero con puntos de fricci+¦n a revisar.</li>
        <li><strong>Baja conversi+¦n (&lt;50%):</strong> alerta: los usuarios se pierden o desisten antes de terminar.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con precisi+¦n cu+íl es el ÔÇ£evento de conversi+¦nÔÇØ en cada flujo.</li>
        <li>Construir <strong>embudos de conversi+¦n</strong> para detectar en qu+® paso se caen los usuarios.</li>
        <li>Analizar por <strong>segmentos</strong>: tipo de empresa, rol de usuario, frecuencia de uso.</li>
        <li>Cruzar con m+®tricas de <em>abandono</em> y <em>errores</em> para identificar fricciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 5.000 empresas inician flujo de registro de proveedores.</li>
        <li>3.700 completan y activan el servicio.</li>
        <li><code>Tasa de conversi+¦n = (3.700 +À 5.000) +ù 100 = 74%</code>.</li>
        <li>Tras simplificar validaciones, la tasa sube a 82% ÔåÆ clara mejora en efectividad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir ÔÇ£visitasÔÇØ con ÔÇ£intenciones realesÔÇØ: mide a quienes realmente inician el flujo.</li>
        <li>Evitar promediar conversiones de flujos muy diferentes (p. ej. pagos vs apertura de cr+®ditos).</li>
        <li>No ignorar la calidad: alta conversi+¦n con mucho fraude o errores no es +®xito real.</li>
      </ul>
    </div>
  </div>
  `
  },
  value: {
  title: "Valor transaccionado",
  subtitle: "Conversi+¦n & Negocio: volumen monetario operado en el canal digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Valor transaccionado</strong> mide el monto total de dinero movido a trav+®s de la banca empresas
      en un periodo determinado. Refleja el grado de confianza y relevancia que las empresas depositan en el canal
      digital para gestionar operaciones financieras de alto impacto.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Monto total de todas las operaciones completadas en el canal (pagos, transferencias, inversiones, retiros, etc.).</li>
        <li>Puede desglosarse por tipo de producto (ej. pagos masivos, transferencias internacionales, ahorro/inversi+¦n).</li>
        <li>Debe considerarse tanto el volumen bruto como el n+¦mero de operaciones para tener contexto.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Valor transaccionado = +ú (monto de cada operaci+¦n completada en el periodo)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La magnitud econ+¦mica que fluye por el canal digital.</li>
        <li>El nivel de confianza de las empresas en usar el canal para montos significativos.</li>
        <li>La migraci+¦n de operaciones desde sucursales f+¡sicas a digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Valor creciente:</strong> indica mayor adopci+¦n y confianza en el canal digital.</li>
        <li><strong>Valor estancado o decreciente:</strong> puede se+¦alar que las empresas a+¦n prefieren canales alternativos o que existe desconfianza para operaciones grandes.</li>
        <li>Debe analizarse junto a m+®tricas de <em>n+¦mero de operaciones</em> para distinguir entre m+ís transacciones peque+¦as o pocas transacciones grandes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Desglosar el valor por tipo de operaci+¦n (p. ej. n+¦mina, pagos a terceros, transferencias internacionales).</li>
        <li>Relacionar con KPIs de <em>autoservicio</em> para medir la migraci+¦n desde sucursal.</li>
        <li>Monitorear top clientes y segmentos que generan la mayor parte del volumen.</li>
        <li>Combinar con <em>retenci+¦n</em> para identificar sostenibilidad: empresas que mueven alto volumen tienden a permanecer.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 50.000 operaciones completadas.</li>
        <li>Monto total: USD 320 millones.</li>
        <li>De ellos, USD 200 millones corresponden a pagos masivos y USD 70 millones a transferencias internacionales.</li>
        <li>Comparado con el mes anterior (USD 280 millones), el valor creci+¦ un 14% ÔåÆ evidencia de mayor migraci+¦n digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No interpretar valor alto como +®xito absoluto: revisar tambi+®n <em>costo operativo</em> y <em>tasa de +®xito</em>.</li>
        <li>Evitar depender solo de grandes clientes: concentrar el valor en pocos actores aumenta riesgo.</li>
        <li>No confundir incremento de valor con incremento de usuarios; ambos deben medirse por separado.</li>
      </ul>
    </div>
  </div>
  `
  },
  cross: {
  title: "Cross-selling digital",
  subtitle: "Conversi+¦n & Negocio: ampliaci+¦n de relaci+¦n a trav+®s de productos adicionales",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Cross-selling digital</strong> mide el porcentaje de clientes que, partiendo de un flujo
      principal en la banca empresas, contratan o activan un producto/servicio adicional de manera digital.
      Refleja la capacidad del canal para <em>profundizar la relaci+¦n</em> con los clientes y aumentar el
      valor de vida (LTV).
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporci+¦n de empresas que adquieren un producto adicional digitalmente tras usar o activar otro servicio.</li>
        <li>Ejemplos: al realizar pagos masivos, activar autom+íticamente un producto de inversi+¦n; 
        al consultar saldos, contratar l+¡nea de cr+®dito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Cross-selling digital (%) = (N-¦ de clientes que adquirieron un producto adicional +À N-¦ total de clientes expuestos a la oferta) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de las estrategias digitales de ampliaci+¦n de portafolio.</li>
        <li>La capacidad del canal para generar m+ís valor por cliente (share of wallet).</li>
        <li>La confianza de los clientes para contratar productos complejos de forma digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa:</strong> los clientes perciben valor y facilidad para ampliar su relaci+¦n digitalmente.</li>
        <li><strong>Tasa baja:</strong> puede indicar baja relevancia de la oferta, falta de confianza o fricci+¦n en el flujo.</li>
        <li>Debe analizarse junto a <em>retenci+¦n</em> y <em>valor transaccionado</em> para ver impacto en sostenibilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Ofrecer productos complementarios en el momento correcto del flujo (ej. tras completar una transferencia, sugerir inversi+¦n de excedentes).</li>
        <li>Personalizar ofertas seg+¦n perfil y comportamiento de la empresa.</li>
        <li>Medir tanto adopci+¦n inmediata como uso recurrente del producto adicional.</li>
        <li>Cuidar que el cross-selling no aumente la fricci+¦n del flujo original.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 2.000 empresas completaron pagos masivos.</li>
        <li>De ellas, 300 contrataron digitalmente un producto de inversi+¦n ofrecido en el flujo.</li>
        <li><code>Cross-selling digital = (300 +À 2.000) +ù 100 = 15%</code>.</li>
        <li>Tras mejorar la visibilidad de la oferta, la tasa sube a 22% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No saturar al usuario con m+¦ltiples ofertas irrelevantes: genera rechazo y abandono.</li>
        <li>Evitar medir cross-selling solo por clics en la oferta; el KPI debe reflejar contrataci+¦n/uso real.</li>
        <li>No confundir con retenci+¦n: son indicadores distintos aunque complementarios.</li>
      </ul>
    </div>
  </div>
  `
  },
  retention: {
  title: "Retenci+¦n (churn inverso)",
  subtitle: "Conversi+¦n & Negocio: mide cu+íntos clientes permanecen activos en el tiempo",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Retenci+¦n</strong>, tambi+®n conocido como <em>churn inverso</em>, mide el porcentaje de
      clientes que siguen activos en la plataforma despu+®s de un periodo determinado. Es un indicador clave de
      la <em>sostenibilidad del negocio</em> y de la capacidad del canal digital para mantener relaciones a largo plazo.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clientes considerados activos: aquellos que realizan al menos una acci+¦n relevante en un periodo definido (ej. transacci+¦n, aprobaci+¦n, carga de n+¦mina).</li>
        <li>Se mide t+¡picamente en ventanas de 30, 60 o 90 d+¡as, y tambi+®n a nivel trimestral o anual.</li>
        <li>Complemento natural del <em>churn</em>, que mide los que abandonan.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Retenci+¦n (%) = (N-¦ de clientes activos al final del periodo +À N-¦ de clientes activos al inicio del periodo) +ù 100</code></li>
        <li><code>Churn (%) = 100 ÔêÆ Retenci+¦n (%)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad del canal digital para generar h+íbito y fidelidad.</li>
        <li>La salud de la relaci+¦n con empresas: un cliente que se mantiene activo conf+¡a en el canal.</li>
        <li>El impacto de mejoras o problemas en la permanencia de clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta retenci+¦n (&gt;85%):</strong> experiencia robusta y valor claro para los clientes.</li>
        <li><strong>Media (70ÔÇô84%):</strong> aceptable, pero con se+¦ales de fuga en algunos segmentos.</li>
        <li><strong>Baja (&lt;70%):</strong> alerta: p+®rdida significativa de clientes ÔåÆ revisar fricciones o falta de valor.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con claridad qu+® significa ÔÇ£activoÔÇØ en el contexto de banca empresas (ej. haber realizado al menos una operaci+¦n en 90 d+¡as).</li>
        <li>Medir retenci+¦n por <strong>segmento</strong> (micro, pyme, corporativo) y por <strong>rol</strong> (pagador, aprobador).</li>
        <li>Combinar con m+®tricas de <em>valor transaccionado</em> y <em>uso por funcionalidad</em> para entender profundidad.</li>
        <li>Analizar cohortes: clientes que iniciaron en el mismo mes/trimestre para ver c+¦mo evolucionan en el tiempo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Al inicio de Q1: 5.000 empresas activas.</li>
        <li>Al final de Q1: 4.350 siguen activas.</li>
        <li><code>Retenci+¦n = (4.350 +À 5.000) +ù 100 = 87%</code>.</li>
        <li>Churn = 13%. Tras mejorar onboarding de n+¦mina, la retenci+¦n sube a 90% en Q2.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: una empresa ÔÇ£activaÔÇØ que mueve poco valor puede ser distinta a una de alto valor.</li>
        <li>No confundir retenci+¦n con frecuencia: un cliente retenido puede entrar solo una vez en el trimestre.</li>
        <li>No dejar de lado cohortes: ver la evoluci+¦n por antig++edad da informaci+¦n m+ís accionable que un promedio global.</li>
      </ul>
    </div>
  </div>
  `
  },
  selfservice: {
  title: "% Autogesti+¦n exitosa",
  subtitle: "Autoservicio & Costos: casos resueltos sin intervenci+¦n humana",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>% de autogesti+¦n exitosa</strong> mide la proporci+¦n de operaciones o solicitudes que los
      clientes logran resolver por s+¡ mismos en los canales digitales, sin requerir ayuda de agentes humanos 
      (call center, sucursal, chat asistido). Refleja directamente la eficiencia del canal y su capacidad 
      para reducir costos operativos.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones completadas de principio a fin en digital sin asistencia manual.</li>
        <li>Incluye consultas, transacciones y gestiones administrativas (ej. cambio de contrase+¦a, descarga de certificados).</li>
        <li>No se consideran autogesti+¦n exitosa los casos que terminan en un ticket o llamada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Autogesti+¦n exitosa = (N-¦ de operaciones completadas sin ayuda +À N-¦ total de operaciones iniciadas) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La madurez del canal digital como primera opci+¦n de uso.</li>
        <li>La reducci+¦n de dependencias en soporte humano.</li>
        <li>La confianza de los clientes en que el canal digital es suficiente para resolver sus necesidades.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;90%:</strong> excelente nivel de autoservicio, canal consolidado.</li>
        <li><strong>75ÔÇô89%:</strong> aceptable, con oportunidades de mejora en ciertos flujos.</li>
        <li><strong>&lt;75%:</strong> alerta: demasiadas operaciones requieren intervenci+¦n de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Identificar los flujos con m+ís derivaciones a soporte y simplificarlos.</li>
        <li>Ofrecer mensajes de error claros y soluciones inmediatas dentro del mismo canal.</li>
        <li>Medir autogesti+¦n a nivel de <em>funcionalidad</em> (ej. transferencias, n+¦mina, certificados) para priorizar mejoras.</li>
        <li>Cruzar con m+®tricas de <em>reclamos/incidencias</em> y <em>tiempo en tarea</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 100.000 operaciones digitales.</li>
        <li>De ellas, 82.000 fueron completadas sin contacto con soporte.</li>
        <li><code>% Autogesti+¦n exitosa = (82.000 +À 100.000) +ù 100 = 82%</code>.</li>
        <li>Tras mejorar el flujo de recuperaci+¦n de contrase+¦a, el indicador sube a 89% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir autogesti+¦n con uso digital: si el cliente empieza en digital pero termina en call center, no cuenta como +®xito.</li>
        <li>No ignorar la experiencia: autogesti+¦n ÔÇ£forzadaÔÇØ con alta fricci+¦n puede aumentar reclamos.</li>
        <li>No medir solo globalmente: un flujo puede tener 95% +®xito y otro solo 50%, lo cual se oculta en el promedio.</li>
      </ul>
    </div>
  </div>
  `
  },
  digitalVsBranch: {
  title: "Digital vs. Sucursal",
  subtitle: "Autoservicio & Costos: proporci+¦n de operaciones digitales frente a presenciales",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Digital vs. Sucursal</strong> mide la proporci+¦n de operaciones realizadas en el canal 
      digital en comparaci+¦n con las realizadas en sucursales f+¡sicas. Refleja el grado de migraci+¦n hacia 
      autoservicio y la eficiencia lograda al reducir costos operativos de atenci+¦n presencial.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones realizadas por los clientes en banca empresas web o m+¦vil vs. operaciones equivalentes realizadas en oficinas f+¡sicas.</li>
        <li>Se puede calcular a nivel global o por tipo de producto (ej. transferencias, pagos, consultas de saldo).</li>
        <li>Complementa al KPI de <em>% autogesti+¦n exitosa</em>, mostrando la sustituci+¦n de canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Digital = (Operaciones digitales +À Operaciones totales) +ù 100</code></li>
        <li><code>% Sucursal = (Operaciones en sucursal +À Operaciones totales) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de la estrategia de transformaci+¦n digital.</li>
        <li>La preferencia real de los clientes por canales de autoservicio.</li>
        <li>El potencial de reducci+¦n de costos al disminuir la atenci+¦n presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;80% digital:</strong> excelente nivel de adopci+¦n digital.</li>
        <li><strong>50ÔÇô79% digital:</strong> transici+¦n en progreso, todav+¡a con alto uso de sucursales.</li>
        <li><strong>&lt;50% digital:</strong> alerta: los clientes siguen prefiriendo el canal presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por tipo de transacci+¦n: algunos procesos pueden migrar m+ís r+ípido que otros.</li>
        <li>Relacionar con costos operativos para cuantificar el ahorro de la migraci+¦n digital.</li>
        <li>Complementar con encuestas cualitativas para entender barreras de adopci+¦n digital.</li>
        <li>Comparar contra benchmarks del sector bancario para evaluar madurez.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 500.000 operaciones totales.</li>
        <li>Digital: 420.000 (84%); Sucursal: 80.000 (16%).</li>
        <li><code>% Digital = (420.000 +À 500.000) +ù 100 = 84%</code>.</li>
        <li>En transferencias internacionales, el indicador es menor (65%), se+¦al de oportunidad de migraci+¦n.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo globalmente: los promedios pueden ocultar flujos con baja migraci+¦n.</li>
        <li>No confundir ÔÇ£intenci+¦n digitalÔÇØ (ej. iniciar en web) con operaci+¦n completada digitalmente.</li>
        <li>No asumir que migrar a digital es siempre positivo: algunos segmentos valoran la atenci+¦n presencial.</li>
      </ul>
    </div>
  </div>
  `
  },
  supportReduction: {
  title: "Reducci+¦n de llamadas a soporte",
  subtitle: "Autoservicio & Costos: impacto de mejoras digitales en la demanda de atenci+¦n humana",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Reducci+¦n de llamadas a soporte</strong> mide c+¦mo evoluciona el volumen de llamadas al call center
      o tickets de soporte relacionados con procesos que pueden resolverse digitalmente. Refleja el impacto directo
      de las mejoras de autogesti+¦n en la <em>eficiencia operativa</em> y en los costos del banco.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Comparaci+¦n del volumen de llamadas o tickets recibidos en un periodo contra un baseline hist+¦rico.</li>
        <li>Se enfoca en llamadas vinculadas a procesos que ya tienen opci+¦n digital (ej. desbloqueo de usuario, descarga de certificados, transferencias).</li>
        <li>Puede medirse globalmente o por tipo de flujo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Reducci+¦n = ((Llamadas baseline ÔêÆ Llamadas actuales) +À Llamadas baseline) +ù 100</code></li>
        <li><code>Llamadas por 1.000 operaciones = (N-¦ de llamadas +À N-¦ de operaciones digitales) +ù 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El impacto de las mejoras digitales en la resoluci+¦n aut+¦noma de los clientes.</li>
        <li>La reducci+¦n de costos operativos en atenci+¦n telef+¦nica y soporte humano.</li>
        <li>La efectividad de la comunicaci+¦n y educaci+¦n de usuarios para aprovechar el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Reducci+¦n significativa (&gt;30%):</strong> +®xito claro de la estrategia digital.</li>
        <li><strong>Reducci+¦n moderada (10ÔÇô29%):</strong> muestra avance, pero a+¦n con dependencias de soporte.</li>
        <li><strong>Sin reducci+¦n o incremento:</strong> alerta: puede haber problemas de usabilidad o fallas t+®cnicas recurrentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por <strong>categor+¡a de llamada</strong> (ej. token, transferencias, contrase+¦as) para enfocar mejoras.</li>
        <li>Relacionar con KPIs de <em>% autogesti+¦n exitosa</em> y <em>errores de usuario</em>.</li>
        <li>Monitorear <strong>tiempo medio de atenci+¦n</strong>: menos llamadas debe reflejar tambi+®n menor carga operativa.</li>
        <li>Incluir retroalimentaci+¦n de soporte para identificar causas ra+¡z.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Baseline Q1: 15.000 llamadas de soporte relacionadas con bloqueos de usuario.</li>
        <li>Q2 tras mejoras de autogesti+¦n: 9.000 llamadas.</li>
        <li><code>% Reducci+¦n = ((15.000 ÔêÆ 9.000) +À 15.000) +ù 100 = 40%</code>.</li>
        <li>Impacto: ahorro operativo estimado de USD 50.000 en un trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No considerar solo volumen: medir tambi+®n el <strong>motivo</strong> de las llamadas para entender qu+® procesos requieren redise+¦o.</li>
        <li>No confundir reducci+¦n por estacionalidad (ej. menos actividad en feriados) con mejora real.</li>
        <li>No medir aislado: vincularlo con satisfacci+¦n (CSAT, CES) para validar que la reducci+¦n no se debe a frustraci+¦n o deserci+¦n del canal.</li>
      </ul>
    </div>
  </div>
  `
  },
  helpUsage: {
  title: "Uso de ayuda digital",
  subtitle: "Autoservicio & Costos: efectividad de FAQs, chatbots y gu+¡as en l+¡nea",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Uso de ayuda digital</strong> mide cu+íntos clientes utilizan los recursos de soporte
      en l+¡nea (FAQs, chatbots, tutoriales, gu+¡as contextuales) y en qu+® medida resuelven sus dudas sin
      necesidad de contactar soporte humano. Refleja la <em>madurez del autoservicio</em> y el potencial
      de reducci+¦n de costos de atenci+¦n.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consultas atendidas en canales digitales de ayuda (FAQ, chatbot, asistentes contextuales).</li>
        <li>+ëxito de esas consultas: porcentaje que resuelve sin escalar a soporte humano.</li>
        <li>Puede medirse a nivel global o por flujo (ej. transferencias, n+¦mina, certificados).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Uso de ayuda digital = (Consultas en canales digitales +À Total de consultas) +ù 100</code></li>
        <li><code>% Resoluci+¦n digital = (Consultas resueltas sin escalar +À Consultas en ayuda digital) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El grado en que los clientes adoptan recursos de autoservicio para resolver dudas.</li>
        <li>La efectividad de las herramientas digitales frente a la atenci+¦n tradicional.</li>
        <li>El impacto de FAQs, tutoriales y chatbots en la reducci+¦n de carga de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Uso alto (&gt;60% de consultas en digital):</strong> buena adopci+¦n de ayuda online.</li>
        <li><strong>Resoluci+¦n alta (&gt;80%):</strong> indica que las herramientas son efectivas.</li>
        <li><strong>Bajo uso:</strong> los clientes no encuentran la ayuda o no conf+¡an en ella.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Integrar ayuda contextual en el flujo (tooltips, gu+¡as paso a paso).</li>
        <li>Monitorear las preguntas m+ís frecuentes en chat/FAQ y actualizar contenido.</li>
        <li>Medir tasa de escalamiento: qu+® % de consultas terminan en agente humano.</li>
        <li>Usar feedback (ÔÇ£-+Te fue +¦til esta respuesta?ÔÇØ) para mejorar continuamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 50.000 consultas totales.</li>
        <li>De ellas, 30.000 fueron atendidas por FAQ/chatbot.</li>
        <li><code>% Uso de ayuda digital = (30.000 +À 50.000) +ù 100 = 60%</code>.</li>
        <li>24.000 de esas consultas se resolvieron sin escalar ÔåÆ <code>% Resoluci+¦n digital = (24.000 +À 30.000) +ù 100 = 80%</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: el +®xito depende de la resoluci+¦n efectiva.</li>
        <li>Evitar chatbots que devuelvan respuestas gen+®ricas sin contexto; generan frustraci+¦n.</li>
        <li>No dejar FAQs est+íticas: la falta de actualizaci+¦n reduce confianza y uso.</li>
      </ul>
    </div>
  </div>
  `
  },
  failedLogin: {
  title: "Intentos de login fallidos",
  subtitle: "Seguridad & Cumplimiento: fricci+¦n y riesgo en el acceso",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Intentos de login fallidos</strong> mide la cantidad y proporci+¦n de accesos no exitosos
      (credenciales incorrectas, bloqueo por intentos, expiraci+¦n de sesi+¦n/2FA). En banca empresas, un nivel alto
      puede indicar <em>fricci+¦n de UX</em> (reglas poco claras) o <em>riesgo</em> (ataques de fuerza bruta).
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Conteo de intentos de autenticaci+¦n con error (usuario/clave, 2FA, dispositivo no reconocido).</li>
        <li>Puede incluir <em>bloqueos de cuenta</em> tras N intentos fallidos.</li>
        <li>Se recomienda medir por <strong>empresa</strong>, <strong>usuario</strong> y <strong>origen</strong> (IP/dispositivo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Intentos fallidos por 1.000 sesiones = (N-¦ de intentos fallidos +À N-¦ de sesiones totales) +ù 1.000</code></li>
        <li><code>% sesiones con al menos 1 fallo = (Sesiones con ÔëÑ1 fallo +À Sesiones totales) +ù 100</code></li>
        <li><code>% cuentas bloqueadas = (Cuentas bloqueadas por intentos +À Cuentas activas) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La claridad y usabilidad del proceso de autenticaci+¦n (UX del login/2FA).</li>
        <li>Eventos an+¦malos que pueden sugerir ataques o credenciales comprometidas.</li>
        <li>Impacto de pol+¡ticas (complejidad de contrase+¦as, rotaci+¦n, 2FA) en la fricci+¦n del acceso.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (gu+¡a):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 30/1.000 sesiones:</strong> fricci+¦n baja esperable en entornos 2FA.</li>
        <li><strong>30ÔÇô80/1.000:</strong> revisar UX/mensajes, latencia del OTP y recordatorios de pol+¡ticas.</li>
        <li><strong>&gt; 80/1.000 o picos s+¦bitos:</strong> posible ataque o cambio de pol+¡tica mal comunicado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar <strong>error de credenciales</strong>, <strong>error de 2FA</strong> y <strong>bloqueo</strong> como eventos distintos.</li>
        <li>Registrar <strong>latencia del OTP</strong> y ventana de validez para detectar caducidades.</li>
        <li>Mejorar mensajes accionables (formato de usuario, pol+¡tica de contrase+¦a, reenv+¡o de OTP).</li>
        <li>Aplicar <strong>rate limiting</strong>, CAPTCHA adaptativo y alertas ante picos por IP/rango.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador) y por <strong>dispositivo</strong> (web/m+¦vil).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 120.000 sesiones; 7.200 intentos fallidos.</li>
        <li><code>Intentos fallidos por 1.000 = (7.200 +À 120.000) +ù 1.000 = 60</code>.</li>
        <li>El 35% proviene de <em>2FA expirado</em> ÔåÆ se ampl+¡a ventana de OTP y se a+¦ade reenv+¡o r+ípido; el indicador baja a 28/1.000.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar intentos fallidos con <strong>intentos maliciosos</strong> sin aplicar heur+¡sticas (IP, patr+¦n temporal).</li>
        <li>No usar solo totales: los <strong>picos horarios</strong> y por <strong>origen</strong> son clave para detecci+¦n temprana.</li>
        <li>Evitar mensajes gen+®ricos (ÔÇ£error de autenticaci+¦nÔÇØ): impiden que el usuario se recupere y elevan llamadas a soporte.</li>
      </ul>
    </div>
  </div>
  `
  },
  twoFA: {
  title: "2FA +®xito",
  subtitle: "Seguridad & Cumplimiento: efectividad de la autenticaci+¦n de dos factores",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>2FA +®xito</strong> mide el porcentaje de intentos de autenticaci+¦n con doble factor
      (contrase+¦a + token/OTP, app de seguridad, biometr+¡a) que resultan exitosos. Refleja tanto la
      <em>robustez de la seguridad</em> como la <em>usabilidad del proceso</em>.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de autenticaci+¦n que logran completarse correctamente usando el segundo factor requerido.</li>
        <li>Puede incluir OTP por SMS, token f+¡sico, app de autenticaci+¦n o biometr+¡a.</li>
        <li>Debe diferenciarse entre <strong>fallas t+®cnicas</strong> (OTP no entregado, latencia) y <strong>fallas de usuario</strong> (c+¦digo expirado, digitaci+¦n err+¦nea).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% 2FA +®xito = (N-¦ de autenticaciones 2FA completadas +À N-¦ total de intentos 2FA) +ù 100</code></li>
        <li><code>% 2FA fallidas = 100 ÔêÆ % 2FA +®xito</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad del sistema de autenticaci+¦n multifactor.</li>
        <li>La claridad de la experiencia de usuario en procesos sensibles.</li>
        <li>El impacto de la fricci+¦n en la continuidad de operaciones cr+¡ticas (pagos, transferencias).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 95%:</strong> +¦ptimo, balance adecuado entre seguridad y usabilidad.</li>
        <li><strong>90ÔÇô94%:</strong> aceptable, pero con se+¦ales de fricci+¦n o fallas t+®cnicas.</li>
        <li><strong>&lt; 90%:</strong> alerta: exceso de fricci+¦n o problemas de infraestructura/entrega de OTP.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar m+®tricas de <strong>fallos de entrega</strong> (ej. SMS no llega) vs <strong>fallos de uso</strong> (c+¦digo digitado mal).</li>
        <li>Medir latencia promedio de entrega de OTP.</li>
        <li>Optimizar mensajes y UX para evitar expiraciones de c+¦digos.</li>
        <li>Ofrecer opciones de segundo factor redundantes (app, token f+¡sico, SMS).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 80.000 intentos de autenticaci+¦n 2FA.</li>
        <li>De ellos, 75.200 fueron exitosos.</li>
        <li><code>% 2FA +®xito = (75.200 +À 80.000) +ù 100 = 94%</code>.</li>
        <li>Tras mejorar el tiempo de entrega de OTP, el KPI sube a 97% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir bajo % con falta de seguridad: a veces indica demasiada fricci+¦n.</li>
        <li>No mezclar intentos <strong>reales</strong> con intentos <strong>maliciosos</strong> (fuerza bruta, bots).</li>
        <li>Evitar medir solo globalmente: segmentar por canal (web, app) y tipo de token.</li>
      </ul>
    </div>
  </div>
  `
  },
  kyc: {
  title: "Tiempo KYC",
  subtitle: "Seguridad & Cumplimiento: rapidez para habilitar a una empresa a operar",
  html: `
  <div class="space-y-4">
    <p>
      <strong>Tiempo KYC</strong> (Know Your Customer) mide cu+ínto tarda el proceso de verificaci+¦n y
      habilitaci+¦n de una empresa (y sus usuarios/firmantes) desde el inicio del alta hasta quedar
      <em>apta para operar</em> en la banca empresas. Impacta directamente en la activaci+¦n y en la
      percepci+¦n de agilidad/regulaci+¦n.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo <em>end-to-end</em> desde la solicitud/registro hasta la aprobaci+¦n final para operar.</li>
        <li>Incluye validaci+¦n de empresa, UBO/beneficiarios finales, listas de sanciones, documentaci+¦n y asignaci+¦n de roles.</li>
        <li>Se recomienda medir por <strong>p50/p90</strong> y % dentro de SLA comprometido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo KYC promedio = +ú (tiempo de cada caso) +À N-¦ de casos</code></li>
        <li><code>P90 KYC = tiempo por debajo del cual finalizan el 90% de los casos</code></li>
        <li><code>% dentro de SLA = (Casos con KYC Ôëñ SLA +À Casos totales) +ù 100</code></li>
        <li><code>% STP (Straight-Through Processing) = (Casos aprobados sin intervenci+¦n manual +À Casos totales) +ù 100</code></li>
        <li><code>% Re-trabajo = (Casos que requirieron reenv+¡o de docs +À Casos totales) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La eficiencia del onboarding regulatorio y la calidad de la documentaci+¦n solicitada.</li>
        <li>La fricci+¦n operativa (idas y vueltas por documentos, validaciones fallidas, observaciones).</li>
        <li>El balance entre cumplimiento normativo y agilidad para habilitar el canal.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (gu+¡a):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>P90 Ôëñ 3ÔÇô5 d+¡as h+íbiles:</strong> onboarding +ígil para pymes/renovaciones.</li>
        <li><strong>P90 6ÔÇô10 d+¡as:</strong> razonable en corporativos con estructuras complejas.</li>
        <li><strong>P90 &gt; 10 d+¡as o % SLA &lt; 80%:</strong> alerta: exceso de fricci+¦n o cuello de botella operativo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Checklists din+ímicos y <em>upload</em> guiado con validaciones en tiempo real (formato, vigencia, legibilidad).</li>
        <li>Integraciones para <strong>verificaci+¦n autom+ítica</strong> (registros mercantiles, listas PEP/sanciones) y c+ílculo de riesgo.</li>
        <li>Separar tiempos por etapa: recepci+¦n de docs ÔåÆ verificaci+¦n ÔåÆ observaciones ÔåÆ aprobaci+¦n final.</li>
        <li>Medir y elevar <strong>% STP</strong>; reducir <strong>% re-trabajo</strong> con requisitos claros y ejemplos.</li>
        <li>Segmentar por tipo de empresa (micro/pyme/corporativa) y por <em>renovaci+¦n</em> vs <em>alta</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.000 casos KYC iniciados; SLA = 5 d+¡as h+íbiles.</li>
        <li>Promedio = 4.2 d+¡as; P90 = 7.1 d+¡as; <code>% dentro de SLA = 78%</code>.</li>
        <li>% STP = 46%; % Re-trabajo = 22% (principalmente por actas societarias desactualizadas).</li>
        <li>Tras gu+¡as de documentaci+¦n y validaci+¦n autom+ítica, P90 baja a 5.2 d+¡as y SLA sube a 88%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: los percentiles muestran la verdadera cola larga de casos lentos.</li>
        <li>Evitar requisitos redundantes o no normativos que alargan el ciclo sin mejorar el control.</li>
        <li>No mezclar renovaciones simplificadas con altas nuevas complejas al reportar.</li>
      </ul>
    </div>
  </div>
  `
  },
  fraud: {
  title: "Fraude detectado / prevenido",
  subtitle: "Seguridad & Cumplimiento: protecci+¦n activa contra operaciones sospechosas",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Fraude detectado / prevenido</strong> mide la cantidad y el valor monetario de intentos de fraude
      que fueron identificados y bloqueados antes de concretarse. En banca empresas, es cr+¡tico porque garantiza la
      <em>confianza en el canal digital</em> y refleja la efectividad de los sistemas antifraude y de monitoreo.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de operaciones sospechosas que fueron detenidas, investigadas o rechazadas por reglas antifraude o monitoreo manual.</li>
        <li>Incluye fraude por phishing, credenciales robadas, malware, suplantaci+¦n o desv+¡o de fondos.</li>
        <li>Se mide tanto en <strong>n+¦mero de casos</strong> como en <strong>monto econ+¦mico</strong> bloqueado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>N-¦ de fraudes detectados = total de operaciones sospechosas bloqueadas</code></li>
        <li><code>Monto prevenido = +ú montos de operaciones bloqueadas por sospecha de fraude</code></li>
        <li><code>% de fraude prevenido = (Monto bloqueado +À Monto total intentado en fraudes) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad de las defensas digitales (reglas, IA, monitoreo) para proteger el dinero del cliente y del banco.</li>
        <li>La evoluci+¦n de intentos de fraude a lo largo del tiempo (tendencias y patrones).</li>
        <li>El nivel de resiliencia del canal frente a amenazas emergentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>M+ís fraudes detectados</strong> puede ser positivo (sistema alerta funcionando) o negativo (incremento de ataques); debe leerse junto al % prevenido.</li>
        <li><strong>% prevenido alto (&gt;95%)</strong> indica un sistema robusto.</li>
        <li><strong>% prevenido bajo (&lt;90%)</strong> alerta de vulnerabilidades o controles insuficientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar m+®tricas de <strong>fraude detectado</strong> (bloqueado) vs <strong>fraude consumado</strong> (logr+¦ concretarse).</li>
        <li>Analizar por canal (web, m+¦vil) y tipo de fraude (phishing, malware, ingenier+¡a social).</li>
        <li>Correlacionar con <em>intentos de login fallidos</em> y <em>2FA +®xito</em> para anticipar vulnerabilidades.</li>
        <li>Medir tiempos de reacci+¦n desde la alerta hasta la resoluci+¦n.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 250 intentos de fraude detectados.</li>
        <li>Monto intentado: USD 3.2 millones.</li>
        <li>Monto bloqueado: USD 3.05 millones.</li>
        <li><code>% prevenido = (3.05M +À 3.2M) +ù 100 = 95.3%</code>.</li>
        <li>El 60% correspondi+¦ a intentos con credenciales robadas; tras reforzar 2FA, el +¡ndice de +®xito de ataques baj+¦ significativamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir volumen de intentos con vulnerabilidad: un alza puede deberse a campa+¦as externas.</li>
        <li>No reportar solo n+¦mero de casos: el monto econ+¦mico es igual de relevante.</li>
        <li>No mezclar fraude detectado con reclamos de usuarios; deben integrarse pero medirse distinto.</li>
      </ul>
    </div>
  </div>
  `
  },
  onboarding: {
  title: "Tiempo de activaci+¦n de empresa/usuario",
  subtitle: "Seguridad & Cumplimiento: rapidez para habilitar a un cliente a operar en digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de activaci+¦n de empresa/usuario</strong> mide cu+ínto tarda una empresa o un usuario 
      en quedar habilitado para operar en la banca empresas digital despu+®s de haberse registrado o haber sido creado 
      en el sistema. Refleja la <em>eficiencia del onboarding</em> y el impacto del proceso inicial en la experiencia del cliente.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde el registro o alta de un cliente/usuario hasta su primera operaci+¦n exitosa en el canal digital.</li>
        <li>Incluye pasos como validaci+¦n de identidad, configuraci+¦n de perfiles, activaci+¦n de token o credenciales y asignaci+¦n de permisos.</li>
        <li>Se recomienda medir en d+¡as u horas h+íbiles, y distinguir entre <em>empresas nuevas</em> y <em>usuarios adicionales</em> dentro de una empresa existente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de activaci+¦n = +ú (tiempo de activaci+¦n por cliente/usuario) +À N-¦ de clientes/usuarios activados</code></li>
        <li><code>% activados dentro de SLA = (Clientes/usuarios activados dentro del tiempo objetivo +À Total activados) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La agilidad del banco en habilitar a sus clientes para operar digitalmente.</li>
        <li>La claridad del proceso de onboarding y la facilidad de configuraci+¦n inicial.</li>
        <li>El impacto de fricciones como demoras en la entrega de tokens, validaciones manuales o aprobaci+¦n de roles.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Ôëñ 24ÔÇô48h:</strong> experiencia +ígil, genera confianza y r+ípida adopci+¦n.</li>
        <li><strong>3ÔÇô5 d+¡as:</strong> aceptable, pero puede generar frustraci+¦n en clientes que esperan inmediatez.</li>
        <li><strong>&gt; 5 d+¡as:</strong> alerta: riesgo de abandono o migraci+¦n a canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Automatizar validaciones y asignaci+¦n de permisos para reducir tiempos.</li>
        <li>Medir activaci+¦n por rol (ej. pagador, aprobador, visor) para identificar cuellos de botella espec+¡ficos.</li>
        <li>Ofrecer gu+¡as claras y soporte contextual para reducir la necesidad de llamadas o tickets.</li>
        <li>Comparar tiempos de activaci+¦n de empresas nuevas vs usuarios adicionales dentro de clientes existentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.200 usuarios/empresas registrados.</li>
        <li>Promedio de activaci+¦n: 2.8 d+¡as.</li>
        <li><code>% dentro de SLA (Ôëñ 3 d+¡as) = (950 +À 1.200) +ù 100 = 79%</code>.</li>
        <li>Tras automatizar entrega de tokens, el promedio baj+¦ a 1.5 d+¡as y SLA subi+¦ a 92%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: usar percentiles (P90, P95) para capturar casos lentos que generan frustraci+¦n.</li>
        <li>No confundir activaci+¦n con adopci+¦n: que un usuario est+® habilitado no garantiza que lo use (ese es KPI de activaci+¦n funcional).</li>
        <li>No excluir usuarios adicionales: su experiencia tambi+®n impacta la satisfacci+¦n global de la empresa.</li>
      </ul>
    </div>
  </div>
  `
  },
  uptime: {
  title: "Disponibilidad (uptime)",
  subtitle: "Salud t+®cnica: estabilidad y continuidad del servicio digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Disponibilidad (uptime)</strong> mide el porcentaje de tiempo en que la banca empresas
      est+í operativa y accesible para los clientes. Es un indicador cr+¡tico de la <em>confiabilidad t+®cnica</em>
      y est+í directamente vinculado a la percepci+¦n de seguridad y confianza en el canal digital.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo total en que el servicio estuvo disponible +À tiempo total del periodo medido.</li>
        <li>Se mide t+¡picamente a nivel mensual o trimestral.</li>
        <li>Incluye tanto ca+¡das totales como parciales (ej. un m+¦dulo clave fuera de servicio).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Uptime (%) = ((Tiempo total del periodo ÔêÆ Tiempo de ca+¡da) +À Tiempo total del periodo) +ù 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad de la infraestructura t+®cnica de la banca empresas.</li>
        <li>El impacto de ca+¡das programadas (mantenimientos) y no programadas en la experiencia del cliente.</li>
        <li>La solidez de los mecanismos de redundancia y monitoreo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (est+índares):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>99.9% o m+ís:</strong> nivel +¦ptimo (ÔÇ£tres nuevesÔÇØ = ~43 min de ca+¡da/mes).</li>
        <li><strong>99.5ÔÇô99.8%:</strong> aceptable, pero con espacio para mejora (~3.5h de ca+¡da/mes).</li>
        <li><strong>&lt;99.5%:</strong> cr+¡tico: genera desconfianza y puede incumplir SLAs regulatorios.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Diferenciar ca+¡das planificadas vs incidentes cr+¡ticos.</li>
        <li>Medir disponibilidad por m+¦dulo cr+¡tico (pagos, transferencias, consultas).</li>
        <li>Complementar con <em>MTTR</em> (Mean Time to Recovery) para ver velocidad de recuperaci+¦n.</li>
        <li>Implementar monitoreo continuo y alertas proactivas para minimizar impacto en clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Periodo: 30 d+¡as = 43.200 minutos.</li>
        <li>Ca+¡das no planificadas: 85 minutos.</li>
        <li><code>Uptime = ((43.200 ÔêÆ 85) +À 43.200) +ù 100 = 99.80%</code>.</li>
        <li>Interpretaci+¦n: dentro de lo aceptable, aunque por debajo de un SLA de 99.9%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo uptime global: las ca+¡das parciales de m+¦dulos clave afectan m+ís al cliente que una ca+¡da breve total.</li>
        <li>Evitar ocultar mantenimientos bajo ÔÇ£disponibilidad plenaÔÇØ: deben comunicarse claramente.</li>
        <li>No medir solo al final de mes: el impacto real est+í en las horas pico de operaci+¦n (ej. n+¦mina, fin de mes).</li>
      </ul>
    </div>
  </div>
  `
  },
  errors5xx: {
  title: "Errores 4xx / 5xx",
  subtitle: "Salud t+®cnica: estabilidad y confiabilidad de los servicios",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Errores 4xx / 5xx</strong> mide la frecuencia de respuestas fallidas devueltas por
      los servicios del canal digital. Es un indicador directo de la <em>calidad t+®cnica</em> y refleja
      tanto problemas de <em>validaci+¦n / cliente</em> (4xx) como de <em>infraestructura / servidor</em> (5xx).
    </p>

    <div>
      <p class="font-semibold">Definiciones:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Errores 4xx:</strong> solicitudes inv+ílidas por parte del cliente (campos mal formados, permisos insuficientes, recursos inexistentes).</li>
        <li><strong>Errores 5xx:</strong> fallas del servidor (timeouts, ca+¡das de servicios, excepciones internas).</li>
        <li>Ambos afectan la experiencia del usuario y deben monitorearse de forma diferenciada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores 4xx/5xx = (N-¦ de respuestas 4xx/5xx +À N-¦ total de requests) +ù 100</code></li>
        <li><code>Errores por 10.000 requests = (N-¦ de errores +À N-¦ total de requests) +ù 10.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad t+®cnica del backend y la calidad de las integraciones.</li>
        <li>La claridad y robustez de las validaciones de entrada.</li>
        <li>La experiencia real de los clientes al intentar operar en el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 0.5% de errores:</strong> nivel +¦ptimo de estabilidad.</li>
        <li><strong>0.5% ÔÇô 1.5%:</strong> aceptable, con oportunidades de optimizaci+¦n.</li>
        <li><strong>&gt; 1.5%:</strong> alerta de inestabilidad que afecta directamente a la satisfacci+¦n y confianza.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar m+®tricas de 4xx vs 5xx para diferenciar <em>errores de usuario</em> vs <em>fallos t+®cnicos</em>.</li>
        <li>Monitorear percentiles y picos horarios para detectar saturaciones.</li>
        <li>Cruzar con KPIs de <em>tasa de +®xito</em> y <em>abandono</em> para entender impacto en negocio.</li>
        <li>Implementar alertas autom+íticas cuando supere umbrales definidos (ej. SLA interno).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 12 millones de requests.</li>
        <li>Errores 4xx: 48.000 (0.4%); Errores 5xx: 36.000 (0.3%).</li>
        <li><code>Tasa total de errores = (84.000 +À 12.000.000) +ù 100 = 0.7%</code>.</li>
        <li>Tras reforzar validaciones en API de transferencias, los 4xx bajan a 0.2% y la tasa global a 0.5%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No agrupar 4xx y 5xx como un +¦nico indicador sin desglose: tienen causas y acciones distintas.</li>
        <li>No medir solo promedios: los picos en horarios cr+¡ticos pueden ser m+ís da+¦inos que el global mensual.</li>
        <li>Evitar depender de reportes manuales; instrumentar monitoreo continuo y alertas proactivas.</li>
      </ul>
    </div>
  </div>
  `
  },
  mttr: {
  title: "MTTR (Mean Time To Recovery)",
  subtitle: "Salud t+®cnica: rapidez de recuperaci+¦n tras incidentes",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>MTTR (Mean Time To Recovery)</strong> mide el tiempo promedio que tarda el equipo en 
      restaurar el servicio tras un incidente que afecta la disponibilidad o el desempe+¦o de la banca empresas. 
      Es clave para evaluar la <em>resiliencia operativa</em> y la capacidad de respuesta ante fallos.
    </p>

    <div>
      <p class="font-semibold">Definici+¦n:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde la detecci+¦n del incidente hasta la recuperaci+¦n total del servicio afectado.</li>
        <li>Incluye incidentes cr+¡ticos (ca+¡das de m+¦dulos de pagos, transferencias, login) y menores (degradaciones).</li>
        <li>Debe medirse por severidad e incluir tanto interrupciones totales como parciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">F+¦rmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>MTTR = +ú (Tiempo de recuperaci+¦n de cada incidente) +À N-¦ de incidentes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">-+Qu+® mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de los equipos t+®cnicos en resolver problemas.</li>
        <li>El impacto de los incidentes en la continuidad de negocio.</li>
        <li>La madurez de los procesos de monitoreo, diagn+¦stico y respuesta.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretaci+¦n (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 1 hora:</strong> excelente, alta resiliencia.</li>
        <li><strong>1ÔÇô4 horas:</strong> aceptable, con oportunidad de mejora.</li>
        <li><strong>&gt; 4 horas:</strong> cr+¡tico: riesgo alto de impacto en clientes y reputaci+¦n.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas pr+ícticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar incidentes por severidad (cr+¡tico, mayor, menor) y calcular MTTR por nivel.</li>
        <li>Automatizar monitoreo y alertas para reducir el <em>tiempo de detecci+¦n</em> (MTTD).</li>
        <li>Establecer <strong>runbooks</strong> y protocolos claros para acelerar la recuperaci+¦n.</li>
        <li>Realizar post-mortems y aplicar aprendizajes para evitar reincidencias.</li>
        <li>Complementar con <em>uptime</em> y <em>errores 4xx/5xx</em> para una visi+¦n integral.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 8 incidentes registrados.</li>
        <li>Tiempos de recuperaci+¦n: 30m, 50m, 1h20m, 2h10m, 40m, 3h, 1h, 45m.</li>
        <li>Promedio = 1h30m ÔåÆ <code>MTTR = 90 minutos</code>.</li>
        <li>Tras implementar monitoreo proactivo, el promedio baja a 55 minutos el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo el promedio: analizar tambi+®n la variabilidad (P90) para casos extremos.</li>
        <li>No incluir en MTTR tareas post-incidente como an+ílisis forense; debe centrarse en <em>restauraci+¦n de servicio</em>.</li>
        <li>No confundir con <em>MTTF</em> (Mean Time To Failure) o <em>MTBF</em> (Mean Time Between Failures).</li>
      </ul>
    </div>
  </div>
  `
  },
};

const CATEGORIES = [
  "Uso & Adopci+¦n",
  "Eficiencia & Fricci+¦n",
  "Satisfacci+¦n & Experiencia",
  "Conversi+¦n & Negocio",
  "Autoservicio & Costos",
  "Seguridad & Cumplimiento",
  "Salud t+®cnica",
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

  // Datos enriquecidos para el modal (title/subtitle/html) con fallback al cat+ílogo
  const kpiForModal = React.useMemo(() => KPI_CATALOG_WITH_URL.find(x => x.id === info.id), [info.id]);
  const modalDetail = React.useMemo(() => {
    if (!kpiForModal) return null;
    const d = KPI_DETAILS[info.id] || {};
    return {
      title: d.title || kpiForModal.title,
      subtitle: d.subtitle || kpiForModal.cat,
      html: d.html || `<p>${kpiForModal.desc}</p><p style="color:#6b7280;font-size:12px;">C+¦mo se mide: ${kpiForModal.how}</p>`
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
      `# KPI Sheet ÔÇö ${data.servicio || "(servicio)"}`,
      `\n**Objetivo de negocio:** ${data.objetivo_negocio || "-"}`,
      `\n**Objetivo de usuario:** ${data.objetivo_usuario || "-"}`,
      `\n**Tareas clave:**`,
      ...data.tareas_clave.map(t => `- ${t}`),
      `\n## KPIÔÇÖs seleccionados`,
      ...data.kpis.map(k => `- **${k.title}** (${k.cat}) ÔÇö ${k.desc}\n  - C+¦mo se mide: ${k.how}\n  - Baseline: ${k.baseline || ""}\n  - Meta: ${k.target || ""}\n  - Liberaci+¦n: ${k.timeframe || ""}`)
    ].join("\n");
    try { await navigator.clipboard.writeText(md); } catch {}
    alert("Resumen copiado en Markdown Ô£à");
  };

  // Funci+¦n para guardar (sin CORS preflight)
  async function guardarResultadosKPI(payload) {
    const url = window.__KPI_ENDPOINT__;
    if (!url) throw new Error('Falta window.__KPI_ENDPOINT__');

    console.log('KPI: guardarResultadosKPI ÔåÆ POST', { url, payload });
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload) // sin Content-Type para evitar preflight
    });

    const txt = await res.text();
    if (txt.startsWith('error')) {
      throw new Error(txt);
    }
    console.log('KPI: guardarResultadosKPI ÔåÆ respuesta', txt);
    return txt; // 'ok'
  }

  // Guarda cada ejecuci+¦n en un backend externo (Apps Script/Drive/Sheets)
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
      setToast('ÔÜá´©Å Falta configurar VITE_KPI_ENDPOINT (.env.production)');
      setTimeout(() => setToast(null), 4000);
    }
    return;
  }

  const onSuccess = () => {
    console.log('KPI: env+¡o despachado (beacon o fetch no-cors)');
    if (setToast) {
      setToast('Ô£à KPIs enviados');
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
      console.warn('KPI: sendBeacon devolvi+¦ false, probamos fetch(no-cors)');
    }

    // 2) Fallback con fetch(no-cors) sin headers
    await fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: json });
    console.log('KPI: fetch(no-cors) despachado');
    onSuccess();
  } catch (e) {
    console.error('KPI: error enviando al endpoint', e);
    if (setToast) {
      setToast('ÔØî Error al enviar. Revisa la consola.');
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
        const testCats = ["Uso & Adopci+¦n"]; const fk = filterKPIsHelper(KPI_CATALOG, testCats, 'adop');
        console.assert(fk.some(x => x.id === 'adoption'), 'filterKPIs finds adoption');
        // buildSummary
        const sel = { nps: { baseline: '60', target: '75', timeframe: 'Q4' } };
        const sum = buildSummary(sel, KPI_CATALOG, 'N+¦mina', 'Reducir costos', 'Pagar sin errores', ['Cargar archivo']);
        console.assert(sum.kpis[0].id === 'nps' && sum.servicio === 'N+¦mina', 'buildSummary basics');
        console.groupEnd();
      }
    } catch {}
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Mentor+¡a KPI ÔÇö Wizard</h1>
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
                <SectionTitle icon={Target} title="1) Alineaci+¦n de objetivos" subtitle="Define el marco antes de idear: negocio + usuario + servicio" />
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
                  <Input placeholder="Ej. Reducir costos de atenci+¦n" value={bizGoal} onChange={e => setBizGoal(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label>Objetivo de usuario</Label>
                  <Input placeholder="Ej. Completar pagos masivos sin errores" value={userGoal} onChange={e => setUserGoal(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label>Notas / contexto</Label>
                  <Textarea placeholder="Riesgos, dependencias, hip+¦tesisÔÇª" value={notes} onChange={e => setNotes(e.target.value)} className="mt-1" />
                </div>
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 1 && (
          <Fade key="s2">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={Gauge} title="2) Tareas/flujo clave" subtitle="Enumera 2ÔÇô3 micro journeys cr+¡ticos y d+¦nde hay fricci+¦n" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input placeholder={`Tarea ${i + 1} (ej. Cargar archivo de n+¦mina)`} value={t} onChange={e => updateTask(i, e.target.value)} />
                      {tasks.length > 1 && (
                        <Button variant="ghost" size="icon" onClick={() => removeTask(i)} className="shrink-0"><Trash2 className="h-4 w-4" /></Button>
                      )}
  </div>
                  ))}
                  <Button onClick={addTask} variant="secondary" className="gap-2"><Plus className="h-4 w-4" /> A+¦adir tarea</Button>
                </div>
              </CardContent>
            </Card>
          </Fade>
        )}

        {step === 2 && (
          <Fade key="s3">
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <SectionTitle icon={ListChecks} title="3) Selecci+¦n de KPIÔÇÖs" subtitle="Marca los KPIÔÇÖs relevantes (relevancia, medibilidad y accionabilidad)" />
              </CardHeader>
              <CardContent>
                <div className="gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-1 mb-4">
                    <Search className="h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar KPI por nombre o descripci+¦nÔÇª" value={search} onChange={e => setSearch(e.target.value)} />
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
                                  title="M+ís info"
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
                          <p className="text-xs text-gray-400 mt-1">C+¦mo se mide: {k.how}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {Object.keys(selected).length === 0 && (
                  <p className="text-sm text-gray-500 mt-4">Tip: empieza marcando 2ÔÇô3 KPIÔÇÖs m+íximo para mantener el foco.</p>
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
                  <p className="text-sm text-gray-500">Primero selecciona KPIÔÇÖs en la pantalla anterior.</p>
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
                              title="M+ís info"
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
                          <Label>Liberaci+¦n</Label>
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
                <SectionTitle icon={CheckCircle2} title="5) Resumen y confirmaci+¦n" subtitle="Todo listo para compartir y repetir en otro servicio" />
              </CardHeader>
              <CardContent>
                <div className="grid md:[grid-template-columns:3fr_4fr] gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contexto</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Servicio / producto:</span> {service || <i className="text-gray-400">ÔÇö</i>}</p>
                      <p><span className="font-medium">Objetivo de negocio:</span> <br /> {bizGoal || <i className="text-gray-400">ÔÇö</i>}</p>
                      <p><span className="font-medium">Objetivo de usuario:</span> <br /> {userGoal || <i className="text-gray-400">ÔÇö</i>}</p>
                      {notes && <p className="text-gray-500">{notes}</p>}
                    </div>
                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-2">Tareas clave</h4>
                    <ul className="list-disc ml-5 text-sm space-y-1">
                      {tasks.filter(Boolean).map((t, i) => (<li key={i}>{t}</li>))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">KPIÔÇÖs seleccionados</h4>
                    <div className="space-y-3">
                      {Object.keys(selected).length === 0 && <p className="text-sm text-gray-500">No hay KPIÔÇÖs seleccionados.</p>}
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
                                      title="M+ís info"
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
                              <div><span className="text-gray-500">Baseline:</span> {meta.baseline || <i>ÔÇö</i>}</div>
                              <div><span className="text-gray-500">Meta:</span> {meta.target || <i>ÔÇö</i>}</div>
                              <div><span className="text-gray-500">Liberaci+¦n:</span> {meta.timeframe || <i>ÔÇö</i>}</div>
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
          <span className="text-xs text-gray-400">{Object.keys(selected).length} KPIÔÇÖs</span>
          <Button onClick={() => (step === 4 ? finalize() : setStep(s => Math.min(4, s + 1)))} className="gap-2">
            {step === 4 ? 'Finalizar' : 'Siguiente'} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
   {/* Toast flotante dentro del root (no rompe el nodo ra+¡z) */}
      {info.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => { setInfo({ open: false, url: '', title: '', id: '' }); }}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 border-b">
              <div className="font-semibold text-sm">M+ís info: {modalDetail?.title || info.title}</div>
              <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-full border text-sm" onClick={() => { setInfo({ open: false, url: '', title: '', id: '' }); }}>+ù</button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              {modalDetail ? (
                <div className="p-4 overflow-y-auto h-full">
                  {modalDetail?.subtitle && <div className="text-xs text-gray-500 mb-2">{modalDetail.subtitle}</div>}
                  <div className="prose max-w-none text-sm" dangerouslySetInnerHTML={{ __html: modalDetail.html }} />
                </div>
              ) : info.url ? (
                <iframe src={info.url} className="w-full h-full rounded-b-xl" title="M+ís info" />
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
