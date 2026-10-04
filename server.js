const http = require('http');
const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  // 410 = "Gone" (permanently removed). Change to 404 if you prefer.
  res.writeHead(410, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>410 - This site no longer exists</h1>');
}).listen(port, () => {
  console.log('Listening on port ' + port);
});
