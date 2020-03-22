var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/api/v1/student', function(req, res) {
    res.send(
        { id: 1, name: 'Ichroman Raditya Duwila' }
    );
});

app.listen(3000, function() {
    console.log('Simple node app listen on port 3000');
});
