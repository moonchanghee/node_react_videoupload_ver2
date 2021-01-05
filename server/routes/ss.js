var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) { 
    res.json([ //json 값 전달
        {id: 1,
         username: "VictorOladipo"}, 
        {id: 2,
         username: "RussellWestbrook"}
    ]);
})


router.post('/', function (req, res, next) { 
    res.json([ //json 값 전달
        {id: 1,
         username: "VictorOladipo"}, 
        {id: 2,
         username: "RussellWestbrook"}
    ]);
})


module.exports = router;