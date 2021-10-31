const http = require('http');
http.createServer(function (req, res) {
    console.log("Server Started");
    res.write(`Dhananjayan Durai : ${new Date()}`);
    res.end();
}).listen(8080);
