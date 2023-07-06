const express = require("express")
const router = express()
const {getItems,getItem} = require("../controllers/items")


router.get("/api/getitems",getItems)
router.get("/api/getitem/:item",getItem)

module.exports = router