import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import Fade from "./components/Fade";
import StepAlignment from "./steps/StepAlignment";
import StepSelectKPIs from "./steps/StepSelectKPIs";
import StepTargets from "./steps/StepTargets";
import StepSummary from "./steps/StepSummary";
import KPI_DETAILS from "./kpi-details";
import { createRun, saveRun, loadRun, RUN_SCHEMA_VERSION } from "./runs-storage";
import {
  KPI_CATALOG_WITH_URL,
  CATEGORIES,
  LAYERS,
  LAYER_LABELS,
  UNIDAD_LABELS,
  CADENCIA_LABELS,
} from "./kpi-catalog";
import LayerBadge from "./components/LayerBadge";

// Pasos del flujo: alineación+tareas, selección, metas, resumen
const STEP_COUNT = 4;
const LAST_STEP = STEP_COUNT - 1;

// Los runs guardados antes de fusionar objetivos y tareas usaban 5 pasos:
// el viejo paso 1 (tareas) ahora vive dentro del 0, así que todo se corre uno.
const migrateStep = (saved) => {
  const step = saved.step ?? 0;
  const migrated = saved.v >= 2 ? step : Math.max(0, step - 1);
  return Math.min(migrated, LAST_STEP);
};

// Helpers puros
const computeQuarter = (d = new Date()) => {
  const q = Math.floor(d.getMonth() / 3) + 1;
  return `Q${q}`;
};

const filterKPIsHelper = (catalog, cats, layers, search) => {
  const s = (search || "").toLowerCase();
  return catalog.filter(
    (k) =>
      cats.includes(k.cat) &&
      layers.includes(k.capa) &&
      (k.title.toLowerCase().includes(s) ||
        k.desc.toLowerCase().includes(s) ||
        k.how.toLowerCase().includes(s))
  );
};

