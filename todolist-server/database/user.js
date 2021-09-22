const express = require('express');
const router = express.Router();

router.get('/login', (req, res) =>{
    res.send('로그인');
});

router.get('/join', (req, res)=>{
    res.send('회원가입');
});

module.exports = router;