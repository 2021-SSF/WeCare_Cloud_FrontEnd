const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(
    '/api/facility/',
    createProxyMiddleware({
      target: 'http://3.134.120.190:8000',
      changeOrigin: true,
    })
  );




}

