const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION + "/" + process.env.DATABASE_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir("./models");

app.use('/v1', require('./routes'));

app.listen(process.env.PORT || 3002);