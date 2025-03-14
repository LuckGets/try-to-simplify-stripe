const { ZodSchema } = require("zod");
const { validator } = require("../utils/validator");

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
    schemaListObj.forEach((schemaObj) => {
      const value = req.body[schemaObj.bodyField];
      validator(value, schemaObj.schema, res);
    });
    next();
  };
}

module.exports = validatorMiddleware;
