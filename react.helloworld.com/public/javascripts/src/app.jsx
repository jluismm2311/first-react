var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var HelloWorld = require('./HelloWorld.jsx');
var meli = require('./Meli.jsx');

React.render(
<HelloWorld />,
    document.getElementById('example')
);
meli.init();
meli.login();