const { Prisma } = require("@prisma/client");
const prisma = require("../src/config/prisma");

/**
 * @type {Prisma.CustomerCreateInput}
 */
const customersData = [
  {
    name: "Yod",
  },
  {
    name: "Ti",
  },
];

/**
 * @type {Prisma.ProductCreateManyInput}
 */
const productsData = [
  {
    name: "เนื้อแมว",
    price: 200,
  },
  {
    name: "ขนแกะ",
    price: 1,
  },
  {},
];

async function seed() {
  try {
    await prisma.$transaction((tx) => {
      tx.customer.createMany({
        data: customersData,
      });
    });
  } catch (err) {
    console.error(err);
  }
}

seed();
