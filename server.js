const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, '/');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/')));
app.use('/', expressStaticGzip(publicPath, { enableBrotli: true, orderPreference: ['br'] }));

app.use('/checkout', createProxyMiddleware({ target: 'http://18.224.2.224/', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://52.53.187.157/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://54.193.94.230/', changeOrigin: true }));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));