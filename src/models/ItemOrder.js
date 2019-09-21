const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const ItemOrderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

ItemOrderSchema.plugin(mongoosePaginate)

mongoose.model('ItemOrder', ItemOrderSchema)