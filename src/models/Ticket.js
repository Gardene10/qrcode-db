//
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const modelSchema = new mongoose.Schema({
    id: String,
    sequencia: Number,
    status: Boolean
})

const modelName = 'Ticket'

if(mongoose.connection && mongoose.connection.models[modelName]){ //se o model estiver pronto para conexao ele exporta 
    module.exports = mongoose.connection.models[modelName]
}else {
    module.exports = mongoose.model(modelName,modelSchema) //se nao cria-se e exporta
}