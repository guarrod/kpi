// Simple AI Summary Server
// - POST /ai-summary { id, title, url }
// - Returns text/html intended to be shown in a modal
//
// Usage:
//   node ai_summary_server.js
//   export VITE_AI_SUMMARY_ENDPOINT=http://localhost:8787/ai-summary
//
// Optional: Use Gemini API via REST if GOOGLE_API_KEY and GEMINI_MODEL are set.
//   export GOOGLE_API_KEY=... (Google AI Studio key)
//   export GEMINI_MODEL=gemini-1.5-flash
// Docs: https://ai.google.dev/gemini-api/docs

const http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT ? Number(process.env.PORT) : 8787;
const ORIGIN = process.env.CORS_ORIGIN || '*';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': headers['Content-Type'] || 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    ...headers,
  });
  res.end(body);
}

async function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function fallbackHtml({ id, title, url }) {
  const safeTitle = String(title || id || 'KPI');
  const urlLink = url ? `<p><a href="${url}" target="_blank" rel="noreferrer">Ver documento relacionado</a></p>` : '';
  return `
  <article>
    <h2 style="margin:0 0 8px 0;">${safeTitle}</h2>
    <p style="color:#555">Resumen generado (fallback local). Configura GOOGLE_API_KEY para usar Gemini.</p>
    <h3>¿Qué es?</h3>
    <p>Indicador clave de producto/servicio. Úsalo para evaluar el impacto en objetivos del negocio y la experiencia.</p>
    <h3>Cómo se interpreta</h3>
    <ul>
      <li>Define línea base, meta y periodo (Qx).</li>
      <li>Monitorea su evolución en cohortes relevantes.</li>
      <li>Combina con métricas de eficiencia, satisfacción y salud técnica.</li>
    </ul>
    <h3>Buenas prácticas</h3>
    <ul>
      <li>Reglas de medición claras y consistentes.</li>
      <li>Dashboards con p50/p90, segmentos y tendencia.</li>
      <li>Alertas cuando cruza umbrales críticos.</li>
    </ul>
    ${urlLink}
  </article>`;
}

async function geminiHtml({ id, title, url }) {
  if (!GOOGLE_API_KEY) return fallbackHtml({ id, title, url });
  const prompt = `Genera un resumen conciso en HTML (etiquetas h2/h3/p/ul/li) para el KPI "${title}".
Incluye: definición, interpretación, fórmulas típicas, ejemplos de objetivos/baselines, pitfalls y buenas prácticas.
Si hay URL de referencia, sugiere consultarla: ${url || 'N/A'}.`;
  try {
    // Gemini REST API: generateContent
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GOOGLE_API_KEY)}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      safetySettings: [],
      generationConfig: { temperature: 0.6, topP: 0.9, maxOutputTokens: 800 },
    };

    // Rely on Node 18+ global fetch; otherwise will throw and fallback
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) throw new Error(`Gemini ${resp.status}`);
    const json = await resp.json();
    const text = json?.candidates?.[0]?.content?.parts?.map(p => p.text).join('\n') || '';
    const html = text && /<\w+/.test(text) ? text : `<article><h2>${title}</h2><p>${text || 'Sin contenido'}</p></article>`;
    return html;
  } catch (e) {
    return fallbackHtml({ id, title, url }) + `<p style="color:#b00">[Fallback: ${e.message}]</p>`;
  }
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  const u = new URL(url, `http://${req.headers.host}`);

  if (method === 'OPTIONS') {
    return send(res, 204, '', { 'Content-Type': 'text/plain' });
  }

  if (method === 'POST' && u.pathname === '/ai-summary') {
    try {
      const body = await readJson(req);
      const html = await geminiHtml(body || {});
      return send(res, 200, html);
    } catch (e) {
      return send(res, 400, `<p>Error: ${e.message}</p>`);
    }
  }

  if (u.pathname === '/' || u.pathname === '/health') {
    return send(res, 200, 'ok', { 'Content-Type': 'text/plain' });
  }

  return send(res, 404, '<p>Not found</p>');
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`AI summary server listening on http://localhost:${PORT}`);
});

