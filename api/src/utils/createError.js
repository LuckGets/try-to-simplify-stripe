/**
 * @param {string | null} message
 * @param {number | null} status
 */
function createError(status, name, message, body) {
  const errName = name ?? "Internal server error";
  const errMsg =
    message ??
    "There is an internal server error occured. Please contact the developer to fix the problem.";
  const errStatus = status ?? 500;
  const error = new Error(errMsg);
  error.status = errStatus;
  error.name = errName;

  throw error;
}

module.exports = { createError };
