var express = require('express');
var router = express.Router();
var chicken = require('../chicken.js');

router.get('/', function(req, res, next) {
  chicken.getQuote(function(e, r) {
    chicken.handleErrors(e, () => {
      res.render('hisraphness', {
        author: "Raph", 
        quote: r.quoteText, 
        hotness: chicken.getImageUrl(), 
        size: '',
        subtitle: 'Make a raphical change to your world'});
    }, (e) => {
      res.render('error', {message: 'Refresh your steez, bro.'});
    });
  });
});

router.get('/lessraph', function(req, res, next) {
  chicken.getQuote(function(e, r) {
    chicken.handleErrors(e, () => {
      res.render('hisraphness', {
        author: "Raph", 
        quote: r.quoteText, 
        hotness: chicken.getImageUrl(), 
        size: 'small',
        subtitle: '* Now with 35% less Raph'});
    }, (e) => {
      res.render('error', {message: 'Refresh your steez, bro.'});
    });
  });
});

module.exports = router;
