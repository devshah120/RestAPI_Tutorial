const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products.controller")
//For Getting Products
router.get("/", ProductController.getAllProducts);

//For Adding Products
router.post("/", ProductController.AddingProduct);

//For Getting Products By ID
router.get("/:id", ProductController.GettingProductsById);

//For Updating Products By ID
router.patch("/:id", ProductController.UpdatingProductsById);

//For Delete Products By ID
router.delete("/:id", ProductController.DeleteProductsById);

module.exports = router;
