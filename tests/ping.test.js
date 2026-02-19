'use strict';

const request = require('supertest');
const app     = require('../src/app');

describe('GET /ping', () => {
  // ── Status code ────────────────────────────────────────────
  it('debe responder con HTTP 200', async () => {
    const res = await request(app).get('/ping');
    expect(res.status).toBe(200);
  });

  // ── Content-Type ───────────────────────────────────────────
  it('debe responder con Content-Type application/json', async () => {
    const res = await request(app).get('/ping');
    expect(res.headers['content-type']).toMatch(/application\/json/);
  });

  // ── Body: campo pong ───────────────────────────────────────
  it('debe contener pong:true', async () => {
    const res = await request(app).get('/ping');
    expect(res.body).toHaveProperty('pong', true);
  });

  // ── Body: pong es booleano ─────────────────────────────────
  it('el campo pong debe ser de tipo booleano', async () => {
    const res = await request(app).get('/ping');
    expect(typeof res.body.pong).toBe('boolean');
  });

  // ── Body: estructura exacta ────────────────────────────────
  it('debe devolver únicamente el campo pong', async () => {
    const res  = await request(app).get('/ping');
    const keys = Object.keys(res.body);
    expect(keys).toHaveLength(1);
    expect(keys[0]).toBe('pong');
  });

  // ── Múltiples llamadas son consistentes ───────────────────
  it('debe ser idempotente (varias llamadas, mismo resultado)', async () => {
    const [r1, r2, r3] = await Promise.all([
      request(app).get('/ping'),
      request(app).get('/ping'),
      request(app).get('/ping')
    ]);
    expect(r1.body).toEqual({ pong: true });
    expect(r2.body).toEqual({ pong: true });
    expect(r3.body).toEqual({ pong: true });
  });
});
