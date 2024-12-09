const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// The above code is missing error handling which could lead to unexpected crashes in production
//  This bug is very uncommon because error handling is usually done. However, it's still a possibility.