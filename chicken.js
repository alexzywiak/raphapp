var request = require('request');
var quoteUrl = 'https://api.forismatic.com/api/1.0/\?method\=getQuote\&lang\=en\&format\=json';

var generateNumber = function() {
  return Math.floor(Math.random() * 22);
}

module.exports = {
  getQuote: function(cb){
    return request(quoteUrl, function(e, r, b) {
      if(e) {
        cb(error);
      }
      cb(null, JSON.parse(b.replace(/\\/g, "")));
    });
  },

  getImageUrl: function() {
    return "/images/raph_" + String(generateNumber()) + ".jpg"
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