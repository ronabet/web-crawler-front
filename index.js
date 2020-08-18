const express = require('express');
const app = express();
const http = require('http').Server(app);


var port = process.env.PORT || 80;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('access-Control-Allow-Origin', '*');
    next();
});


app.use('/', express.static(__dirname + '/Front/dist/web-crawler-client'));


http.listen(port, function(){
    console.log('listening on *: ' + port);
});
