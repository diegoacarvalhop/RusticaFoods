const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const TypeSchema = new Schema({
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

TypeSchema.plugin(mongoosePaginate)

mongoose.model('Type', TypeSchema)