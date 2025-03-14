const prisma = require("../src/config/prisma");
const { execSync } = require("child_process");

async function resetDB() {
  console.log("<--- START RESET DATABASE PROCESS --->");
  await prisma.$executeRawUnsafe("DROP DATABASE IF EXISTS simplify-stripe");
  await prisma.$executeRawUnsafe(
    "CREATE DATABASE IF NOT EXISTS simplify-stripe"
  );
  console.log("<======= FINISH RESET DATABASE PROCESS =======>");
  console.log("<--- PUSHING SCHEMA TO NEWLY CREATED DATABASE --->");
  execSync("npx prisma db push");
  console.log("<======= FINISHING PUSHING SCHEMA TO DATABASE. =======>");
  console.log("<--- SEEDING DATA TO NEWLY CREATED DATABASE --->");
  execSync("npx prisma db seed");
  console.log("<======= FINISHING ALL PROCESS =======>");
}
