//Requires
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { render } = require('ejs');
const contactRoutes = require('./Routes/contactRoute')



//Express App
const app = express();

const dbURL = 'mongodb+srv://kshady960:1Q2w3e4r5t@portfoliodata.f8u3w.mongodb.net/'
mongoose.connect(dbURL)
        .then((result) => app.listen(3000))
        .catch((err) => console.error(err));

//Server static files (CSS,JS,Images)
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({ extended: true }));


//Register View Engine
app.set('view engine','ejs');

//Routes
app.get('/', (req,res) => {
    res.render('Home/index', {title: 'Home'})
});

//Contact routes
app.use('/', contactRoutes);

