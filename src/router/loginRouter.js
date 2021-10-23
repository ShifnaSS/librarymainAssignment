const express = require('express');
const loginRouter = express.Router();
var flash = require('connect-flash');
loginRouter.use(flash());
var Role = '';
const bodyParser = require('body-parser');
//const session = require('express-session');
const { check, validationResult } = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const SignupData = require('../model/signupdata');
function router(nav,usernav) {
    loginRouter.get('/sign',function(req,res){
        res.render('signup',{
            nav,
            alert2,
            nouser2
        })
    });
    loginRouter.post("/admin-user", function (req, res) {
        // const errors = validationResult(req);
        const nouser = '';
        if(req.body.username==""||req.body.password==""){
            res.render('index',{
                usernav,
                nouser : 'Enter username and password'
            })
        }
        else if(req.body.username!=""&&req.body.password!="") {
            if(req.body.username==="admin"&&req.body.password==="Admin12345!"){
                req.flash('Role','admin');
                res.render('home',{
                    nav,
                    usernav:'',
                    title:'Library'
                });
            }
            else{
                const username = req.body.username;
                const password = req.body.password;
                SignupData.findOne({ 'username': username, 'password': password }).then(function (obj) {
                    console.log('Updated - ' + obj);
                    if (obj != null) {
                        req.flash('Role', '');
                        res.render("home", {
                            usernav,
                            nav : "",
                            title: 'Library'
                        });
                     }
                else {
                    const nouser = "user doesn't exist";
                    res.render('index',{
                        nouser,
                    })
                }
                })
                .catch((err) => {
                    console.log('Error: ' + err);
                })
            }
        }
        else{
            res.render('index',{
                nouser
            })
        }
    })
    return loginRouter;
}
module.exports = router;