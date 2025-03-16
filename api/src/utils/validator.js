const { ZodError } = require("zod");

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

module.exports = { formatZodError };
