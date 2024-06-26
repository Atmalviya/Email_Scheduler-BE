const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('./config/db'); 

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',  // Replace with your frontend URL
    credentials: true,  // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE']  // Allow relevant HTTP methods
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', emailRoutes);
app.use('/auth', authRoutes);

module.exports = app;
