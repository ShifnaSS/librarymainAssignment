const express = require('express');
const updateauthorRouter = express.Router();
var flash = require('connect-flash');
updateauthorRouter.use(flash());
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
    updateauthorRouter.get('/:id',function(req,res){
        const id = req.params.id
        AuthorData.findOne({_id:id})
        .then(function(author){
        req.flash('Role', 'admin');
        res.render('updateauthor',{
            nav,
            title:'Library',
            author
        });
    })
});
updateauthorRouter.post('/update2/:id',upload.single('img_file'),function(req,res){
    console.log(req.file);
    var updateditem = {
        _id : req.params.id,
        authorname : req.body.authorname,
        nation : req.body.nation,
        authorgenre : req.body.authorgenre,
        work : req.body.work,
        img_file : req.file.filename
    }
    // res.send("send");
        var id = req.params.id;
        //console.log(id);
        //console.log(updateditem);
        //var ObjectId = require('mongodb').ObjectID;
        var data = AuthorData.updateOne({_id:id},{$set:updateditem}).then((obj) => { 

            console.log('Updated - ' + obj); 
            
            }) 
            
            .catch((err) => { 
            
            console.log('Error: ' + err); 
            
            });
        console.log(data);
        // data.update({_id:id},{"authorname":"meharees"});
        req.flash('Role', 'admin');
         res.redirect('/authors');
   })   
    return updateauthorRouter;
}
module.exports = router;