// Runs after the Vite builds: writes a real HTML file for every page,
// plus sitemap.xml, robots.txt and 404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'dist/client');
const template = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/client/index.html is not a fresh template. Run the full "npm run build" again.');
}
const { render, ALL_PATHS } = await import('./dist/server/entry-server.js');
const { SITE } = await import('./src/data/site.js');

const page = (p) => {
  const { html, head } = render(p);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

for (const p of ALL_PATHS) {
  const file = p === '/' ? path.join(out, 'index.html') : path.join(out, p.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(p));
}
fs.writeFileSync(path.join(out, '404.html'), page('/__not-found__'));

const today = new Date().toISOString().slice(0, 10);
const urls = ALL_PATHS.map((p) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n');
fs.writeFileSync(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`Prerendered ${ALL_PATHS.length} pages + 404, sitemap.xml, robots.txt`);
