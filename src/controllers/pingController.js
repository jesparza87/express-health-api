'use strict';

/**
 * GET /ping
 * @param {import('express').Request}  _req
 * @param {import('express').Response}  res
 */
const getPing = (_req, res) => {
  res.status(200).json({ pong: true });
};

module.exports = { getPing };
