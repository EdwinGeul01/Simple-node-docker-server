const express = require('express');

const app = express();


// midleware
app.set('port',3000);
app.use(express.json());
// settings






app.use(require('./routes/routes'));


app.listen(3000);