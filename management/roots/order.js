const express = require("express")
const router = express()

router.get("/api/order/:user",requireSignin, )

module.exports = router
