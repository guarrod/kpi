const express = require('express');
const db = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();
router.use(auth);

router.post('/', (req, res) => {
  const payload = req.body;
  if (!payload?.id) return res.status(400).json({ error: 'missing id' });
  const now = new Date().toISOString();
  db.prepare(`
    INSERT INTO runs (id, payload, created_at, updated_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at
  `).run(payload.id, JSON.stringify(payload), now, now);
  res.json({ ok: true });
});

router.get('/', (req, res) => {
  const rows = db.prepare(
    'SELECT payload, created_at, updated_at FROM runs ORDER BY updated_at DESC'
  ).all();
  res.json(rows.map(r => ({ ...JSON.parse(r.payload), created_at: r.created_at, updated_at: r.updated_at })));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT payload FROM runs WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'not found' });
  res.json(JSON.parse(row.payload));
});

router.delete('/:id', (req, res) => {
  const { changes } = db.prepare('DELETE FROM runs WHERE id = ?').run(req.params.id);
  if (!changes) return res.status(404).json({ error: 'not found' });
  res.json({ ok: true });
});

module.exports = router;
