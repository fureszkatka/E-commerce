const express = require("express")
const router = express()
const {requireSignin} = require("../controllers/user.js")
const {addOrder, getOrder, checkout} = require("../controllers/order.js")

router.post("/api/:user/addorder", requireSignin, addOrder)
router.get("/api/:user/getorder", requireSignin, getOrder)
router.put('/api/:user/checkout', checkout)


module.exports = router
