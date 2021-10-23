const express = require('express');
const addauthorRouter = express.Router();
var flash = require('connect-flash');
addauthorRouter.use(flash());
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
const AuthorData = require('../model/authordata');
function router(nav){
    addauthorRouter.get('/',function(req,res){
        req.flash('Role','admin');
        res.render("addauthor",{
            nav,
            title:'Library'
        });    
    })
    
    addauthorRouter.get('/:id',function(req,res){
        const id = req.params.id
        var data = AuthorData({_id:id});
        data.deleteOne();
        req.flash('Role','admin');
        res.redirect('/authors');
    });
    addauthorRouter.post('/add2',upload.single('img_file'),function(req,res){
        console.log(req.file);
        var item1 = {
            authorname : req.body.authorname,
            nation : req.body.nation,
            authorgenre : req.body.authorgenre,
            work : req.body.work,
            img_file : req.file.filename
        }
        var author = AuthorData(item1);
        author.save();
        req.flash('Role', 'admin');
        res.redirect('/authors');
       })   
   
    return addauthorRouter;
}
module.exports = router;