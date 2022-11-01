const express = require('express');

const app = express();

// Usuarios 
app.use('/api/users', require('./users/usersRoutes'));
// Products
app.use('/api/products', require('./products/productsRoutes'));
// Login
app.use('/api/login', require('./login/loginRoutes'));

module.exports = app;