const express = require('express');
const hbs = require('hbs');

//PORT run with Heroku or run locally
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//middleware example
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(now);
    next();
})

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})



app.get('/',(req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMsg: 'Welcome home'
    });
});

app.get('/projects',(req,res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects page'
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    });
});

app.listen(port, () => {
    console.log(`Server is set up on port ${port}`);
});