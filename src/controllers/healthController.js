'use strict';

/**
 * GET /health
 * @param {import('express').Request}  _req
 * @param {import('express').Response}  res
 */
const getHealth = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: Date.now()
  });
};

module.exports = { getHealth };
