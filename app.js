const http = require('http');
const { brotliDecompressSync } = require('zlib');

const express = require('express');

const app = express();

const server = http.createServer();

server.listen(3000);