// Catálogo de KPIs (KPI Framework v2).
//
// Cada entrada conserva los campos originales (id, cat, title, how, desc) y
// agrega el modelo de responsabilidad (capa/subcapa) y comparabilidad
// (unidad, poblacion, ventana, cadencia, decision, sePisaCon, dobleLectura).
//
// Pendiente conocido: en los 30 KPIs preexistentes (todos los que NO están en
// el bloque "KPIs nuevos v2" de abajo) solo se completó capa/subcapa — la
// spec v2 no trae unidad/poblacion/ventana/cadencia/decision para ellos
// (sección 3 solo da la reclasificación de capa). Quedan en `null` hasta que
// se complete esa ficha en una pasada posterior.

export const LAYERS = ["negocio", "producto", "experiencia", "habilitador"];

const NO_FICHA = {
  unidad: null,
  poblacion: null,
  ventana: null,
  cadencia: null,
  decision: null,
  sePisaCon: [],
  dobleLectura: null,
};

const KPI_CATALOG = [
  // Uso & Adopción
  { id: "adoption", cat: "Uso & Adopción", title: "Tasa de adopción", how: "% de empresas que usan una funcionalidad en X días desde lanzamiento.", desc: "¿Se empieza a usar lo nuevo?", capa: "producto", subcapa: null, ...NO_FICHA },
  { id: "active", cat: "Uso & Adopción", title: "Usuarios activos (DAU/MAU)", how: "Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.", desc: "¿Hay hábito?", capa: "producto", subcapa: null, ...NO_FICHA },
  { id: "activation", cat: "Uso & Adopción", title: "Tasa de activación", how: "% que completan la primera operación clave tras registrarse.", desc: "¿Llegan al momento 'aha'?", capa: "producto", subcapa: null, ...NO_FICHA },
  { id: "featureUsage", cat: "Uso & Adopción", title: "Uso por funcionalidad", how: "% de sesiones con uso de la función (ej. pagos masivos).", desc: "¿Qué tanto se usa cada módulo?", capa: "producto", subcapa: null, ...NO_FICHA },

  // Eficiencia & Fricción
  { id: "timeOnTask", cat: "Eficiencia & Fricción", title: "Tiempo en tarea", how: "Promedio (p50/p90) desde inicio a confirmación.", desc: "¿Qué tan rápido ocurre?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "success", cat: "Eficiencia & Fricción", title: "Tasa de éxito", how: "% de operaciones completadas sin error (sin necesidad de reintentos).", desc: "¿Se logra sin trabas?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "steps", cat: "Eficiencia & Fricción", title: "Pasos por tarea", how: "Promedio de pantallas/clics para completar.", desc: "¿Es compacto?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "abandon", cat: "Eficiencia & Fricción", title: "Tasa de abandono", how: "% que inician y no finalizan el flujo.", desc: "¿Dónde se caen?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "userError", cat: "Eficiencia & Fricción", title: "Errores de usuario/flujo", how: "Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.", desc: "¿Qué rompe la tarea para el cliente?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "latency", cat: "Eficiencia & Fricción", title: "Tiempo de respuesta", how: "ms de latencia en endpoints/pantallas clave.", desc: "¿Carga rápido?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },
  { id: "interruption", cat: "Eficiencia & Fricción", title: "Transacciones interrumpidas", how: "% de operaciones que no concluyen por timeout o caída técnica.", desc: "¿Qué tan confiable es?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },

  // Satisfacción & Experiencia
  { id: "nps", cat: "Satisfacción & Experiencia", title: "NPS", how: "% promotores − % detractores tras usar el módulo.", desc: "¿Nos recomendarían?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "csat", cat: "Satisfacción & Experiencia", title: "CSAT", how: "Promedio de satisfacción 1–5 al finalizar tarea.", desc: "¿Quedaron conformes?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "sus", cat: "Satisfacción & Experiencia", title: "SUS", how: "Escala SUS 0–100 post-uso.", desc: "¿Qué tan usable es?", capa: "experiencia", subcapa: null, ...NO_FICHA },

  // Conversión & Negocio
  { id: "conversion", cat: "Conversión & Negocio", title: "Tasa de conversión", how: "% de usuarios que completan una acción objetivo.", desc: "¿Cuántos completan?", capa: "producto", subcapa: null, ...NO_FICHA },
  { id: "value", cat: "Conversión & Negocio", title: "Valor por usuario", how: "ARPU u otra medida de valor.", desc: "¿Cuánto valor produce?", capa: "negocio", subcapa: null, ...NO_FICHA },
  { id: "cross", cat: "Conversión & Negocio", title: "Cross/Up-sell", how: "% de clientes que adoptan módulos adicionales.", desc: "¿Se expande el uso?", capa: "negocio", subcapa: null, ...NO_FICHA },
  { id: "retention", cat: "Conversión & Negocio", title: "Retención", how: "% de clientes que siguen activos.", desc: "¿Se quedan?", capa: "producto", subcapa: null, ...NO_FICHA },

  // Autoservicio & Costos
  { id: "selfservice", cat: "Autoservicio & Costos", title: "Autoservicio", how: "% de tareas resueltas sin soporte humano.", desc: "¿Cuánto se auto-resuelve?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "digitalVsBranch", cat: "Autoservicio & Costos", title: "Digital vs Sucursal", how: "% de operaciones digitales vs presenciales.", desc: "¿Cuánto migra a digital?", capa: "producto", subcapa: null, ...NO_FICHA },
  { id: "supportReduction", cat: "Autoservicio & Costos", title: "Reducción de soporte", how: "Variación de tickets por 1.000 usuarios.", desc: "¿Baja el soporte?", capa: "negocio", subcapa: null, ...NO_FICHA },

  // Seguridad & Cumplimiento
  { id: "helpUsage", cat: "Seguridad & Cumplimiento", title: "Uso de ayuda", how: "% de sesiones con vistas a ayuda.", desc: "¿Necesitan ayuda?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "failedLogin", cat: "Seguridad & Cumplimiento", title: "Login fallido", how: "Intentos fallidos por usuario.", desc: "¿Problemas de acceso?", capa: "experiencia", subcapa: null, ...NO_FICHA },
  { id: "twoFa", cat: "Seguridad & Cumplimiento", title: "2FA", how: "% de sesiones con 2FA.", desc: "¿Aumenta la seguridad?", capa: "habilitador", subcapa: "seguridad", ...NO_FICHA },
  { id: "kyc", cat: "Seguridad & Cumplimiento", title: "KYC", how: "% de KYC completado.", desc: "¿Cumplimiento?", capa: "habilitador", subcapa: "seguridad", ...NO_FICHA },
  { id: "fraud", cat: "Seguridad & Cumplimiento", title: "Fraude", how: "Intentos/bloqueos por fraude.", desc: "¿Riesgo controlado?", capa: "habilitador", subcapa: "seguridad", ...NO_FICHA },

  // Salud técnica
  { id: "onboarding", cat: "Salud técnica", title: "Onboarding técnico", how: "Tiempo/esfuerzo de alta técnica.", desc: "¿Cuán complejo es?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },
  { id: "uptime", cat: "Salud técnica", title: "Uptime", how: "% de disponibilidad.", desc: "¿Disponibilidad estable?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },
  { id: "errors5xx", cat: "Salud técnica", title: "Errores 5xx", how: "Errores 5xx por 10k req.", desc: "¿Errores del servidor?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },
  { id: "mttr", cat: "Salud técnica", title: "MTTR", how: "Tiempo medio de recuperación.", desc: "¿Qué tan rápido reponemos?", capa: "habilitador", subcapa: "plataforma", ...NO_FICHA },

  // ── KPIs nuevos v2 (ficha completa según spec §4) ──────────────────────

  // Negocio
  {
    id: "transactionVolume", cat: "Conversión & Negocio", title: "Volumen y monto transaccionado",
    desc: "¿Cuánto mueve el producto?",
    how: "Número de operaciones y monto total acumulado en el periodo.",
    capa: "negocio", subcapa: null,
    unidad: "operacion", poblacion: "valor absoluto, sin denominador", ventana: "mes calendario", cadencia: "trimestral",
    decision: "Si el monto crece pero el número de operaciones cae, el producto se concentró en pocos usuarios grandes. Revisar segmentación antes de celebrar.",
    sePisaCon: [], dobleLectura: null,
  },
  {
    id: "feeIncome", cat: "Conversión & Negocio", title: "Ingreso por comisiones",
    desc: "¿Cuánto deja?",
    how: "Comisiones generadas por el módulo en el periodo.",
    capa: "negocio", subcapa: null,
    unidad: "no_aplica", poblacion: "valor absoluto, sin denominador", ventana: "mes calendario", cadencia: "trimestral",
    decision: "Si no crece con el volumen, revisar la estructura de comisiones, no el producto.",
    sePisaCon: [], dobleLectura: null,
  },
  {
    id: "penetration", cat: "Uso & Adopción", title: "Penetración",
    desc: "¿A cuántos les llega?",
    how: "% de la base de clientes que tiene la funcionalidad habilitada.",
    capa: "negocio", subcapa: null,
    unidad: "empresa", poblacion: "total de clientes de Banca Empresas", ventana: "corte mensual", cadencia: "trimestral",
    decision: "Si es baja, el problema no es adopción, es habilitación. No se arregla con diseño.",
    sePisaCon: [], dobleLectura: "Es el denominador de la tasa de adopción. Sin este número, adopción no se puede calcular bien.",
  },
  {
    id: "customerChurn", cat: "Conversión & Negocio", title: "Baja de cliente",
    desc: "¿Se van del banco?",
    how: "% de clientes que cierran la relación comercial en el periodo.",
    capa: "negocio", subcapa: null,
    unidad: "empresa", poblacion: "clientes activos al inicio del periodo", ventana: "trimestre", cadencia: "trimestral",
    decision: "Es una señal de negocio, no de producto. Se escala, no se gestiona desde el squad.",
    sePisaCon: [], dobleLectura: "No confundir con Dormancia. Baja es abandono de la relación con el banco; dormancia es inactividad en una funcionalidad.",
  },

  // Producto
  {
    id: "timeToValue", cat: "Uso & Adopción", title: "Time to value",
    desc: "¿En cuánto llegan al primer valor?",
    how: "Tiempo mediano (p50) entre el alta y la primera operación de valor.",
    capa: "producto", subcapa: null,
    unidad: "empresa", poblacion: "empresas dadas de alta en el periodo", ventana: "30 días desde el alta", cadencia: "mensual",
    decision: "Si sube, revisar onboarding y primeros pasos, no el flujo transaccional.",
    sePisaCon: ["activation"], dobleLectura: null,
  },
  {
    id: "usageFrequency", cat: "Uso & Adopción", title: "Frecuencia de uso",
    desc: "¿Cuánto lo usan los que lo usan?",
    how: "Operaciones por usuario activo en el periodo.",
    capa: "producto", subcapa: null,
    unidad: "usuario", poblacion: "usuarios activos del periodo", ventana: "mes calendario", cadencia: "mensual",
    decision: "Si el promedio sube pero la mediana no, hay pocos usuarios muy intensivos. Segmentar.",
    sePisaCon: [], dobleLectura: null,
  },
  {
    id: "adoptionDepth", cat: "Uso & Adopción", title: "Profundidad de adopción",
    desc: "¿Cuánto del producto usan?",
    how: "Número de módulos distintos usados por empresa en el periodo.",
    capa: "producto", subcapa: null,
    unidad: "empresa", poblacion: "empresas activas del periodo", ventana: "mes calendario", cadencia: "mensual",
    // La spec no trae "Decisión" para este KPI — pendiente de definir.
    decision: null,
    sePisaCon: [], dobleLectura: "Es la versión de comportamiento de Cross/Up-sell, que mira lo mismo desde el dinero.",
  },
  {
    id: "dormancy", cat: "Uso & Adopción", title: "Dormancia",
    desc: "¿Lo dejaron?",
    how: "% de usuarios que estaban activos y no registran uso en una ventana mayor a dos veces la frecuencia natural de la tarea.",
    capa: "producto", subcapa: null,
    unidad: "empresa", poblacion: "empresas activas en el periodo anterior", ventana: "definida por la frecuencia natural del producto", cadencia: "mensual",
    decision: "Identificar el segmento dormido antes de lanzar campaña. Una campaña sin segmento es ruido.",
    sePisaCon: [], dobleLectura: "En banca, \"cuenta dormida\" tiene significado regulatorio. En la herramienta esto es inactividad en la funcionalidad, no estado de cuenta.",
  },
  {
    id: "reactivation", cat: "Uso & Adopción", title: "Reactivación",
    desc: "¿Vuelven?",
    how: "% de usuarios dormidos que vuelven a operar, separando retorno orgánico de retorno inducido por campaña.",
    capa: "producto", subcapa: null,
    unidad: "empresa", poblacion: "empresas clasificadas como dormidas al inicio de la ventana", ventana: "30 días", cadencia: "mensual",
    decision: "Si solo reactiva la campaña y no el producto, el problema de fondo sigue ahí.",
    sePisaCon: [], dobleLectura: null,
  },

  // Experiencia
  {
    id: "retryRate", cat: "Eficiencia & Fricción", title: "Tasa de reintento",
    desc: "¿Tienen que insistir?",
    how: "% de operaciones que el mismo usuario repite tras un fallo, dentro de una ventana corta.",
    capa: "experiencia", subcapa: null,
    unidad: "operacion", poblacion: "operaciones iniciadas en el periodo", ventana: "15 minutos desde el fallo", cadencia: "semanal",
    decision: "Señal barata y fuerte. Si sube, hay un paso que no comunica el error.",
    sePisaCon: [], dobleLectura: null,
  },
  {
    id: "ces", cat: "Satisfacción & Experiencia", title: "CES",
    desc: "¿Cuánto esfuerzo costó?",
    how: "Esfuerzo percibido en escala 1 a 7 al finalizar la tarea.",
    capa: "experiencia", subcapa: null,
    unidad: "sesion", poblacion: "usuarios que completaron la tarea y respondieron", ventana: "al cierre de la tarea", cadencia: "semanal",
    // CSAT mide conformidad, CES mide esfuerzo. Son distintos y en flujos
    // transaccionales CES es más accionable.
    decision: null,
    sePisaCon: ["csat"], dobleLectura: null,
  },
  {
    id: "accessibility", cat: "Satisfacción & Experiencia", title: "Accesibilidad",
    desc: "¿Puede usarlo cualquiera?",
    how: "% de pantallas críticas que cumplen WCAG 2.2 nivel AA.",
    capa: "experiencia", subcapa: null,
    unidad: "no_aplica", poblacion: "pantallas del flujo crítico", ventana: "por release", cadencia: "por_excepcion",
    decision: "Si baja tras un release, es deuda que se paga en el siguiente sprint, no cuando haya tiempo.",
    sePisaCon: [], dobleLectura: null,
  },
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
  transactionVolume: "/kpi/transactionVolume",
  feeIncome: "/kpi/feeIncome",
  penetration: "/kpi/penetration",
  customerChurn: "/kpi/customerChurn",
  timeToValue: "/kpi/timeToValue",
  usageFrequency: "/kpi/usageFrequency",
  adoptionDepth: "/kpi/adoptionDepth",
  dormancy: "/kpi/dormancy",
  reactivation: "/kpi/reactivation",
  retryRate: "/kpi/retryRate",
  accessibility: "/kpi/accessibility",
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

export { KPI_CATALOG, KPI_URLS, KPI_CATALOG_WITH_URL, CATEGORIES };
