const http = require('http');
const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  // Allow crawling so Google can see that every page is gone
  if (req.url === '/robots.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('User-agent: *\nAllow: /\n');
    return;
  }

  // Every other URL: 410 Gone (permanently removed)
  res.writeHead(410, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>410 - This site no longer exists</h1>');
}).listen(port, () => {
  console.log('Listening on port ' + port);
});
