const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to Home Page');
  }
  if (req.url === '/about') {
    res.end('<h>links</h> , <a herf="https://gogoanime.pe">Anime Website</a>');
  }
  res.end('<h>Sahi dalo Dhakan</h>');
});

server.listen(5000);
