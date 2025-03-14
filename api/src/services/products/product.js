const { Prisma } = require("@prisma/client");

/**
 *
 * @param {Products} products
 * @param {object} productsDetail
 * @returns number
 */
function calculateTotalPriceOfProducts(products, productsDetail) {
  // เก็บข้อมูลของ productId และ record เป็นค่าของจำนวนสินค้าที่จะซื้อ
  const productIdAndAmountMap = {};

  products.forEach((product) => {
    productIdAndAmountMap[product.productId] = product.amount;
  });

  return productsDetail.reduce(
    (acc, product) => product.price * productIdAndAmountMap[product.id] + acc,
    0
  );
}

module.exports = { calculateTotalPriceOfProducts };

/**
 * @typedef {{
 *  productId: number,
 *  amount: number
 * }}
 */
var Products;
