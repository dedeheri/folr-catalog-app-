const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// utlis
const database = require("./src/database/index.js");

const app = express();

// router
const authorizationRouter = require("./src/routers/authorization.js");
const productRouterBackend = require("./src/routers/backend/product.js");
const errorMulter = require("./src/middleware/multer/error.js");

// middleware
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// database
database();

// static
app.use(
  "/assets/image/",
  express.static(path.join(__dirname, "/assets/image/"))
);

// router
// backend
app.use("/api/backend", authorizationRouter);
app.use("/api/backend", productRouterBackend);

// error
app.use(errorMulter);

// listen
app.listen(process.env.PORT, () => {
  console.log(`Server running in localhost:${process.env.PORT}`);
});
