const express = require('express');
const router = express.Router();
const passport = require('passport');

const conn = require('./sql');

router.post('/login', (req, res) =>{
    const id = req.body.id;
    const pw = req.body.pw;
    console.log(`${id}, ${pw}`);
    conn.query(`select * from user where (user_id ="${id}" AND user_pw = "${pw}")`, (err,rows, fields) =>{
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            console.log(rows);
            res.json({
                result : rows
            });
        }
    })
});

router.post('/logout', (req,res)=>{
    console.log(req.user);
})

router.post('/join', (req, res)=>{
    const userInfo = req.body.userInfo;
    conn.query(`INSERT INTO user(user_id, user_pw, user_nick) values ("${userInfo.id}", "${userInfo.pw}", "${userInfo.nickName}")`, (err, rows, fields)=>{
        if(err) {
            res.json({
                result : false,
            })
        }else{
            res.json({
                result : true,
            });
        }
    })
});

module.exports = router;