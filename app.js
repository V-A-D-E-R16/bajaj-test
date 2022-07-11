const express = require('express');
const bodyParser  = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/array.html');
});

app.post('/', function(req, res) {
    
    const data = req.body.data;
    console.log(data);
    var count = 0;
    var splitted = data.split(',');
    var alpha = [];
    var nums = [];
    for(var i = 0; i < splitted.length; i++) {

        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(splitted[i])){
            continue;
        } else {
            //console.log('+1')
            count++;

            if (splitted[i] >= '0' && splitted[i] <= '9') {
                nums.push(splitted[i]);
            } else {
                alpha.push(splitted[i]);
            }
        }
    }
    const response = {
        "is_success" : true,
        "user_id" : "yash_oreo4812",
        "roll_no" : 1906524,
        "email" : "yash_oreo4812@gmail.com",
        "count" : count,
        "alphabets" : alpha,
        "numbers" : nums,
    };
    
    res.send(response);
});


app.listen(3000, function(req, res) {
    console.log('listening on port 3000');
});
