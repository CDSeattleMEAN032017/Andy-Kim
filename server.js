var express = require("express")

var path = require('path')

var app = express();
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views',path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res){
  res.render('index')
})
app.get('/result', function(req, res){
  res.render('result')
})
app.post('/users', function(req, res){
  console.log("POST DATA \n\n", req.body)
  console.log(req.body.name)
  var context = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment,
  }
  res.render('result', {context})
})

app.listen(8000, function() {
  console.log('Hello World')
})
