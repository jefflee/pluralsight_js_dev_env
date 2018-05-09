var express = require('express');
var path = require('path');
import open from 'open';
import _ from 'underscore';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {

    console.log(
        _.shuffle([1, 2, 3, 4, 5, 6])
    );
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
    // Hard coding for simplicity. Pretend this hits a real database
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
        { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});