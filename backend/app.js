require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();

// El servidor lo iniciamos con npx nodemon app.js
