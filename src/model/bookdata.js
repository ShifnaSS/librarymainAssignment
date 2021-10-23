const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@cluster0.hypiv.mongodb.net/LIBFILES?retryWrites=true&w=majority');//'mongodb+srv://userone:userone@cluster0.hypiv.mongodb.net/MyLibraryApp?retryWrites=true&w=majority'
const schema = mongoose.Schema;

const BookSchema = new schema({
    bookname : String,
    authorname  : String,
    genre : String,
    year  : Number,
    image : String
});

var BookData = mongoose.model('BookData',BookSchema);
module.exports = BookData;
