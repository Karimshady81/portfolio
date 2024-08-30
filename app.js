//Requires
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const { render } = require('ejs');
const contactRoutes = require('./Routes/contactRoute')



//Express App
const app = express();

const dbURL = 'mongodb+srv://kshady960:1Q2w3e4r5t@portfoliodata.f8u3w.mongodb.net/'
mongoose.connect(dbURL)
        .then((result) => {
            renderAndSaveHTML();
            app.listen(3000)
        })
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


function renderAndSaveHTML() {
    app.render('Home/index', { title: 'Home' }, (err, html) => {
        if (err) throw err;
        
        // Write the rendered HTML to a file
        fs.writeFileSync(path.join(__dirname, '/index.html'), html, 'utf8');
        console.log('HTML file has been saved to dist/index.html');
    });
}