const countByLayer = (kpis) => {
  const counts = {};
  kpis.forEach((k) => {
    if (!k.capa) return;
    counts[k.capa] = (counts[k.capa] || 0) + 1;
  });
  return counts;
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
  const [filterLayers, setFilterLayers] = React.useState(LAYERS);
  const [selected, setSelected] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [info, setInfo] = React.useState({ open: false, url: "", title: "", id: "" });
  const [successOpen, setSuccessOpen] = React.useState(false);

  const progress = ((step + 1) / STEP_COUNT) * 100;
  const filteredKPIs = filterKPIsHelper(KPI_CATALOG_WITH_URL, filterCats, filterLayers, search);
  const selectedLayerCounts = React.useMemo(
    () => countByLayer(Object.keys(selected).map((id) => KPI_CATALOG_WITH_URL.find((k) => k.id === id)).filter(Boolean)),
    [selected]
  );

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
  const sePisaConNames = React.useMemo(() => {
    if (!kpiForModal?.sePisaCon?.length) return [];
    return kpiForModal.sePisaCon
      .map((id) => KPI_CATALOG_WITH_URL.find((k) => k.id === id)?.title)
      .filter(Boolean);
  }, [kpiForModal]);
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

  const toggleLayer = (layer) => {
    setFilterLayers((prev) =>
      prev.includes(layer) ? prev.filter((l) => l !== layer) : [...prev, layer]
    );
  };

  const selectAllLayers = () => setFilterLayers(LAYERS);

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
    setFilterLayers(LAYERS);
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

    const API_BASE = `${import.meta.env.BASE_URL}api`;
    const TOKEN = import.meta.env.VITE_API_TOKEN;

    const onSuccess = () => {
      try {
        const snap = snapshot();
        saveRun(runId, { ...snap, status: 'sent' }, { title: service || '(sin nombre)' });
      } catch {}
      setSuccessOpen(true);
    };

    try {
      const headers = { 'Content-Type': 'application/json' };
      if (TOKEN) headers['Authorization'] = `Bearer ${TOKEN}`;
      const res = await fetch(`${API_BASE}/runs`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      onSuccess();
    } catch (e) {
      setToast("Error al enviar. Revisa la consola.");
      setTimeout(() => setToast(null), 4000);
    }
  };

  const Stepper = () => (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: STEP_COUNT }, (_, i) => i).map((i) => (
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
    v: RUN_SCHEMA_VERSION,
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
        setStep(migrateStep(saved));
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
        <h1 className="text-2xl font-bold tracking-tight">KPI Framework</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>Pantalla {step + 1} de {STEP_COUNT}</span>
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
            <StepAlignment
              service={service}
              setService={setService}
              bizGoal={bizGoal}
              setBizGoal={setBizGoal}
              userGoal={userGoal}
              setUserGoal={setUserGoal}
              notes={notes}
              setNotes={setNotes}
              tasks={tasks}
              addTask={addTask}
              removeTask={removeTask}
              updateTask={updateTask}
            />
          </Fade>
        )}

        {step === 1 && (
          <Fade key="s2">
            <StepSelectKPIs
              search={search}
              setSearch={setSearch}
              categories={CATEGORIES}
              filterCats={filterCats}
              toggleCat={toggleCat}
              layers={LAYERS}
              filterLayers={filterLayers}
              toggleLayer={toggleLayer}
              selectAllLayers={selectAllLayers}
              filteredKPIs={filteredKPIs}
              selected={selected}
              toggleKPI={toggleKPI}
              setInfo={setInfo}
              resolveKpiUrl={resolveKpiUrl}
            />
          </Fade>
        )}

        {step === 2 && (
          <Fade key="s3">
            <StepTargets
              selected={selected}
              kpiCatalogWithUrl={KPI_CATALOG_WITH_URL}
              updateSelected={updateSelected}
              setInfo={setInfo}
              resolveKpiUrl={resolveKpiUrl}
            />
          </Fade>
        )}

        {step === 3 && (
          <Fade key="s4">
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
          <span className="text-xs text-gray-400">
            {Object.keys(selected).length} KPI{Object.keys(selected).length === 1 ? "" : "s"}
            {LAYERS.filter((l) => selectedLayerCounts[l]).length > 0 && (
              <> · {LAYERS.filter((l) => selectedLayerCounts[l])
                .map((l) => `${selectedLayerCounts[l]} ${LAYER_LABELS[l].toLowerCase()}`)
                .join(" · ")}</>
            )}
          </span>
          <Button
            onClick={() =>
              step === LAST_STEP ? finalize() : setStep((s) => Math.min(LAST_STEP, s + 1))
            }
            className="gap-2"
          >
            {step === LAST_STEP ? "Finalizar" : "Siguiente"} <ArrowRight className="h-4 w-4" />
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
            <div className="flex-1 min-h-0 flex flex-col">
              {kpiForModal && (
                <div className="p-4 border-b space-y-2 text-sm shrink-0 overflow-y-auto max-h-[50%]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <LayerBadge capa={kpiForModal.capa} />
                    <span className="inline-flex items-center text-xs border rounded-full px-2 py-0.5 bg-[#e7e7e7] text-slate-700">
                      {kpiForModal.cat}
                    </span>
                  </div>
                  <p className="text-gray-700">{kpiForModal.desc}</p>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-600">Cómo se mide: </span>
                    {kpiForModal.how}
                  </p>
                  {(kpiForModal.unidad || kpiForModal.poblacion || kpiForModal.ventana || kpiForModal.cadencia) && (
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-gray-600 pt-1">
                      {kpiForModal.unidad && (
                        <div><span className="font-medium text-gray-500">Unidad:</span> {UNIDAD_LABELS[kpiForModal.unidad] || kpiForModal.unidad}</div>
                      )}
                      {kpiForModal.poblacion && (
                        <div><span className="font-medium text-gray-500">Población:</span> {kpiForModal.poblacion}</div>
                      )}
                      {kpiForModal.ventana && (
                        <div><span className="font-medium text-gray-500">Ventana:</span> {kpiForModal.ventana}</div>
                      )}
                      {kpiForModal.cadencia && (
                        <div><span className="font-medium text-gray-500">Cadencia:</span> {CADENCIA_LABELS[kpiForModal.cadencia] || kpiForModal.cadencia}</div>
                      )}
                    </div>
                  )}
                  {kpiForModal.decision && (
                    <p className="pt-1">
                      <span className="font-medium text-gray-600">Qué decisión tomo si sube o baja: </span>
                      {kpiForModal.decision}
                    </p>
                  )}
                  {sePisaConNames.length > 0 && (
                    <p className="text-amber-700 bg-amber-50 border border-amber-100 rounded px-2 py-1.5">
                      Se solapa con: {sePisaConNames.join(", ")}
                    </p>
                  )}
                  {kpiForModal.dobleLectura && (
                    <p className="text-indigo-700 bg-indigo-50 border border-indigo-100 rounded px-2 py-1.5">
                      {kpiForModal.dobleLectura}
                    </p>
                  )}
                </div>
              )}
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
                ) : !kpiForModal ? (
                  <div className="p-4 text-sm text-gray-500">
                    No hay URL disponible para este KPI.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}

      {successOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSuccessOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Éxito en el seguimiento de tus KPI</h3>
              <p className="text-sm text-gray-600">Tu configuración quedó guardada correctamente.</p>
              <div className="flex gap-2 mt-2">
                <Button
                  className="gap-2"
                  onClick={() => {
                    setSuccessOpen(false);
                    startNewRun();
                  }}
                >
                  Crear nuevo
                </Button>
                <Button variant="outline" onClick={() => setSuccessOpen(false)}>Cerrar</Button>
              </div>
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
