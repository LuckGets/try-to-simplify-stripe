/**
 * @typedef {{
 *            price_data:{
 *             currency: "thb",
 *              product_data:{
 *                 name: string
 *              },
 *              unit_amount: number,
 *            },
 *            quantity: number
 *          }}
 */
var LineItem;

/**
 * @typedef {{
 *      name: string,
 *      price: number,
 *      amount: number
 * }}
 */
var ProductsDetail;

/**
 * @param {Array<ProductsDetail>} products
 * @returns {Array<LineItem>} lineItems
 */
function createLineItems(products) {
  return products.map((product) => ({
    price_data: {
      currency: "thb",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100, // --> ต้องแปลงราคาเป็น cents ในหน่วยดอลลาร์ หรือ สตางค์ในไทย,
    },
    quantity: product.amount,
  }));
}

module.exports = {
  createLineItems,
  LineItem,
  ProductsDetail,
};
