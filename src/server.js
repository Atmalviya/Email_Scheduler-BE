require('dotenv').config();
const app = require('./app');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const corsOptions = {
    origin: 'http://localhost:5173',  // Replace with your frontend URL
    credentials: true,  // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE']  // Allow relevant HTTP methods
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
