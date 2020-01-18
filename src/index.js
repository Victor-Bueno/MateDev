const express = require('express');
const mongoose = require('mongoose'); // MongoDB (noSQL)
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Victor:Vi14042010@cluster0-z8sgm.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);