const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
require('./config/db'); // Ensure DB connection is established

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', emailRoutes);
app.use('/auth', authRoutes);

module.exports = app;
