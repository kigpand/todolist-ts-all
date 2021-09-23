const passport = require('passport');
const { Strategy } = require('passport-local');

const conn = require('../database/sql');

module.exports = () =>{
    passport.use(new Strategy({
        usernameField: 'id',
        passwordField: 'pw'
    }, (id, pw, done)=>{
        conn.query(`select * from user where (user_id ="${id}" AND user_pw = "${pw}")`,(err,rows, fields) =>{
            if(err) console.log('query is not excuted. select fail...\n' + err);
            else {
                if(rows.length === 0){
                    return done(null, false, { reason: '아이디와 비밀번호를 다시 확인해주세요'})
                }
                else{
                    return done(null, rows[0]);
                }
            }
        })
    }));
}