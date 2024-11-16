require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./route/router')
require('./db/connection')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

PORT = 3000 || process.env.PORT

server.listen(PORT, ()=>{
    console.log(`Server running on PORT : ${PORT}`);
})

server.get('/',(req,res)=>{
    res.status(200).send(`<h1 style=;color:red;>Server running and waiting for request</h1>`)
})