const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    public_place: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    complement: {
        type: String,
    },
    neighborhood: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip_code: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

AddressSchema.plugin(mongoosePaginate)

mongoose.model('Address', AddressSchema)