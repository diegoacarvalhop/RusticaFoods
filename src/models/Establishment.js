const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const EstablishmentSchema = new Schema({
    short_desc: {
        type: String,
        required: true
    },
    long_desc: {
        type: String
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
    created_at: {
        type: Date,
        default: Date.now
    }
})

EstablishmentSchema.plugin(mongoosePaginate)

mongoose.model('Establishment', EstablishmentSchema)