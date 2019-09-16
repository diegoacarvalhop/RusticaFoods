const mongoose = require('mongoose')
const Client = mongoose.model('Client')
const appRes = require('../config/applicationResources')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        await Client.paginate({}, {
            page,
            limit: appRes.limitPaginate,
            populate: ['payment', 'status', 'establishment']
        }, (err, clients) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta dos clientes: ' + err);
            } else {
                return res.json(clients)
            }
        })
    },

    async show(req, res) {
        await Client.paginate({
            _id: req.params.id
        }, {
            populate: ['payment', 'status', 'establishment']
        }, (err, client) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta dos clientes: ' + err);
            } else {
                return res.json(client)
            }
        })
    },

    async store(req, res) {
        const client = await Client.create(req.body)
        return res.json(client)
    },

    async update(req, res) {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(client)
    },

    async destroy(req, res) {
        await Client.findByIdAndRemove(req.params.id);
        return res.send('Cliente excluído!')
    }
}