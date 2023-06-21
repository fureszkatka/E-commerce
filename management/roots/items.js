const express = require("express")
const router = express()
const {getItems} = require("../controllers/items")


router.get("/api/getitems",getItems)

module.exports = router