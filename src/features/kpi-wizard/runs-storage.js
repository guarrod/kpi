// Simple localStorage-backed storage for KPI wizard runs
const INDEX_KEY = 'kpi_runs_index';
const RUN_PREFIX = 'kpi_run:';

function safeGetItem(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function readIndex() {
  const raw = safeGetItem(INDEX_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) || []; } catch { return []; }
}

function writeIndex(list) {
  return safeSetItem(INDEX_KEY, JSON.stringify(list || []));
}

export function createRun(meta = {}) {
  const id = (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  ).toLowerCase();
  const now = new Date().toISOString();
  const index = readIndex();
  index.unshift({ id, title: meta.title || '(sin nombre)', status: 'draft', updatedAt: now });
  writeIndex(index);
  // Initialize empty payload
  const payload = { id, step: 0, service: '', bizGoal: '', userGoal: '', notes: '', tasks: ["",""], selected: {}, status: 'draft', updatedAt: now };
  safeSetItem(RUN_PREFIX + id, JSON.stringify(payload));
  return id;
}

export function saveRun(id, payload, meta = {}) {
  if (!id) return { ok: false, error: 'missing id' };
  const now = new Date().toISOString();
  const toSave = { ...payload, id, updatedAt: now };
  const ok = safeSetItem(RUN_PREFIX + id, JSON.stringify(toSave));
  if (!ok) return { ok: false, error: 'localStorage write failed' };

  // update index entry
  const index = readIndex();
  const idx = index.findIndex((x) => x.id === id);
  const entry = { id, title: meta.title || payload?.service || '(sin nombre)', status: payload?.status || 'draft', updatedAt: now };
  if (idx >= 0) index.splice(idx, 1, entry); else index.unshift(entry);
  writeIndex(index);
  return { ok: true };
}

export function loadRun(id) {
  if (!id) return null;
  const raw = safeGetItem(RUN_PREFIX + id);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

