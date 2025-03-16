const apiPath = require("../constants/api-path");

const router = require("express").Router();
const paymentRouter = require("./payment");
const productRouter = require("./product");

// Payment path
router.use(apiPath.payments.base, paymentRouter);
router.use(apiPath.products.base, productRouter);

module.exports = router;
