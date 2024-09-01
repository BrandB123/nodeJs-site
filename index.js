const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const fileName = 'index.html';
  res.sendFile(fileName, {root: (__dirname)})
  console.log('Routed to index.html')
});

app.get('/:file', function (req, res) {
  const fileName = `${req.params.file}.html`;
  res.sendFile(fileName, {root: (__dirname)}, function(err){
    if (err){
      res.sendFile('404.html', {root: (__dirname)});
      console.log('Routed to 404.html')
    } else {
      console.log(`Routed to ${req.params.file}.html`)
    }
  })
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Express app is running - listening on ${PORT}`));
