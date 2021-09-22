const mysql = require('mysql2');

const connection = {
    host : 'localhost',
    user : 'root',
    password : "@lagisin0225",
    database : 'todolistdb'
};

module.exports = {
    init : () =>{
        return mysql.createConnection(connection);
    },
    connect: (conn) =>{
        conn.connect((err)=>{
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!')
        })
    }
}