const http = require('http');
const { json } = require('stream/consumers');

function requestListener(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === '/') {
    const data = {
      name: "Jokowi",
      age: 56
    };
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(data), null, 3);
    response.end();
  }
}

const server = http.createServer(requestListener);
server.listen(3000);