const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');
const apiRouter = require('./routes/api');
const dbConnect = require('./database/sql');

const app = express();
dotenv.config();
dbConnect.connect();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/api', apiRouter);

app.listen(3888, ()=>{
    console.log("서버 실행중");
})