/**
 *
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
function errorMiddleware(err, req, res, next) {
  console.log(err);
  if (err.name) {
    return res
      .status(err.status)
      .json({ name: err.name, message: err.message });
  }

  res.status(500).json("Internal server error.");
}

module.exports = errorMiddleware;
