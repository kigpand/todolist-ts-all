const express = require('express');
const router = express.Router();

const db_config = require('./sql');
const conn = db_config.init();

db_config.connect(conn);

router.post('/login', (req, res) =>{
    console.log(req);
    conn.query('SELECT * from User', (err,rows, fields) =>{
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            res.json({
                result : rows
            });
        }
    })
});

router.post('/join', (req, res)=>{
    console.log(req.body);
    const userInfo = req.body.userInfo;
    conn.query(`INSERT INTO user(user_id, user_pw, user_nick) values ("${userInfo.id}", "${userInfo.pw}", "${userInfo.nickName}")`, (err, rows, fields)=>{
        if(err) {
            res.json({
                result : false,
            })
        }else{
            res.json({
                result : true,
            })
        }
    })
});

module.exports = router;