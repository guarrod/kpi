# KPI Wizard

Dashboard para definir y llevar el historial de KPIs del equipo. Frontend en React + Vite + Tailwind, backend propio en Node/Express con SQLite (reemplaza un flujo anterior basado en Google Apps Script).

## Stack

- **Frontend:** React 18, Vite, Tailwind, Framer Motion, Lucide (`src/`)
- **Backend:** Express + better-sqlite3 (`server/`)
- **Auth:** token bearer opcional — si `API_TOKEN` está vacío en el backend, no se exige auth

## Requisitos

- Node.js 18+
- npm

## Cómo ejecutar en local

El proyecto tiene dos procesos independientes: el backend (API + SQLite) y el frontend (Vite). Hay que levantar ambos.

### 1. Backend

```bash
cd server
npm install          # solo la primera vez
cp .env.example .env # solo la primera vez
npm run dev           # node --watch index.js
```

Levanta en `http://localhost:3001`. Verificar con:

```bash
curl http://localhost:3001/api/health
# {"ok":true}
```

**Importante sobre `.env` en local:** el `.env.example` trae `API_TOKEN=change-me-before-deploy`, pensado para producción. Si se deja ese valor, el backend exige el header `Authorization: Bearer <token>` en **todas** las rutas de `/api/runs`, y el frontend en modo dev no lo manda (a menos que definas `VITE_API_TOKEN`), así que todo devuelve `401`. Para desarrollo local, dejar `API_TOKEN` **vacío**:

```env
PORT=3001
API_TOKEN=
CORS_ORIGIN=*
DB_PATH=./data/kpi.db
```

### 2. Frontend

En otra terminal, desde la raíz del proyecto:

```bash
npm install   # solo la primera vez
npm run dev
```

Levanta en `http://localhost:5173`. El proxy de Vite (`vite.config.js`) redirige `/api` → `http://localhost:3001`, así que no hace falta configurar CORS ni URLs a mano en el frontend.

### Resumen rápido (con ambos ya instalados)

```bash
# Terminal 1
cd server && npm run dev

# Terminal 2 (raíz del proyecto)
npm run dev
```

Abrir `http://localhost:5173`.

## Estructura

```
├── src/
│   ├── features/kpi-wizard/     # flujo de 5 pasos para crear un KPI
│   └── features/runs-history/   # historial de runs (listar, buscar, eliminar)
├── server/
│   ├── index.js                 # entrypoint Express
│   ├── db.js                    # conexión SQLite (better-sqlite3)
│   ├── middleware/auth.js       # auth por bearer token (opcional)
│   └── routes/runs.js           # CRUD de runs
├── vite.config.js               # proxy /api -> localhost:3001
└── ecosystem.config.cjs         # config de PM2 para producción
```

## API

| Método | Ruta              | Descripción                          |
|--------|-------------------|---------------------------------------|
| GET    | `/api/health`     | health check                          |
| GET    | `/api/runs`       | lista todos los runs                  |
| GET    | `/api/runs/:id`   | obtiene un run por ID                 |
| POST   | `/api/runs`       | crea o actualiza un run               |
| DELETE | `/api/runs/:id`   | elimina un run (requiere token si está configurado) |

## Build de producción

```bash
npm run build:prod   # vite build --base=/kpi/
```

## Deploy

Deployado en `guarrod.com/kpi/` vía VPS + PM2 + Nginx. Ver detalles de deploy (rutas del servidor, token de producción, comandos de `pm2`) en la documentación interna del proyecto — no se incluyen aquí por ser un repo público.
