const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
    _id: { type: Number, default: 0 },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false }
});

schema.plugin(AutoIncrement, { id: 'order_seq', inc_field: '_id' })

module.exports = mongoose.model('Product', schema);