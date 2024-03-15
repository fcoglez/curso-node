const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello world');
});

server.listen(3000, () => {
    console.log('The server is listening...');
});