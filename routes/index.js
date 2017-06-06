var express = require('express');
var router = express.Router();
var chicken = require('../chicken.js');

router.get('/', function(req, res, next) {
  chicken.getQuote(function(e, r) {
    if (e) {
      res.render('error', {message: 'Refresh, bro'})
    }
    res.render('chicken', { quote: r.quoteText, author: 'Raph', hotnessIndex: chicken.generateNumber() });
  });
});

module.exports = router;
