const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    document_number: {
        type: String,
        required: true
    },
    establishment: {
        type: Schema.Types.ObjectId,
        ref: 'Establishment',
        required: true
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    },
    payday: {
        type: Number,
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

ClientSchema.plugin(mongoosePaginate)

mongoose.model('Client', ClientSchema)