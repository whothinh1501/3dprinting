const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    material: { type: String, default: 'PLA' }, // PLA, TPU, PETG...
    printTime: Number, // Phút
    price: Number,
    description: String,
    imageUrl: { type: String, default: 'https://via.placeholder.com/150' }
});

module.exports = mongoose.model('Part', PartSchema);