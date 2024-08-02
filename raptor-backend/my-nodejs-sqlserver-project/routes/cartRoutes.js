const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/getAll', productController.getAllProducts);
router.post('/getFilter', productController.getProductsFilter);
router.post('/delete', productController.deleteProduct);
router.get('/add', productController.addProduct);
router.post('/update', productController.updateProduct);

module.exports = router;