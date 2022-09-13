const express = require('express');

const app = express();

// Usuarios 
app.use('/api/users', require('./users/usersRoutes'));
// Products
app.use('/api/products', require('./products/productsRoutes'));

module.exports = app;