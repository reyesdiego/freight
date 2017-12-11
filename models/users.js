var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    _id: Number,
    lastname: String,
    firstname: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);