const z = require("zod");

const productSchema = z
  .object({
    productId: z.number(),
    amount: z.number(),
  })
  .array()
  .nonempty();

module.exports = productSchema;
