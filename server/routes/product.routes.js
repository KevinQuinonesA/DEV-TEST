const router= require('express').Router();
const productCtrl= require('../controller/product.controller');
const express = require("express");

// GET All products
router.get('/products', productCtrl.getProducts);
// Single Product
router.get('/products/:id',productCtrl.getProduct);
// Add a product
router.post('/products',productCtrl.createProduct);
// Delete product
router.delete('/products/:id', productCtrl.deleteProduct);

// Update product
router.put('/products/:id', productCtrl.updateProduct);

module.exports = router;