var mercadoLibre = require('./mercadolibre-1.0.4.js');

exports.init = function (){MELI.init({
  client_id:1904006130973866
})};

exports.login = function(){MELI.login(function() {
  MELI.get(
      "/users/me",{},
      function(data) { console.log(["Hello ", data]) }
  );
})};