var express = require('express');
const path = require("path");
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css'))); // redirect CSS bootstrap
//app.use( express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

//app.use( express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/js',  express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS



console.log(__dirname);

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');                                            