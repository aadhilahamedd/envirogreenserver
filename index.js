require('dotenv').config()
require('./dbConnect/dbConnect')
const express = require('express')
const cors = require('cors')
const route = require('./routes/route')





const EnvirogreenServer = express()
EnvirogreenServer.use(cors())
EnvirogreenServer.use(express.json())
EnvirogreenServer.use(route)
EnvirogreenServer.use('/uploads', express.static('./uploads'))







const PORT = process.env.PORT || 3000
EnvirogreenServer.listen(3000, () => {
    console.log(`EnvirogreenServer running at PORT=${PORT} and waiting for client request`);

})

EnvirogreenServer.get('/', (req, res) => {
    res.status(200).send("<h1>EnvirogreenServer running at PORT=${PORT} and waiting for client request</h1>")
})