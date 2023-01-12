const express = require('express');

const app = express();


// midleware
app.set('port',3000);


// settings
app.use(express.json());





app.use(require('./routes/routes'));


app.listen(3000);