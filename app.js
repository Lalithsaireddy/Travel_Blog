require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.static('public'));
const expresslayout = require('express-ejs-layouts');

app.use(expresslayout);
app.set('view engine','ejs');
app.set('layout','./layouts/main');


app.use('/',require('./server/routes/main1.js'));

app.listen(PORT,()=>{
console.log(`App is listening on port ${PORT}`)

})