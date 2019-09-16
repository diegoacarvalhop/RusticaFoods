const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const TypeSchema = new Schema({
    short_desc: {
        type: String,
        required: true
    },
    long_desc: {
        type: String
    },
    nemotecnico: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

TypeSchema.plugin(mongoosePaginate)

mongoose.model('Type', TypeSchema)