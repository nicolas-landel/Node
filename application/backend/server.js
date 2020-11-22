const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Here the server response hihi!");
});

server.listen(process.env.PORT || 3000);