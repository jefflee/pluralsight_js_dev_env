var express = require('express');
var path = require('path');
import open from 'open';
import _ from 'underscore';

const port = 3000;
const app = express();

app.get('/', function (req, res) {

    console.log(
        _.shuffle([1, 2, 3, 4, 5, 6])
    );
    res.sendFile(path.join(__dirname, '../src/index.html'));
});  

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
