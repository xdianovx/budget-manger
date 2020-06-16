const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true
    },
    clients:[{}]
});