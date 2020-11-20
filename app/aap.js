const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    //res.send('Chess Application')
    res.render('index', {
        layout: 'layout',
        title: 'Chess Application',
        page_title: 'Chees Board'

    })
});

module.exports = app;