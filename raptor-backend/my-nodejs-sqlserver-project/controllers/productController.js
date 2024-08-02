const productService = require('../services/productService');

class ProductController {

  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getProductsFilter(req, res) {
    try {
      const { sort_by, category_id, min_price, color, max_price } = req.body;
      const products = await productService.getProductsFilter(sort_by, category_id, min_price, color, max_price);
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getProductsById(req, res) {
    try {
      const { product_id } = req.body;
      const products = await productService.getProductById(product_id);
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async addProduct(req, res) {
    try {
      await productService.addProduct(req.params);
      res.json();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async deleteProduct(req, res) {
    try {
      const { product_id } = req.body;
      await productService.deleteProductById(product_id);
      res.json();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async updateProduct(req, res) {
    try {
      await productService.updateProduct(req.params);
      res.json();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

}

module.exports = new ProductController();
