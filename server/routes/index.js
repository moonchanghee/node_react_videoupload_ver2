var express = require('express');
var router = express.Router();
const User = require("./user")
const mongoose =require("mongoose")




router.post('/', function (req, res, next) {
console.log(req.body)

User.find({email:req.body.email})
.exec()
.then(user => {
    if(user.length >=1){
        console.log("실패")
        res.json({success : false , message : "실패"})
    } else {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name:req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        user
            .save()
            .then(result => {
                res.json({success : true})
                console.log("result" + result );
                res.redirect("/");
            })
            .catch(err => {
                console.log(err);
            });
          }    
})

})



module.exports = router;