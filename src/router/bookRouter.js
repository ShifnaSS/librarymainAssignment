const express = require('express');
const BooksRouter = express.Router();
var flash = require('connect-flash');
BooksRouter.use(flash());
const BookData = require('../model/bookdata');
function router(nav,usernav){
    BooksRouter.get('/',function(req,res){
        BookData.find()
        .then(function(books){
            let Role = req.flash('Role');
            if(Role!=""){
                req.flash('Role', 'admin');
                res.render("books",{
                    nav,
                    usernav :'',
                    role : 'true',
                    title:'Library',
                    books
                });
            }
            else{
                req.flash('Role', '');
                res.render("books",{
                    nav:'',
                    usernav,
                    role : '',
                    title:'Library',
                    books
                });
            }
        })  
    })
    BooksRouter.get('/:id',function(req,res){
        const id = req.params.id
        BookData.findOne({_id:id})
        .then(function(book){
            let Role = req.flash('Role');
            if(Role=='admin'){
                req.flash('Role', 'admin');
                res.render("book",{
                    nav,
                    usernav :'',
                    role : 'true',
                    title:'Library',
                    book
                });
            }
            else{
                req.flash('Role', '');
                res.render("book",{
                    nav:'',
                    usernav,
                    role : 'false',
                    title:'Library',
                    book
                });
            }
    })
});
    return BooksRouter;
}
module.exports = router;