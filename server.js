const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./server/controllers/UserController');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.post('/signup', UserController.createUser);
app.post('/user/find', UserController.findUser);


app.listen(3000);
