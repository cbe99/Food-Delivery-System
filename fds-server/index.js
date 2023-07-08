const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./config/db')

const MerchantRouter = require('./routes/merchantRoute')
const HomeRouter = require('./routes/homeRoute')

const port = process.env.PORT;
const apiVersion = process.env.API_VERSION;
const apiBasePath = `/api/${apiVersion}`;

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running');
})

// Home router
app.use(`${apiBasePath}`, HomeRouter);

// Register the Merchant router
app.use(`${apiBasePath}`, MerchantRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
