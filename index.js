require ('dotenv').config()
require ('./dbConnect/dbConnect')
const express = require('express')
const cors = require ('cors')
const route=require('./routes/route')





const EnvirogreenServer=express()
EnvirogreenServer.use(cors({
    origin: ['https://envirogreen.vercel.app', 'http://localhost:5173'],
    credentials: true,
}))
EnvirogreenServer.use(express.json())
EnvirogreenServer.use('/api', route)
EnvirogreenServer.use(route) // Fallback support for root endpoints
EnvirogreenServer.use('/api/uploads', express.static('./uploads'))
EnvirogreenServer.use('/uploads', express.static('./uploads')) // Fallback support for root uploads







const PORT=process.env.PORT || 3000
EnvirogreenServer.listen(PORT,()=>{
    console.log(`EnvirogreenServer running at PORT=${PORT} and waiting for client request`);
})

EnvirogreenServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>EnvirogreenServer running at PORT=${PORT} and waiting for client request</h1>`)
})