const express = require('express');
const updatebookRouter = express.Router();
var flash = require('connect-flash');
updatebookRouter.use(flash());
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
    updatebookRouter.get('/:id',function(req,res){
        const id = req.params.id
        BookData.findOne({_id:id})
        .then(function(book){
            req.flash('Role', 'admin');
        res.render('updatebook',{
            nav,
            title:'Library',
            book
        });
    })
});
updatebookRouter.post('/update2/:id',upload.single('image'),function(req,res){
    console.log(req.file);
    var updateditem = {
        _id : req.params.id,
        bookname : req.body.bookname,
        authorname : req.body.authorname,
        genre : req.body.genre,
        year : req.body.year,
        image : req.file.filename  
    }
    // res.send("send");
        var id = req.params.id;
        //console.log(id);
        //console.log(updateditem);
        //var ObjectId = require('mongodb').ObjectID;
        var data = BookData.updateOne({_id:id},{$set:updateditem}).then((obj) => { 

            console.log('Updated - ' + obj); 
            
            }) 
            
            .catch((err) => { 
            
            console.log('Error: ' + err); 
            
            });
        console.log(data);
        req.flash('Role', 'admin');
        res.redirect('/books');
   })   
    return updatebookRouter;
}
module.exports = router;