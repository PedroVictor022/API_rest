const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
   res.writeHead('200', {'Content-Type': 'text/plain'});
   res.end('API REST Livraria');
})

server.listen(port, () => {
   console.log(`Server online: port - http://localhost:${port}`);
})