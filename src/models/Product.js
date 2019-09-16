const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    short_desc: {
        type: String,
        required: true
    },
    long_desc: {
        type: String
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'Status',
        required: true
    },
    value: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)