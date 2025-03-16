const { ZodSchema } = require("zod");
const { validator, formatZodError } = require("../utils/validator");

/**
 * @typedef {{
 * bodyField: string,
 * schema: ZodSchema
 * }}
 */
var SchemaObjList;

/**
 *
 * @param {Array<SchemaObjList>} schemaListObj
 * @param {import("express").RequestHandler} requestHandler
 * @returns
 */
function validatorMiddleware(schemaListObj) {
  return function (req, res, next) {
    for (let schemaAndObj of schemaListObj) {
      const { bodyField, schema } = schemaAndObj;
      const value = req.body[bodyField];

      const { success, error } = schema.safeParse(value);

      if (!success) {
        return res.status(400).json({
          message: "Invalid Request body.",
          details: formatZodError(error),
        });
      }
    }
    next();
  };
}

module.exports = validatorMiddleware;
