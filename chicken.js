var request = require('request');

var quoteUrl = 'https://api.forismatic.com/api/1.0/\?method\=getQuote\&lang\=en\&format\=json';

module.exports = {
  getQuote: function(cb){
    return request(quoteUrl, function(e, r, b) {
      if(e) {
        cb(error);
      }
      cb(null, JSON.parse(b.replace("\\", "").replace("'", " ")));
    });
  },

  generateNumber: function() {
    return Math.floor(Math.random() * 22);
  }
}