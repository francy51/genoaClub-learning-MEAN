var express = require('express');
var router = express.Router();
var handlebars = ('express-handlebars');
var app = require('../app');

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('login');
});


module.exports = router;
