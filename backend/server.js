const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const routes = require('./routes/route');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});