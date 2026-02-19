'use strict';

const app  = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.log(`🚀  Server running on http://${HOST}:${PORT}`);
  console.log(`   GET http://localhost:${PORT}/health`);
  console.log(`   GET http://localhost:${PORT}/ping`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received — shutting down gracefully...`);
  server.close(() => {
    console.log('✅  Server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));

module.exports = server; // útil para tests de integración si se necesita
