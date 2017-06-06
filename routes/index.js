var express = require('express');
var router = express.Router();
var chicken = require('../chicken.js');

router.get('/', function(req, res, next) {
  chicken.getQuote(function(e, r) {
    chicken.handleErrors(e, () => {
      res.render('hisraphness', {author: "Raph", quote: r, hotness: chicken.getImageUrl()});
    }, (e) => {
      res.render('error', {message: 'Refresh your steez, bro.'});
    });
  });
});

module.exports = router;
