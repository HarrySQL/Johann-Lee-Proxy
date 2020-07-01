// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('./'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;
const url = `http://localhost:${port}`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));
app.use('/checkout', createProxyMiddleware({ target: 'http://localhost:3003/', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://localhost:3009/', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://localhost:3007', changeOrigin: true }));
app.listen(port, () => {
  console.log(`Listening at ${url}`);
});