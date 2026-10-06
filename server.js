const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 10000;

// Old sitemap, so Google rechecks every old URL and sees the 410
const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');

http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  // Allow crawling so Google can see that every page is gone
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

  // Every other URL: 410 Gone (permanently removed)
  res.writeHead(410, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>410 - This site no longer exists</h1>');
}).listen(port, () => {
  console.log('Listening on port ' + port);
});
