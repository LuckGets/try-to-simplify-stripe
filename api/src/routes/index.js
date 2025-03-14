const apiPath = require("../constants/api-path");

const router = require("express").Router();
const paymentRouter = require("./payment");

// Payment path
router.use(apiPath.payment.base, paymentRouter);

module.exports = router;
