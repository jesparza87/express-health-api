'use strict';

const { Router } = require('express');
const healthController = require('../controllers/healthController');
const pingController  = require('../controllers/pingController');

const router = Router();

/**
 * GET /health
 * Devuelve el estado del servicio y un timestamp Unix.
 */
router.get('/health', healthController.getHealth);

/**
 * GET /ping
 * Comprobación básica de vida del servidor.
 */
router.get('/ping', pingController.getPing);

module.exports = router;
