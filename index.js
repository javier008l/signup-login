const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/user_routes');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config(); 

const CONNECTION_PORT = process.env.CONNECTION_PORT || 3007;

app.listen(CONNECTION_PORT, () => {
    console.log(`Server running on port ${CONNECTION_PORT}`);
});

const mongo_connect = () => {
    try {
        mongoose
        .connect(process.env.DATABASE_CONNECTION_STRING)
        .then(() => {
            console.log("Connected to the database");
          })
          .catch((err) => {
            console.log("Error connecting to the database");
          });
    } catch (error) {
        console.log(err);
    }
}

mongo_connect();

// Rutas
app.use('/api/v1/users', userRoutes);

