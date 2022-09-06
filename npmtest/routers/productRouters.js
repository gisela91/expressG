const express = require("express");
const productController= require("./../controllers/productController");
const productRouter = express.Router();
//routes
productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addproduct);
productRouter.route("/:id").get(productController.getProductById);

module.exports = productRouter;
