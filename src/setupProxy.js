const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        console.log('[Proxy] Forwarding:', req.method, req.url, '-> http://localhost:3001' + req.url);
      },
      onError: (err, req, res) => {
        console.error('[Proxy Error]:', err);
      }
    })
  );
};
