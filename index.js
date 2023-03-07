const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Argo cd is monitoring after deployment');
});

app.listen(8082, () => {
    console.log("Listening on port 8082");
});