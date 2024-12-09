const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request here
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// This solution uses a try...catch block to handle errors during request processing.  If an error occurs, it logs the error to the console, sends a 500 Internal Server Error response to the client and prevents the server from crashing.