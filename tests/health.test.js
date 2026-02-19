'use strict';

const request = require('supertest');
const app     = require('../src/app');

describe('GET /health', () => {
  // ── Status code ────────────────────────────────────────────
  it('debe responder con HTTP 200', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
  });

  // ── Content-Type ───────────────────────────────────────────
  it('debe responder con Content-Type application/json', async () => {
    const res = await request(app).get('/health');
    expect(res.headers['content-type']).toMatch(/application\/json/);
  });

  // ── Body: campo status ─────────────────────────────────────
  it('debe contener status:"ok"', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toHaveProperty('status', 'ok');
  });

  // ── Body: campo timestamp ──────────────────────────────────
  it('debe contener un campo timestamp de tipo número', async () => {
    const before = Date.now();
    const res    = await request(app).get('/health');
    const after  = Date.now();

    expect(res.body).toHaveProperty('timestamp');
    expect(typeof res.body.timestamp).toBe('number');
    expect(res.body.timestamp).toBeGreaterThanOrEqual(before);
    expect(res.body.timestamp).toBeLessThanOrEqual(after);
  });

  // ── Body: estructura exacta ────────────────────────────────
  it('debe devolver únicamente los campos status y timestamp', async () => {
    const res  = await request(app).get('/health');
    const keys = Object.keys(res.body);
    expect(keys).toHaveLength(2);
    expect(keys).toContain('status');
    expect(keys).toContain('timestamp');
  });

  // ── Cabeceras de seguridad ─────────────────────────────────
  it('debe incluir la cabecera X-Content-Type-Options', async () => {
    const res = await request(app).get('/health');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
  });
});
