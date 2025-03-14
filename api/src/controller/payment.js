const prisma = require("../config/prisma");
const {
  calculateTotalPriceOfProducts,
} = require("../services/products/product");
const stripe = require("../stripe");
const { createError } = require("../utils/createError");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
async function createPaymentIntent(req, res, next) {
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

  console.log(totalPrice);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice * 100,
    currency: "thb",
  });

  // ใน paymentIntent จะมี property ที่ชื่อ client_secret
  // ซึ่งฝั่ง website จะต้องนำไปใช้ render Stripe component
  // ซึ่ง จะมีหน้าตา เป็น string ยาวๆ เช่น  pi_3R2X6ZFYtLJbUQDv1QvTJo1a_secret_cEqW2oClLyRyfWniDUYwYpYcN

  return res.status(200).json({ clientSecret: paymentIntent.client_secret });
}

const paymentContoller = { createPaymentIntent };

module.exports = paymentContoller;
