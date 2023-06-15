const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.listen(5000)