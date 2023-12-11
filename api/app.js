const express = require("express");
const cors = require("cors");

const productRouter = require("./routers/products");
const authRouter = require("./routers/auth");

const app = express();

const PORT = 4000;

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
