const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', productRoutes);

module.exports = app;