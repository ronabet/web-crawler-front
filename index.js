const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const port = process.env.PORT || 80;

app.use(cors());
app.use('/', express.static(__dirname + '/Front/dist/web-crawler-client'));

http.listen(port, function(){
    console.log('listening on *: ' + port);
});
