const prisma = require("../config/prisma");
const { NextFunction } = require("express");

const productController = {};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
productController.getManyProducts = async (req, res, next) => {
  const products = await prisma.product.findMany();

  res.status(200).json({ products });
};

module.exports = productController;
