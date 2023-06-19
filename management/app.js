const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRoutes = require("./roots/user")

const app = express()

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/',authRoutes)


app.listen(5000)