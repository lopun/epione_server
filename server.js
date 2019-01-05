var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {createConnection} = require('typeorm');

const defaultConnectionOptions = require('./src/ormConfig.js');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

createConnection(defaultConnectionOptions).then(connection => {
  console.log('DB Connected to port 3306');

  const User = connection.getRepository('User');

  require('./src/routes.js')(app, User);

  app.listen('8000', () => {
    console.log('server running at port 8000');
  });
});
