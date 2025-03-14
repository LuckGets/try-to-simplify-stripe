const { ZodSchema, ZodError } = require("zod");
const { createError } = require("./createError");

/**
 *
 * @param {unknown} data
 * @param {ZodSchema} schema
 * @param {Response} res
 */
function validator(data, schema, res) {
  const { success, error } = schema.safeParse(data);

  if (!success) {
    return res.status(400).json({
      message: "Invalid Request body.",
      details: formatZodError(error),
    });
  }

  return;
}

/**
 *
 * @param {ZodError} error
 * @returns {object} object
 */
function formatZodError(errors) {
  const string = errors.issues.reduce((acc, error) => {
    acc[
      error.path[1]
    ] = `Expected: ${error.expected} but received: ${error.received}`;
    return acc;
  }, {});

  return string;
}

module.exports = { validator };
