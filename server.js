const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.listen(3000);
