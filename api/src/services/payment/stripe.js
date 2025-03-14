/**
 * @typedef {{
 *            price_data:{
 *              currency: "thb",
 *              product_data:{
 *                  name: string
 *              },
 *                  unit_amount: number,
 *            },
 *              quantity: number
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

/**
 *
 * @param {Array<ProductsDetail>} products
 * @returns {Array<LineItem>}
 *
 * เราสามารถสร้างสินค้าและราคาของเราเก็บไว้ที่ stripe ได้
 * ซึ่งเราจะสามารถนำ price_id ที่ stripe สร้างมาใส่เป็นรายละเอียดสินค้าได้
 * https://docs.stripe.com/payments/existing-customers?platform=web&ui=embedded-form
 *
 */
function createLineItemsViaStripe(products) {
  const priceId = [];
  for (let product of products) {
  }
}

module.exports = {
  createLineItems,
  LineItem,
  ProductsDetail,
};
