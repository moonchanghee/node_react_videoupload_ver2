const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id : {type: String},
    password : {type: String},
    email : {type: String}
})

module.exports = mongoose.model('user' , userSchema)