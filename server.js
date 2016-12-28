var express = require('express');

// Creat our app
var app = express();
const   port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-fowarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));


app.listen(port, function () {
  console.log('Express server is up on port 3000' + port);
});
