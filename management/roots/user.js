const express = require("express")
const router = express()
const {login,signup,requireSignin,userById}= require("../controllers/user")

router.post("/api/signup", signup)
router.post("/api/login", login)
router.get("/api/getuser",requireSignin, userById)

module.exports = router
