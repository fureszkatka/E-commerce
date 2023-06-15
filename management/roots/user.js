const express = require("express")
const router = express()

router.post("api/signup", usersignupValidator, signup)

module.exports = router
