const http = require('http');
const url = require('url')
const fs = require('fs');

http.createServer(function (req, res) {
  const q = req.url
  const ex = url.parse(req.url, true)
  let fileName = "";
  console.log(ex)

  if (q === '/'){
    fileName = 'index.html'
    fs.readFile(fileName, function (err, data) {
        const ex = url.parse(req.url, true)
        console.log(ex.pathname)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
      });
  } else if (q === '/about'){
    fileName = 'about.html'
    fs.readFile(fileName, function (err, data) {
        const ex = url.parse(req.url, true)
        console.log(ex.pathname)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
      });
  } else if (q === '/contact-me'){
    fileName = 'contact-me.html'
    fs.readFile(fileName, function (err, data) {
        const ex = url.parse(req.url, true)
        console.log(ex.pathname)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
      });
  } else {
    fileName = '404.html'
    fs.readFile(fileName, function (err, data) {
        const ex = url.parse(req.url, true)
        console.log(ex.pathname)
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    });
  }
}).listen(8080);
