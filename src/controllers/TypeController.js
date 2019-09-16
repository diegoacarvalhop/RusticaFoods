const mongoose = require('mongoose')
const appRes = require('../config/applicationResources')
const Type = mongoose.model('Type')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        const types = await Type.paginate({}, {
            page,
            limit: appRes.limitPaginate
        })
        return res.json(types)
    },

    async show(req, res) {
        const type = await Type.findById(req.params.id);
        return res.json(type)
    },

    async store(req, res) {
        const type = await Type.create(req.body)
        return res.json(type)
    },

    async update(req, res) {
        const type = await Type.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(type)
    },

    async destroy(req, res) {
        await Type.findByIdAndRemove(req.params.id);
        return res.send('Tipo de produto excluído!')
    }
}