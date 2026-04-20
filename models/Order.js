const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    partName: { type: String, required: true },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },    
    address: { type: String, required: true },  
    quantity: { type: Number, default: 1 },
    totalPrice: Number,
    status: { type: String, default: 'Đang chờ duyệt' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);