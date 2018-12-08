var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var bcrypt= require('bcrypt-nodejs');
var userSchema = new Schema({
	
    name: { type: String},
    password: { type: String },
    email: { type: String},
    
    // active: { type: Boolean, required: true, default: false },
    // temporarytoken: { type: String, required: true },
    //   resettoken: { type: String, required: false },
});

module.exports= mongoose.model('user', userSchema)
