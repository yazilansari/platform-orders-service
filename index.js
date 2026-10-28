const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {
      'content-type': 'application/json',
    });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, {
    'content-type': 'application/json',
  });

  res.end(JSON.stringify({
    service: 'platform-orders-service',
    message: 'Hello from your Backstage IDP',
  }));
});

server.listen(process.env.PORT || 3000, '0.0.0.0');
