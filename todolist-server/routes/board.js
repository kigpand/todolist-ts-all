const express = require('express');
const router = express.Router();

router.get('/loadBoard', (req,res)=>{
    res.send("로딩");
});

router.post('/addBoard',(req, res)=>{
    res.send("더하기");
})

router.delete('/deleteBoard', (req,res)=>{
    res.send("삭제");
})


module.exports = router;

