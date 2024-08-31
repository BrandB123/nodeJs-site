const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = req.url
  let status = 200;
  let fileName = "";

  if (q === '/'){
    fileName = 'index.html'
  } else if (q === '/about'){
    fileName = 'about.html'
  } else if (q === '/contact-me'){
    fileName = 'contact-me.html'
  } else {
    fileName = '404.html'
    status = 404
  }
  fs.readFile(fileName, function (err, data) {
    res.writeHead(status, {'Content-Type': 'text/html'});
    res.write(data)
    return res.end();
  });
}).listen(8080);
