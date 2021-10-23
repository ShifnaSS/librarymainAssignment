const express = require('express');
const signupRouter = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const SignupData = require('../model/signupdata');
alert2 = '';
nouser2 = '';
function router(nav){
    signupRouter.post('/signup',urlencodedParser,[
        check('user','Enter a Username of 3+ character')
        .exists()
        .isLength({min:3}),
        check('email','Invalid email ID')
        .isEmail()
        .normalizeEmail(),
        check('phone','Check phonenumber')
        .exists()
        .isMobilePhone(),
        check('pass1','Enter a strong password')
        .exists()
        .isStrongPassword()
    ],function(req,res){
        const errors = validationResult(req);
        alert2 = '';
        nouser2 = '';
        if (!errors.isEmpty()) {
            //    return res.status(422).jsonp(errors.array())
             const alert2 = errors.array();
            res.render('signup',{
                alert2,
                nouser2
            })
        }
        else{
            // res.json(req.body);
        var data = {
        username : req.body.user,
        phonenumber : req.body.phone,
        email_ID : req.body.email,
        password : req.body.pass1,
        Role : 'user'
        }
    console.log(data);
        var signup = SignupData(data);
        signup.save();
        res.redirect('/index');   
        }
       
    })  
    return signupRouter;
}
module.exports = router;