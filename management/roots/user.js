const express = require("express")
const router = express()
const {login,signup,requireSignin}= require("../controllers/user")

router.post("/api/signup", requireSignin, signup)
router.post("/api/login", login)

module.exports = router
