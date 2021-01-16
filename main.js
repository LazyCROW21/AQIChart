const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

// Routes
app.use(express.static('public'));

// Website Routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/forcast', (req, res)=>{
    res.render('forcast');
});

app.get('/services', (req, res)=>{
    res.render('services');
});

app.get('/contactus', (req, res)=>{
    res.render('contactus');
});

app.listen(PORT);