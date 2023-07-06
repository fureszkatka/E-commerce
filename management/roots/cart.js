const express = require("express")
const router = express()
const {requireSignin} = require("../controllers/user")
const {
    addToCart,
    getCart,
    removeFromCart,
    setQuantity
} = require("../controllers/cart")


router.get("/api/getcart/:user", requireSignin, getCart)
router.post("/api/addtocart", requireSignin, addToCart)
router.delete("/api/delete/:user/:item", requireSignin, removeFromCart)
router.put('/api/cart/:user/setquantity', requireSignin, setQuantity)

module.exports = router