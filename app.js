const express = require('express');
var app = new express();
var flash = require('connect-flash');
const session = require('express-session');
const port = process.env.PORT || 8888;
const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/admin',
        name:'Add a Book'
    },
    {
        link:'/admin1',
        name:'Add an Author'
    },
    {
        link:'/index',
        name:'Login/Signup'
    }
]
const usernav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/index',
        name:'Login/Signup'
    }
]
const BooksRouter = require('./src/router/bookRouter.js')(nav,usernav)
const authorRouter = require('./src/router/authorRouter.js')(nav,usernav)
const addbookRouter = require('./src/router/addbookRouter.js')(nav,usernav)
const addauthorRouter = require('./src/router/addauthorRouter.js')(nav,usernav)
const updateauthorRouter = require('./src/router/updateauthorRouter.js')(nav,usernav)
const updatebookRouter = require('./src/router/updatebookRouter.js')(nav,usernav)
const signupRouter = require('./src/router/signupRouter.js')(nav,usernav)
const loginRouter = require('./src/router/loginRouter.js')(nav,usernav)
//const homeRouter = require('./src/router/homeRouter.js')(nav)
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use(express.static('uploads'));
app.use('/books',BooksRouter);
app.use('/authors',authorRouter);
app.use('/admin',addbookRouter);
app.use('/admin1',addauthorRouter);
app.use('/updateauthor',updateauthorRouter);
app.use('/updatebook',updatebookRouter);
app.use('/user',signupRouter);
app.use('/login',loginRouter)
app.use(flash());
//app.use('/home',homeRouter);
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.get("/",function(req,res){
    res.render("index",{
        nav,
        title:'Library',
        alert:'',
        nouser:''
    });
    res.end;
});  
app.get("/index",function(req,res){
    res.render("index",{
        nav,
        title:'Library',
        alert:'',
        nouser:''
    });
    res.end;
});  
    
app.get('/home',function(req,res){
    let Role = req.flash('Role');
    console.log(Role);
    if(Role==""){
        req.flash('Role', '');
        res.render('home',{
            usernav,
            nav : '',
            title:'Library',
            Role
        })
    }
    else{
        req.flash('Role', 'admin');
        res.render('home',{
            usernav:'',
            nav ,
            title:'Library',
        })
    }    
})    
app.listen(port,()=>{console.log("Server Ready at" +port)});
