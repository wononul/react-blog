const express = require('express');
const app = express();
const port = 5000;

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
});
*/

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
});

// app.listen(5000);

/*
app.listen(5000, () => {
    console.log('Test Successed')
});
*/

app.listen(port);