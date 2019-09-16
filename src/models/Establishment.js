const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const EstablishmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'Status',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

EstablishmentSchema.plugin(mongoosePaginate)

mongoose.model('Establishment', EstablishmentSchema)