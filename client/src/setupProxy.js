const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:5000' }));
  app.use(createProxyMiddleware('/api/hello', { target: 'http://localhost:3000' }));
  app.use(createProxyMiddleware('/api/hello1', { target: 'http://localhost:3000' }));
  app.use(createProxyMiddleware('/api/hello2', { target: 'http://localhost:3000' }));
  app.use(createProxyMiddleware('/api/hello3', { target: 'http://localhost:3000' }));
};