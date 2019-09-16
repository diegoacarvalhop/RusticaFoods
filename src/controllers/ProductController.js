const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const appRes = require('../config/applicationResources')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        await Product.paginate({}, {
            page,
            limit: appRes.limitPaginate,
            populate: ['status', 'type']
        }, (err, products) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta dos produtos: ' + err);
            } else {
                return res.json(products)
            }
        })
    },

    async show(req, res) {
        await Product.paginate({
            _id: req.params.id
        }, {
            populate: ['status', 'type']
        }, (err, products) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta dos produtos: ' + err);
            } else {
                return res.json(products)
            }
        })
    },

    async store(req, res) {
        const product = await Product.create(req.body)
        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(product)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send('Produto excluído!')
    }
}