
var express = require('express')
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var random users = [
	{name: 'Jason Ng', age: 26, sexyness: 100},
	{name: "Julia Choy", age: 25, sexyness: 100},
	{name: "Anna Kendrick", age: 29, sexyness: 100},
	{name: 'Gina Carano', age: 32, sexyness: 100},
	{name: 'Joseph Gordon-Levitt', age: 33, sexyness: 100},	
];


app.get('/', function(req, res) {

  res.render('index.ejs', {userArr: userArr});
});

app.post('/addUser', function(req, res) {

	first = req.body.first;
	last = req.body.last;
	email = req.body.email;

	one = new user(first, last, email);
	
  userArr.push(one);

  console.log(one);
  console.log(first, last, email)
  console.log(userArr);
  
  res.render('index.ejs', {userArr: userArr});
});

app.listen(3000);

console.log('listening on port 3000!');