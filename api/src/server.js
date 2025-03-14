//=====================================================GLOBAL IMPORT Zone
const express = require("express");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");
const router = require("./routes");
const paymentRouter = require("./routes/payment");
const apiPath = require("./constants/api-path");
require("dotenv").config({ path: "./.env" });
//==================================================================

//=====================================================CONSTANT Zone
const serverPort = process.env.SERVER_PORT || 8000;
const host = process.env.BACKEND_DOMAIN || "http://localhost";
const server = express();

//==================================================================

//=====================================================MIDDLEWARES Zone
server.use(cors({ origin: "*" }));
server.use(express.json());

//==================================================================

//=====================================================ROUTES Zone
server.use(router);
//==================================================================
//=====================================================THROW Zone
server.use(notFoundMiddleware);
server.use(errorMiddleware);

//==================================================================
server.listen(serverPort, () =>
  console.log(`The server is now listening and serve on ${host}:${serverPort}`)
);
