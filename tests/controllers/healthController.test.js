'use strict';

const { getHealth } = require('../../src/controllers/healthController');

describe('healthController.getHealth (unit)', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json:   jest.fn().mockReturnThis()
    };
  });

  it('llama a res.status(200)', () => {
    getHealth(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('llama a res.json con status:"ok"', () => {
    getHealth(req, res);
    const payload = res.json.mock.calls[0][0];
    expect(payload.status).toBe('ok');
  });

  it('llama a res.json con timestamp numérico cercano a Date.now()', () => {
    const before = Date.now();
    getHealth(req, res);
    const after   = Date.now();
    const payload = res.json.mock.calls[0][0];
    expect(payload.timestamp).toBeGreaterThanOrEqual(before);
    expect(payload.timestamp).toBeLessThanOrEqual(after);
  });
});
