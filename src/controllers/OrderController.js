const mongoose = require('mongoose')
const Order = mongoose.model('Order')
const appRes = require('../config/applicationResources')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        await Order.paginate({}, {
            page,
            limit: appRes.limitPaginate,
            populate: ['product', 'status', 'client']
        }, (err, orders) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta dos pedidos: ' + err);
            } else {
                return res.json(orders)
            }
        })
    },

    async show(req, res) {
        await Order.paginate({
            _id: req.params.id
        }, {
            populate: ['product', 'status', 'client']
        }, (err, order) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta do pedido: ' + err);
            } else {
                return res.json(order)
            }
        })
    },

    async store(req, res) {
        const order = await Order.create(req.body)
        return res.json(order)
    },

    async update(req, res) {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(order)
    },

    async destroy(req, res) {
        await Order.findByIdAndRemove(req.params.id);
        return res.send('Pedido excluído!')
    }
}