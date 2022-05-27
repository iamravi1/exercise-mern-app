const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,
    useUnifiedTopology: true});

const connection = mongoose.connection;


const exercisesRoute = require('./routes/exercises');
const usersRoute = require('./routes/users');

app.use('/exercises', exercisesRoute);
app.use('/users', usersRoute);

connection.once('open',() => {
    console.log("MongoDB established successfully");
});

app.listen(port,() => {
    console.log(`server running on port ${port}`);
});

