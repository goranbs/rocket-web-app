'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const path = require('path');

app.use(express.static( __dirname + '/build' ));

app.get('/', (req, res) => {
    var fullpath = path.join(__dirname, 'html/index.html');
    res.sendFile(fullpath);
    console.log(fullpath)
});

// run server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);