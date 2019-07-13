const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
const expressValidator = require('express-validator');

dotenv.config();

//initialize app
const app = express();



//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use('/', require('./routes/public') );
app.use('/send', require('./routes/mail') );




//listen for server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server up and runnning on PORT : ${PORT}`));