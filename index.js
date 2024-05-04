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

app.get("/", (_request, response, _next) => {
  response.send({ message: "Welcome! This API has 2 the /auth and /products resources. Check your assignment briefing on how to use this API. Good luck!" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
