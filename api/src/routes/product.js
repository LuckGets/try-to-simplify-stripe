const productController = require("../controller/product");

const productRouter = require("express").Router();

// Create checkout session
productRouter.get("", productController.getManyProducts);

module.exports = productRouter;
