const prisma = require("../config/prisma");
const { createLineItems } = require("../services/payment/stripe");
const {
  calculateTotalPriceOfProducts,
} = require("../services/products/product");
const stripe = require("../stripe");
const { createError } = require("../utils/createError");
const { validator } = require("../utils/validator");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
async function createCheckoutSession(req, res, next) {
  const { products } = req.body;

  /**
   * หน้าตาของ products จะเป็น array ของ object ที่มี key ดังนี้
   * {
   *    productId : number,
   *    amount : number
   * }
   *
   */

  // อย่าลืมตรวจสอบข้อมูลของสินค้าก่อนจะนำไปสร้างนะครับ
  const allProductsDetail = await prisma.product.findMany({
    where: {
      id: {
        in: products.map((item) => item.productId),
      },
    },
  });

  if (allProductsDetail.length !== products.length)
    return next(
      createError(404, "Not found", "Some product ID could not be found.")
    );

  // หา total price ของสิ่งที่ลูกค้าต้องการจะซื้อ
  const totalPrice = calculateTotalPriceOfProducts(products, allProductsDetail);
  return res.status(200).json({ totalPrice });
}

const paymentContoller = { createCheckoutSession };

module.exports = paymentContoller;
