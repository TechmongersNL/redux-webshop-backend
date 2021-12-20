const { Router } = require("express")

const Product = require("../models").product
const Category = require("../models").category
const Review = require("../models").review

const router = new Router()

//get all products
router.get("/", async (request, response, next) => {
  try {
    const products = await Product.findAll()
    response.send(products)
  } catch(e) {
    next(e)
  }
})

//get product categories
router.get("/category", async (request, response, next) => {
  try {
    const categories = await Category.findAll({ include: Product })
    response.send(categories)
  } catch(e) {
    next(e)
  }
})

//get one product, product by id
router.get("/:id", async (request, response, next) => {
  try {
    console.log("in rooute")
    const { id } = request.params
    const product = await Product.findByPk(parseInt(id), { include: Review })
    response.send(product)
  } catch(e) {
    next(e.message)
  }
})

module.exports = router