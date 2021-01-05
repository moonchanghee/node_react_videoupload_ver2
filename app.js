var express = require('express');
var app = express();
var usersRouter = require('./server/routes/users');
var indexRouter = require('./server/routes/index');
// var Users = require('./server/routes/userarray');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://hee:2852@hee.pcfo2.mongodb.net/<dbname>?retryWrites=true&w=majority' , 
{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(() => console.log("몽고디비 성공"))
.catch(err => console.log(err))

var cors = require('cors');
app.use(cors());

const bodyparser = require("body-parser")
app.use(indexRouter);
app.use('/users',usersRouter);
app.use(bodyparser.json());


app.post('/' , (req,res, next) => {

    const param = req.body.id
    const param1 = req.body.password
    console.log("id:" + param)
    console.log("pw :" + param1)
    res.json({
        message: "제공된 이메일에 해당하는 유저가 없다" ,
        userId : param , userPwd : param1 
    })


    })


    app.post('/register' , (req,res, next) => {

        const id = req.body.id
        const pwd = req.body.password
        const Email = req.body.email
        console.log("id:" + id)
        console.log("pw :" + pwd)
        console.log( "email" + Email)
        res.json({
            message: "가입완료" ,
            userId : id , userPwd : pwd , email : Email
        })
    
    
        })
    
    



// })

// portnumber를 3002로 지정
const port = 3002;

// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`));