const http = require('http');
http.createServer(function (req, res) {
    console.log("Server Started");
    res.write(`ugadhi : ${new Date()}`);
    res.end();
}).listen(8080);
