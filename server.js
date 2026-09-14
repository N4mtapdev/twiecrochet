// Tiny zero-dependency static server for Twie Crochet + Tap Ngai portal SPA
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
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

  // ---------- Portal SPA (React + Vite build) ----------
  if (urlPath === '/' || urlPath === '/portal' || urlPath.startsWith('/portal/')) {
    if (urlPath === '/') {
      res.writeHead(302, { Location: '/portal/' });
      return res.end();
    }
    const rel = urlPath.replace(/^\/portal\/?/, '');
    let filePath = path.normalize(path.join(PORTAL_DIST, rel || 'index.html'));
    if (!filePath.startsWith(PORTAL_DIST)) {
      res.writeHead(403);
      return res.end('Forbidden');
    }
    return fs.stat(filePath, (err, stat) => {
      if (err || stat.isDirectory()) {
        // SPA fallback: mọi deep-link (/portal/thon-public/ap-o-dung ...) trả index.html
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
  }

  // ---------- Twie Crochet static site ----------
  let filePath = path.normalize(path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    fs.readFile(filePath, (err2, data) => {
      if (err2) {
        // Friendly 404 for missing assets (e.g. images not yet added)
        if (req.url.startsWith('/assets/')) {
          res.writeHead(404, { 'Content-Type': 'image/svg+xml' });
          return res.end(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#ffe3f1"/><text x="50%" y="50%" font-size="80" text-anchor="middle" dominant-baseline="middle">🧶</text></svg>'
          );
        }
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
  console.log(`  /portal/  -> Tap Ngai portal SPA (React)`);
  console.log(`  /         -> Twie Crochet static site`);
});
