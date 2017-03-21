var express = require('express');
var router = express.Router();

// GET home page.
// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'BrennonLee'});
// });

router.get('/', function(req, res, next) {
  res.render('index', {title: 'StarWars'});
});

module.exports = router;
