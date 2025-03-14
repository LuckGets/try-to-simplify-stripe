const z = require("zod");

const productSchema = z
  .object({
    productId: z.coerce.number(),
    amount: z.coerce.number(),
  })
  .array()
  .nonempty();

module.exports = productSchema;
