const express = require("express")
const productRouter = require("./routers/products")

const app = express()

const PORT = 4000

app.use("/products", productRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))