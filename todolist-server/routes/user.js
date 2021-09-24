const express = require('express');
const router = express.Router();

const conn = require('../database/sql');

router.post('/login', (req, res) =>{
    const id = req.body.id;
    const pw = req.body.pw;
    conn.query(`select * from user where (user_id ="${id}" AND user_pw = "${pw}")`, (err,rows, fields) =>{
        if(rows.length !== 0){
            const result = { id: rows[0].user_id, nick: rows[0].user_nick }
            res.json({
                result : result
            });
        }
        else{
            res.json({ result : "fail"});
        }
    })
});

router.post('/idCheck', (req,res)=>{
    const id = req.body.id;
    conn.query(`select * from user where user_id ="${id}";`,(err, rows, fields)=>{
        if(rows.length === 0){
            res.json({
                result: true,
            })
        }
        else{
            res.json({
                result: false,
            })
        }
    })
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