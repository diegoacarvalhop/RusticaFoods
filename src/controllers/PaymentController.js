const mongoose = require('mongoose')
const appRes = require('../config/applicationResources')
const Payment = mongoose.model('Payment')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        const payments = await Payment.paginate({}, {
            page,
            limit: appRes.limitPaginate
        })
        return res.json(payments)
    },

    async show(req, res) {
        const payment = await Payment.findById(req.params.id);
        return res.json(payment)
    },

    async store(req, res) {
        const payment = await Payment.create(req.body)
        return res.json(payment)
    },

    async update(req, res) {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(payment)
    },

    async destroy(req, res) {
        await Payment.findByIdAndRemove(req.params.id);
        return res.send('Forma de pagamento excluída!')
    }
}