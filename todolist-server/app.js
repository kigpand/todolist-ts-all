const express = require("express");
const cors = require('cors');

const db_config = require('./database/sql');
const userRouter = require('./database/user');
const boardRouter = require('./database/board');

const app = express();
const conn = db_config.init();

db_config.connect(conn);

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use(userRouter);
app.use(boardRouter);

app.listen(3888, ()=>{
    console.log("서버 실행중");
})