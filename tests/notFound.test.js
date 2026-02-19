'use strict';

const request = require('supertest');
const app     = require('../src/app');

describe('Rutas no existentes (404)', () => {
  it('GET /ruta-inexistente → 404 con body {error:"Not Found"}', async () => {
    const res = await request(app).get('/ruta-inexistente');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Not Found' });
  });

  it('POST /health → 404 (método no registrado)', async () => {
    const res = await request(app).post('/health');
    expect(res.status).toBe(404);
  });

  it('DELETE /ping → 404 (método no registrado)', async () => {
    const res = await request(app).delete('/ping');
    expect(res.status).toBe(404);
  });
});
