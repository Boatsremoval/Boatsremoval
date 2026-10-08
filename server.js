const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 10000;

// Old sitemap, so Google rechecks every old URL
const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');

// One neutral page for every URL: no boat content, no links to the new site
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Website no longer active</title>
<meta name="description" content="This website is no longer active.">
<style>
  body { font-family: system-ui, sans-serif; background: #f4f4f4; color: #333;
         display: flex; min-height: 100vh; margin: 0; align-items: center; justify-content: center; }
  main { text-align: center; padding: 24px; }
  h1 { font-size: 1.6rem; margin: 0 0 8px; }
  p  { margin: 0; color: #666; }
</style>
</head>
<body>
<main>
  <h1>This website is no longer active</h1>
  <p>The content that used to be here has been permanently retired.</p>
</main>
</body>
</html>`;

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  console.log(new Date().toISOString(), req.headers.host, url, req.headers['user-agent'] || '-');

  if (url === '/robots.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('User-agent: *\nAllow: /\nSitemap: https://boatsremoval.com/sitemap.xml\n');
    return;
  }

  if (url === '/sitemap.xml') {
    res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
    res.end(sitemap);
    return;
  }

  // Every other URL: the neutral page, status 200 so it can be submitted for indexing
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(port, () => {
  console.log('Listening on port ' + port);
});
