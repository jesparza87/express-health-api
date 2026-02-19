# express-health-api

API REST minimalista con **Node.js + Express** que expone endpoints de salud y ping, cubiertos con tests **Jest + Supertest**.

## 🚀 Endpoints

| Método | Ruta      | Respuesta                                      |
|--------|-----------|------------------------------------------------|
| GET    | `/health` | `{ "status": "ok", "timestamp": 1718000000000 }` |
| GET    | `/ping`   | `{ "pong": true }`                              |

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/express-health-api.git
cd express-health-api
npm install
```

## ▶️ Ejecución

```bash
# Producción
npm start

# Desarrollo (hot-reload)
npm run dev
```

El servidor arranca en `http://localhost:3000` por defecto.

## 🧪 Tests

```bash
# Todos los tests con cobertura
npm test

# Modo watch
npm run test:watch
```

### Cobertura mínima configurada: **80 %** en branches, functions, lines y statements.

### Suite de tests incluida

| Archivo | Tipo | Casos |
|---|---|---|
| `tests/health.test.js` | Integración | 6 |
| `tests/ping.test.js` | Integración | 6 |
| `tests/notFound.test.js` | Integración | 3 |
| `tests/controllers/healthController.test.js` | Unitario | 3 |
| `tests/controllers/pingController.test.js` | Unitario | 3 |

## 🗂️ Estructura

```
express-health-api/
├── src/
│   ├── app.js                  # Express app (sin listen)
│   ├── index.js                # Punto de entrada + graceful shutdown
│   ├── routes/
│   │   └── index.js            # Definición de rutas
│   └── controllers/
│       ├── healthController.js
│       └── pingController.js
├── tests/
│   ├── health.test.js
│   ├── ping.test.js
│   ├── notFound.test.js
│   └── controllers/
│       ├── healthController.test.js
│       └── pingController.test.js
├── .env.example
├── .gitignore
└── package.json
```

## ⚙️ Variables de entorno

| Variable | Default    | Descripción          |
|----------|------------|----------------------|
| `PORT`   | `3000`     | Puerto del servidor  |
| `HOST`   | `0.0.0.0`  | Host de escucha      |

Copia `.env.example` a `.env` y ajusta los valores.

## 📄 Licencia

MIT
