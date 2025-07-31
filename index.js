require('dotenv').config(); // .env 파일에서 환경변수 불러오기
const { PORT, MONGO_URI } = process.env;
// console.log(process.env);

const express = require('express'); // Express 모듈 사용
const app = express(); // app이라는 새로운 Express 앱 만듦

const mongoose = require('mongoose'); // MongoDB ODM 모듈 불러오기

const { User } = require('./model/user');

mongoose.connect(MONGO_URI)
        .then(() => console.log('DB Connected!'))
        .catch(err => console.error(err));
// console.log("MONGO_URI:", MONGO_URI);

// 회원 등록 (수정중)
app.post('/api/user/register', (req, res) => {
    const user = new User(req.body);
    const userData = user.save;
    return res.status(200).json({ success: true, user:userData});
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`) // `(backtick): ES6 표준 문법, 변수 작성 시 사용
});