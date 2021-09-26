const express = require('express');
const router = express.Router();

const conn = require('../database/sql');

router.post('/loadBoard', (req,res)=>{
    const user_id = req.body.userId;
    const date = req.body.date;
    conn.query(`select * from board where (user_id ="${user_id}" AND content_date = "${date}")`, (err, rows, fields) =>{
        res.json({ result : rows });
    })
});

router.post('/addBoard',(req, res)=>{
    const boardInfo = req.body.boardInfo;
    conn.query(`INSERT INTO board(user_id, content_date, content) values ("${boardInfo.userId}", "${boardInfo.date}", "${boardInfo.content}")`, (err, rows, fields)=>{
        if(err){
            res.json({ result : false });
        }
        else{
            res.json({ result : true });
        }
    })
})

router.delete('/deleteBoard', (req,res)=>{
    const id = req.body.id;
    conn.query(`DELETE FROM board WHERE ( id = "${id}")`, (err, rows, fields)=>{
        if(err){
            res.json({ result : false });
        }
        else{
            res.json({ result : true });
        }
    })

})


module.exports = router;

