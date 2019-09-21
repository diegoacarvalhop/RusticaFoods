const listEndpoints = require('express-list-endpoints')
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const db = require('./src/config/db')

// Iniciando o APP
const app = express()
app.use(express.json())

// Iniciando o DB
mongoose.Promisse = global.Promisse;
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao mongo');
}).catch((err) => {
    console.log('Erro ao se conectar ao mongo: ' + err);
});
requireDir('./src/models')

// Primeira rota
app.use('/api', require('./src/routes'))

app.get('/', function(req, res){
    res.send(listEndpoints(app))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Servidor Rodando em http://localhost:' + PORT)
})