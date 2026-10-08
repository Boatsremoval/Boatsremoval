// Serves the prerendered pages. Every known URL returns 200 with full HTML;
// anything else returns a real 404.
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist/client');
const notFound = fs.readFileSync(path.join(dir, '404.html'), 'utf8');
const app = express();
app.disable('x-powered-by');

// Drop trailing slashes: /about/ -> /about
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const q = req.url.slice(req.path.length);
    return res.redirect(301, req.path.replace(/\/+$/, '') + q);
  }
  next();
});

// Hashed build files can be cached for a long time
app.use('/assets', express.static(path.join(dir, 'assets'), { immutable: true, maxAge: '1y' }));

// /some-page -> dist/client/some-page/index.html
app.use(express.static(dir, { redirect: false, extensions: ['html'], maxAge: '1h' }));
app.use((req, res, next) => {
  const file = path.join(dir, req.path, 'index.html');
  if (file.startsWith(dir) && fs.existsSync(file)) return res.sendFile(file);
  next();
});

app.use((req, res) => res.status(404).type('html').send(notFound));

const port = process.env.PORT || 10000;
app.listen(port, () => console.log('Listening on port ' + port));
