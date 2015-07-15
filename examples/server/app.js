var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/hello/', function (req, res) {
  res.status(200).send(
    '<html>' +
    '<head><script type="application/javascript" src="/public/test.js"></script></head>' +
    '<body>Hello World!</body>' +
    '</html>'
  );
});

app.listen(8080);
console.log('Listening on 8080');
