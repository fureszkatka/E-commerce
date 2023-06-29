const express = require("express")
const router = express()
const {requireSignin} = require("../controllers/user.js")
const {addOrder,getOrder} = require("../controllers/order.js")

router.post("/api/:user/order", requireSignin, addOrder)
router.get("/api/:user/getorder", requireSignin, getOrder)

module.exports = router
