require('dotenv').config(); // .env 파일에서 환경변수 불러오기
const { PORT, MONGO_URI } = process.env;
// console.log(process.env);

const express = require('express'); // Express 모듈 사용
const app = express(); // app이라는 새로운 Express 앱 만듦

const mongoose = require('mongoose'); // MongoDB ODM 모듈 불러오기

mongoose.connect(MONGO_URI)
        .then(() => console.log('DB Connected!'))
        .catch(err => console.error(err));
// console.log("MONGO_URI:", MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`) // `(backtick): ES6 표준 문법, 변수 작성 시 사용
});