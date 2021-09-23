const express = require('express');
const router = express.Router();
const passport = require('passport');

const conn = require('./sql');

// router.post('/login', (req, res) =>{
//     const id = req.body.id;
//     const pw = req.body.pw;
//     const result = conn.query(`select * from user where (user_id ="${id}" AND user_pw = "${pw}")`, (err,rows, fields) =>{
//         if(err) console.log('query is not excuted. select fail...\n' + err);
//         else {
//             console.log(rows);
//             res.json({
//                 result : rows
//             });
//         }
//     })
// });

router.post('/login', (req, res, next) =>{
    passport.authenticate('local',(err, user, info) =>{
        if(info){
            return res.status(401).send(info.reason);
        }

        return req.login(user, async()=>{
            return res.json(user);
        })
    })(req, res, next);
});

router.post('/logout', (req,res)=>{
    console.log(req.user);
    // req.logout();
    // req.session.destroy();
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