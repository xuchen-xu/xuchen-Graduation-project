//router只负责写接口，并指定接口的处理函数

const express  = require('express');
const router = express.Router();
const product = require('../controller/product')

router.get("/products",product.getAllProducts)
router.get("/lunbo",product.getLunbo)
router.post("/products/:id",product.updateProductById)
router.get("/products/delete/:id",product.deleteProductById)


module.exports = router;