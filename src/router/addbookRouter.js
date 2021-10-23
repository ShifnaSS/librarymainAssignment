const express = require('express');
const addbookRouter = express.Router();
var flash = require('connect-flash');
addbookRouter.use(flash());
const multer = require('multer');
var path = require('path');
var fs = require('fs');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null ,'./uploads');
    },
    filename : function(req,file,cb){
        cb(null , file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage:storage});
const BookData = require('../model/bookdata');
function router(nav){
    addbookRouter.get('/',function(req,res){
        req.flash('Role', 'admin');
        res.render("addbook",{
            nav,
            title:'Library'
        });    
    })
    addbookRouter.get('/:id',function(req,res){
        const id = req.params.id
        var data = BookData({_id:id});
        data.deleteOne();
        req.flash('Role', 'admin');
        res.redirect('/books');
    });
    
    addbookRouter.post('/add',upload.single('image'),function(req,res){
        console.log(req.file);
        var item = {
            bookname : req.body.bookname,
            authorname : req.body.authorname,
            genre : req.body.genre,
            year : req.body.year,
            image: req.file.filename
        }
        var book = BookData(item);
        book.save();
                req.flash('Role', 'admin');
                res.redirect("/books");
       })
    return addbookRouter;
}
module.exports = router;