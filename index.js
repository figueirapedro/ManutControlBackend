require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());
app.use(cors());

const routes = require('./routes/database.js');

app.use('/api', routes);
app.use('/static', express.static(path.join(__dirname, 'www')));

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});