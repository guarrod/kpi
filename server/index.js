require('dotenv').config();
const express = require('express');
const cors = require('cors');
const runsRouter = require('./routes/runs');

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/runs', runsRouter);

app.listen(PORT, () => console.log(`kpi-server on :${PORT}`));
