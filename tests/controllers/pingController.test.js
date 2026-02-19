'use strict';

const { getPing } = require('../../src/controllers/pingController');

describe('pingController.getPing (unit)', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json:   jest.fn().mockReturnThis()
    };
  });

  it('llama a res.status(200)', () => {
    getPing(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('llama a res.json con {pong:true}', () => {
    getPing(req, res);
    expect(res.json).toHaveBeenCalledWith({ pong: true });
  });

  it('res.json se llama exactamente una vez', () => {
    getPing(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
