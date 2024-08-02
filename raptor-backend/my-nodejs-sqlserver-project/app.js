const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRoutes');
const logger = require('./utils/logger');

const app = express();

// Middleware
app.use(bodyParser.json());

// Thiết lập CORS cho tất cả các route
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Thay localhost:3000 bằng origin của bạn
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/products', productRouter);

// Test
// productService.showProduct();

// Khởi động máy chủ
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
