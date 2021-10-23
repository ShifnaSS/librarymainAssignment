const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@cluster0.hypiv.mongodb.net/LIBFILES?retryWrites=true&w=majority');//'mongodb+srv://userone:userone@cluster0.hypiv.mongodb.net/MyLibraryApp?retryWrites=true&w=majority'
const schema = mongoose.Schema;

const SignupSchema = new schema({
    username : String,
    phonenumber  : String,
    email_ID : String,
    password : String,
    Role :String
});

var SignupData = mongoose.model('SignupData',SignupSchema);
module.exports = SignupData;
