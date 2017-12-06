const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./server/controllers/UserController');
const OwnerDashController = require('./server/controllers/OwnerDashController');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.post('/signup', UserController.createUser);
app.post('/user/find', UserController.findUser);

app.get('/getSpaces', OwnerDashController.findSpaces);

app.get('/deleteSpace', OwnerDashController.deleteSpace, OwnerDashController.findSpaces);

app.get('/addSpace', OwnerDashController.addSpace, OwnerDashController.findSpaces);

app.listen(3000);
