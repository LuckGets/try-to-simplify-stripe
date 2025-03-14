/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
function notFoundMiddleware(req, res, next) {
  const { url } = req;
  return res
    .status(404)
    .json(`The endpoints : ${url} does not exist on this server.`);
}

module.exports = notFoundMiddleware;
