const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3001;
const url = `http://localhost:${port}`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));
app.use('/checkout', createProxyMiddleware({ target: 'http://18.191.143.205/', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://18.144.83.187/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://54.193.94.230/', changeOrigin: true }));
app.listen(port, () => {
  console.log(`Listening at ${url}`);
});