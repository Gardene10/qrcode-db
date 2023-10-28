
const express = require('express')
const mongose = require('mongoose')

const fileupload = require('express-fileupload')
const cors = require('./src/middleware/cors');


require('dotenv').config()

//importando o Routes
const apiRoutes = require('./src/routes')

mongose.connect(process.env.DATABASE , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongose.Promise = global.Promise
mongose.connection.on('error',(error => {
    console.log("Error: ", error.message)
}))

//criando o servidor

const server = express()
server.use(cors);
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(fileupload())

server.use(express.static(__dirname+'/public'))

server.use('/', apiRoutes)

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço: ${process.env.BASE}`)
})