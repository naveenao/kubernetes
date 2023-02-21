const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Latest Update from docker hub. Hi Naveen!!Welcome to the jungle');
});

app.listen(8082, () => {
    console.log("Listening on port 8082");
});