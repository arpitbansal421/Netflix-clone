const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Correct use of timestamps

module.exports = mongoose.model("User", userSchema); // Use 'User' as the model name for convention
