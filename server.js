require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Database connection
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/3dprinting';
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log('DB Error:', err));

// Import các routes
const partRoutes = require('./routes/partRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');


// Sử dụng routes
app.use('/api/parts', partRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on: http://localhost:${PORT}`));