const mongoose = require('mongoose')
const appRes = require('../config/applicationResources')
const Establishment = mongoose.model('Establishment')
const Address = mongoose.model('Address')

module.exports = {
    async index(req, res) {
        const {
            page = appRes.page
        } = req.query
        await Establishment.paginate({}, {
            page,
            limit: appRes.limitPaginate,
            populate: ['status', 'address']
        }, (err, establishments) => { 
            if (err) {
                return res.send('Ocorreu um erro na consulta dos estabelecimentos: ' + err);
            } else {
                return res.json(establishments)
            }
        })
    },

    async show(req, res) {
        await Establishment.paginate({
            _id: req.params.id
        }, {
            populate: ['status', 'address']
        }, (err, establishment) => {
            if (err) {
                return res.send('Ocorreu um erro na consulta do estabelecimento: ' + err);
            } else {
                return res.json(establishment)
            }
        })
    },

    async store(req, res) {
        var address = {
            public_place: req.body.publicPlace,
            number: req.body.number,
            complement: req.body.complement,
            neighborhood: req.body.neighborhood,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zipCode
        }
        const addressNew = await Address.create(address)
        if (addressNew) {
            var establishment = {
                title: req.body.title,
                address: addressNew._id,
                status: req.body.status
            }
            const establishmentNew = await Establishment.create(establishment)
            return res.json(establishmentNew)
        } else {
            return res.send('Ouve um erro ao cadastrar o estabelecimento!')
        }
    },

    async update(req, res) {
        const establishmentBase = await Establishment.findById(req.params.id)
        const addressBase = await Address.findById(establishmentBase.address)
        addressBase.public_place = req.body.publicPlace
        addressBase.number = req.body.number
        addressBase.complement = req.body.complement
        addressBase.neighborhood = req.body.neighborhood
        addressBase.city = req.body.city
        addressBase.state = req.body.state
        addressBase.zip_code = req.body.zipCode
        const addressNew = await Address.findByIdAndUpdate(addressBase._id, addressBase, {
            new: true
        })
        if (addressNew) {
            establishmentBase.title = req.body.title
            establishmentBase.address = addressNew._id
            establishmentBase.status = req.body.status
            const establishmentNew = await Establishment.findByIdAndUpdate(establishmentBase._id, establishmentBase, {
                new: true
            })
            return res.json(establishmentNew)
        } else {
            return res.send('Ouve um erro ao atualizar o estabelecimento!')
        }
    },

    async destroy(req, res) {
        const establishmentBase = await Establishment.findById(req.params.id)
        if (establishmentBase) {
            await Address.findByIdAndRemove(establishmentBase.address);
            await Establishment.findByIdAndRemove(establishmentBase._id);
            return res.send('Estabelecimento excluído!')
        } else {
            res.send('Ouve um erro ao excluir o estabelecimento!')
        }
    }
}