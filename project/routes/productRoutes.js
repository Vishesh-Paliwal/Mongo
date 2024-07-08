const express = require('express');
const router = require('express').Router();
const productControllers = require("../contollers/productControllers");

router.post("/api/products", productControllers.createProduct);
 

router.get('/api/products' , productControllers.getAllProduct)
 
 router.get('/api/products/:id' , productControllers.getProductById);
 
 router.put('/api/products/:id' , productControllers.updateProduct);
 
 router.delete('/api/products/:id',productControllers.deleteProduct);

 module.exports = router;
 