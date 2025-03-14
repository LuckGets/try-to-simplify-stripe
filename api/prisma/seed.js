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
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    name: "ขนแกะ",
    price: 1,
    image: "https://picsum.photos/id/100/200/300",
  },
  { name: "ขาหมู", price: 5, image: "https://picsum.photos/id/300/200/300" },
];

/**
 * @type {Prisma.OrderCreateManyInput}
 */
const ordersData = [];

/**
 * @type {Prisma.OrderItemCreateManyInput}
 */
const orderItemsData = [];

async function seed() {
  try {
    console.log("-----START SEEDING-----");
    await prisma.$transaction(async (tx) => {
      // Seeding customer and product
      await Promise.all([
        tx.customer.createMany({
          data: customersData,
        }),
        tx.product.createMany({
          data: productsData,
        }),
      ]);

      await tx.order.createMany({
        data: ordersData,
      });

      await tx.orderItem.createMany({
        data: orderItemsData,
      });
    });
    console.log("-----FINISH SEEDING-----");
  } catch (err) {
    console.error(err);
  }
}

seed();
