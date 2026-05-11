import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, RefreshCw, ChevronDown, ChevronUp,
  Clock, Target, AlertCircle, BarChart3, Trash2, X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TOKEN = import.meta.env.VITE_API_TOKEN;
const API_BASE = `${import.meta.env.BASE_URL}api`;

async function fetchRuns() {
  const headers = {};
  if (TOKEN) headers["Authorization"] = `Bearer ${TOKEN}`;
  const res = await fetch(`${API_BASE}/runs`, { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function deleteRun(id) {
  const headers = {};
  if (TOKEN) headers["Authorization"] = `Bearer ${TOKEN}`;
  const res = await fetch(`${API_BASE}/runs/${id}`, { method: "DELETE", headers });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

function formatDate(iso) {
  if (!iso) return "—";
  return new Intl.DateTimeFormat("es", {
    day: "numeric", month: "short", year: "numeric",
  }).format(new Date(iso));
}

function isThisQuarter(iso) {
  if (!iso) return false;
  const d = new Date(iso);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    Math.floor(d.getMonth() / 3) === Math.floor(now.getMonth() / 3)
  );
}

const CAT_STYLES = {
  "Uso & Adopción":            "bg-blue-50   text-blue-700   border-blue-100",
  "Eficiencia & Fricción":     "bg-amber-50  text-amber-700  border-amber-100",
  "Satisfacción & Experiencia":"bg-violet-50 text-violet-700 border-violet-100",
  "Conversión & Negocio":      "bg-rose-50   text-rose-700   border-rose-100",
  "Autoservicio & Costos":     "bg-green-50  text-green-700  border-green-100",
  "Salud técnica":             "bg-sky-50    text-sky-700    border-sky-100",
};

function catStyle(cat) {
  return CAT_STYLES[cat] ?? "bg-gray-50 text-gray-600 border-gray-100";
}

function uniqueCats(kpis = []) {
  return [...new Set(kpis.map((k) => k.cat).filter(Boolean))];
}

// ─── Delete confirmation modal ────────────────────────────────────────────────

const CONFIRM_WORD = "eliminar";

function DeleteModal({ runName, onConfirm, onCancel, busy }) {
  const [value, setValue] = React.useState("");
  const ready = value.trim().toLowerCase() === CONFIRM_WORD;

  function handleKey(e) {
    if (e.key === "Enter" && ready) onConfirm();
    if (e.key === "Escape") onCancel();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 text-red-500">
            <Trash2 className="w-5 h-5 shrink-0" />
            <h2 className="font-semibold text-gray-900">Eliminar run</h2>
          </div>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-1">
          Vas a eliminar <span className="font-medium text-gray-900">"{runName}"</span>.
          Esta acción no se puede deshacer.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Escribe <span className="font-mono font-semibold text-gray-700">{CONFIRM_WORD}</span> para confirmar.
        </p>

        <Input
          autoFocus
          placeholder={CONFIRM_WORD}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          className={`mb-4 rounded-xl transition-colors ${
            value && !ready ? "border-red-300 focus-visible:ring-red-200" : ""
          }`}
        />

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 rounded-xl" onClick={onCancel} disabled={busy}>
            Cancelar
          </Button>
          <Button
            className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white"
            disabled={!ready || busy}
            onClick={onConfirm}
          >
            {busy ? "Eliminando…" : "Eliminar"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Run card ─────────────────────────────────────────────────────────────────

function RunCard({ run, onDeleted }) {
  const [open, setOpen] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const cats = uniqueCats(run.kpis);
  const kpiCount = run.kpis?.length ?? 0;

  async function handleDelete() {
    setDeleting(true);
    try {
      await deleteRun(run.id);
      onDeleted(run.id);
    } catch {
      setDeleting(false);
      setShowDeleteModal(false);
    }
  }

  return (
    <>
      <Card className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
        <CardContent className="p-0">

          {/* ── Main info ── */}
          <div className="p-4 pb-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-gray-900 leading-snug">
                {run.servicio || <span className="text-gray-400 italic">Sin nombre</span>}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">
                  {formatDate(run.timestamp ?? run.created_at)}
                </span>
                {TOKEN && (
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    title="Eliminar run"
                    className="text-gray-300 hover:text-red-400 transition-colors mt-0.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {run.objetivo_negocio && (
              <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                {run.objetivo_negocio}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-magno-50 text-magno-500 border border-magno-100 rounded-full px-2.5 py-0.5">
                <Target className="w-3 h-3" />
                {kpiCount} KPI{kpiCount !== 1 ? "s" : ""}
              </span>
              {cats.map((cat) => (
                <span
                  key={cat}
                  className={`text-xs border rounded-full px-2.5 py-0.5 ${catStyle(cat)}`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* ── Toggle button ── */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-gray-400 hover:text-magno-500 border-t border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {open ? (
              <><ChevronUp className="w-3.5 h-3.5" /> Cerrar</>
            ) : (
              <><ChevronDown className="w-3.5 h-3.5" /> Ver detalle</>
            )}
          </button>

          {/* ── Expanded detail ── */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-100 bg-gray-50/70 p-4 space-y-4">

                  {/* Goals + tasks */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {run.objetivo_usuario && (
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Objetivo de usuario
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">{run.objetivo_usuario}</p>
                      </div>
                    )}
                    {run.tareas_clave?.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Tareas clave
                        </p>
                        <ul className="text-sm text-gray-700 space-y-0.5">
                          {run.tareas_clave.map((t, i) => (
                            <li key={i} className="flex gap-1.5">
                              <span className="text-magno-400 shrink-0">·</span>{t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* KPI list */}
                  {run.kpis?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                        KPIs seleccionados
                      </p>
                      <div className="space-y-2">
                        {run.kpis.map((kpi) => (
                          <div
                            key={kpi.id}
                            className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 flex items-center gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">{kpi.title}</p>
                              <p className="text-xs text-gray-400 truncate">{kpi.cat}</p>
                            </div>
                            <div className="flex gap-4 shrink-0">
                              {kpi.baseline && (
                                <div className="text-center">
                                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Base</p>
                                  <p className="text-sm font-semibold text-gray-600">{kpi.baseline}</p>
                                </div>
                              )}
                              {kpi.target && (
                                <div className="text-center">
                                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Meta</p>
                                  <p className="text-sm font-semibold text-magno-500">{kpi.target}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </CardContent>
      </Card>

      <AnimatePresence>
        {showDeleteModal && (
          <DeleteModal
            runName={run.servicio || "Sin nombre"}
            busy={deleting}
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
      <p className="text-2xl font-bold text-magno-500">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RunsHistory() {
  const [runs, setRuns] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [search, setSearch] = React.useState("");

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRuns();
      setRuns(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => { load(); }, [load]);

  function handleDeleted(id) {
    setRuns((prev) => prev.filter((r) => r.id !== id));
  }

  const filtered = React.useMemo(() => {
    if (!search.trim()) return runs;
    const s = search.toLowerCase();
    return runs.filter(
      (r) =>
        r.servicio?.toLowerCase().includes(s) ||
        r.objetivo_negocio?.toLowerCase().includes(s) ||
        r.kpis?.some((k) => k.title?.toLowerCase().includes(s))
    );
  }, [runs, search]);

  const totalKPIs = runs.reduce((acc, r) => acc + (r.kpis?.length ?? 0), 0);
  const thisQuarter = runs.filter((r) => isThisQuarter(r.timestamp ?? r.created_at)).length;

  return (
    <div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard label="Servicios" value={runs.length} />
        <StatCard label="KPIs totales" value={totalKPIs} />
        <StatCard label={`Este Q${Math.floor(new Date().getMonth() / 3) + 1}`} value={thisQuarter} />
      </div>

      {/* Search + refresh */}
      <div className="flex gap-2 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <Input
            className="pl-9 rounded-xl"
            placeholder="Buscar por servicio, objetivo o KPI…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon" className="rounded-xl shrink-0" onClick={load} disabled={loading}>
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="flex flex-col items-center py-20 gap-3 text-center">
          <AlertCircle className="w-10 h-10 text-red-300" />
          <p className="text-gray-500 font-medium">No se pudo cargar el historial</p>
          <p className="text-sm text-gray-400">{error}</p>
          <Button variant="outline" className="mt-1" onClick={load}>Reintentar</Button>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && filtered.length === 0 && (
        <div className="flex flex-col items-center py-20 gap-2 text-center">
          {search ? (
            <>
              <BarChart3 className="w-10 h-10 text-gray-200" />
              <p className="text-gray-500 font-medium">Sin resultados para "{search}"</p>
              <p className="text-sm text-gray-400">Prueba con otro término</p>
            </>
          ) : (
            <>
              <Clock className="w-10 h-10 text-gray-200" />
              <p className="text-gray-500 font-medium">Aún no hay análisis guardados</p>
              <p className="text-sm text-gray-400">Completa el wizard y guarda tu primer run</p>
            </>
          )}
        </div>
      )}

      {/* Cards */}
      {!loading && !error && filtered.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((run) => (
            <RunCard key={run.id} run={run} onDeleted={handleDeleted} />
          ))}
        </div>
      )}

    </div>
  );
}
