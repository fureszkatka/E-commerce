const express = require("express")
const router = express()
const {requireSignin} = require("../controllers/user")
const {addToCart,getCart} = require("../controllers/cart")


router.get("/api/getcart/:user", requireSignin, getCart)
router.post("/api/addtocart", requireSignin, addToCart)

module.exports = router