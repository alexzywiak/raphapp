var request = require('request');
var quoteUrl = 'https://api.forismatic.com/api/1.0/\?method\=getQuote\&lang\=en\&format\=json';
var quoteUrlRussian = 'https://api.forismatic.com/api/1.0/\?method\=getQuote\&lang\=ru\&format\=json';

var generateNumber = function(n) {
  return Math.floor(Math.random() * n);
}

module.exports = {
  getQuote: function(cb, url){
    try {
      return request(url, function(e, r, b) {
        if(e) {
          cb(error);
        }
        cb(null, JSON.parse(b.replace(/\\/g, "")));
      });
    } catch (e) {
      cb('ballz');
    }
  },

  getQuoteEng: function(cb){
   return this.getQuote(cb, quoteUrl);
  },

  getQuoteRus: function(cb){
   return this.getQuote(cb, quoteUrlRussian);
  },

  getImageUrl: function() {
    return "/images/raph_" + String(generateNumber(21)) + ".jpg"
  },

  getImageUrlRussian :function() {
    return "/images/putin_0.jpg"
  },

  handleErrors: function(e, fn, errFn) {
    if(e) {
      return errFn(e);
    }
    try {
      return fn();
    } catch(e) {
      return errFn(e);
    }
  }
}