const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    nemotecnico: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

PaymentSchema.plugin(mongoosePaginate)

mongoose.model('Payment', PaymentSchema)