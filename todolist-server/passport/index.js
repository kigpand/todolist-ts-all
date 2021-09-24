const passport = require('passport');
const local = require('./local');

const conn = require('../database/sql');

module.exports = () =>{
    passport.serializeUser((user, done)=>{
        console.log(user.id);
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        conn.query(`select * from user where (user_id ="${id}")`,(err, rows, fields)=>{
            if(rows.length > 0){
                done(null,id);
            }
        })
    });

    local();
}