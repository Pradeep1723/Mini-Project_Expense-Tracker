const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const routes = require('./routes/route');
const { db } = require('./db/dbConnection');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
    const isDbConnected = await db();
    if (!isDbConnected) {
        console.error('Failed to connect to DB. Server not started.');
    } else {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    }
};

startServer();