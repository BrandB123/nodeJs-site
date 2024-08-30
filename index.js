http.createServer(function (req, res) {
  const q = req.url
  let fileName = "";

  if (q === '/'){
    fileName = 'index.html'
  } else if (q === '/about'){
    fileName = 'about.html'
  } else if (q === '/contact-us'){
    fileName = 'contact-us.html'
  } else {
    fileName = '404.html'
  }
  
  fs.readFile(fileName, function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data)
    return res.end();
  });
}).listen(8080);
