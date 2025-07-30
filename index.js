const express = require('express');
const app = express();
const port = process.env;

const mongoose = require('mongoose'); // mongoose MongoDB ODM

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`) // `(backtick): ES6 표준 문법, 변수 작성 시 사용
});