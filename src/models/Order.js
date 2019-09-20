const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    order_number: {
        type: Number,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    amount: {
        type: String,
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

OrderSchema.plugin(mongoosePaginate)

mongoose.model('Order', OrderSchema)