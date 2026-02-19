'use strict';

const express = require('express');
const router = require('./routes');

const app = express();

// ── Middlewares ──────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cabeceras de seguridad mínimas
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// ── Rutas ────────────────────────────────────────────────────
app.use('/', router);

// ── 404 ─────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// ── Error Handler ────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
