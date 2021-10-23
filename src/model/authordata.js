const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@cluster0.hypiv.mongodb.net/LIBFILES?retryWrites=true&w=majority');//'mongodb://localhost:27017/MyLibraryMain'
const schema = mongoose.Schema;
//mongoose.set('debug', true);
const AuthorSchema = new schema({
    authorname : String,
    nation  : String,
    authorgenre : String,
    work  : String,
    img_file : String
});

var AuthorData = mongoose.model('AuthorData',AuthorSchema);
module.exports = AuthorData;