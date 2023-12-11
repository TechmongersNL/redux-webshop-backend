const express = require("express");
const cors = require("cors");

const productRouter = require("./routers/products");
const authRouter = require("./routers/auth");

const app = express();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
