const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const path = require('path');

const router = require('./routes/router');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(logger('dev'));


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));