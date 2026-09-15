// Zero-dependency static server for the Tap Ngai portal SPA (React + Vite build)
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORTAL_DIST = path.join(__dirname, 'portal', 'dist');
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);

  const rel = urlPath.replace(/^\/(portal\/?)?/, '');
  let filePath = path.normalize(path.join(PORTAL_DIST, rel || 'index.html'));

  if (!filePath.startsWith(PORTAL_DIST)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || stat.isDirectory()) {
      // SPA fallback: mọi deep-link (/thon-public/ap-o-dung ...) trả index.html
      filePath = path.join(PORTAL_DIST, 'index.html');
    }
    fs.readFile(filePath, (err2, data) => {
      if (err2) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`  /  -> Tap Ngai portal SPA (React)`);
});
