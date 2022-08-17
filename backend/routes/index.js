const express = require('express');

const app = express();

// Usuarios 
app.use('/api/users', require('./users/users'));

module.exports = app;