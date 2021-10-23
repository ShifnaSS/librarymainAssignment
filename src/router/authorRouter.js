const express = require('express');
const authorRouter = express.Router();
var flash = require('connect-flash');
authorRouter.use(flash());
const AuthorData = require('../model/authordata');
function router(nav,usernav){
    authorRouter.get('/',function(req,res){
        AuthorData.find()
        .then(function(authors){
            let Role = req.flash('Role');
            if(Role!=""){
                req.flash('Role', 'admin');
                res.render("authors",{
                    nav,
                    usernav :'',
                    title:'Library',
                    authors,
                    role: 'true'
                });
            }
           else{
            req.flash('Role', '');
            res.render("authors",{
                nav :'',
                usernav,
                title:'Library',
                authors,
                role : 'false'
            });
           }
        })  
    })
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        AuthorData.findOne({_id:id})
        .then(function(author){
            let Role = req.flash('Role');
            if(Role!=""){
                req.flash('Role', 'admin');
                res.render("author",{
                    nav,
                    usernav :'',
                    title:'Library',
                    author,
                    role: true
                });
            }
            else{
                req.flash('Role', '');
                res.render("author",{
                    nav :'',
                    usernav,
                    title:'Library',
                    author,
                    role : false
                });
               }   
    })
});
    return authorRouter;
}
module.exports = router;