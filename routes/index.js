var express = require('express');
var router = express.Router();
var chicken = require('../chicken.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chicken', function(req, res, next) {
  chicken.getQuote(function(e, r) {
    if (e) {
      res.render('error', {message: 'Refresh, bro'})
    }
    res.render('chicken', { quote: r.quoteText, author: 'Raph', hotnessIndex: chicken.generateNumber() });
  });
});

module.exports = router;
