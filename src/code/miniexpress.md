---
title: "Creating a Simple Dynamic Site With Node and Express"
slug: miniexpress
date: 2017-07-08
blurb: ""
tags: tech
---

I just developed a simple dynamic site made with Node.js and Express.js:

[Source Code](https://github.com/mariobox/minimal-express) | [Live Demo](http://www.mariosanchezcarrion.com:3000)

Contrary to a static site, where the HTML pages are already created and just sit there waiting for the user to request them, in a dynamic site each page is put together on the spot, the moment the user requests it. Express uses a combination of templates and routes to generate and serve individual pages to the web.

In the simple site I created, the [templates](https://github.com/mariobox/minimal-express/tree/master/views) (called "views" in Express) are made with [Pug](https://pugjs.org/api/getting-started.html) (formerly known as Jade). 

This is the template for the index page:

<pre><code>extend layout.pug

block content
    h1= title
    p Hi! This is a #{message}.
    p It has an index, contact and about pages, and three specific pages that list a car brand and three of their popular models. 
    p These pages are not static HTML pages. They are generated dynamically using Express routes each time a user requests them. You can access them by clicking the following links, or by directly appending /toyota, /subaru or /nissan to the URL of this page in the browser address bar:
      ul
        li 
          a(href="/toyota") Toyota
        li 
          a(href="/subaru") Subaru
        li 
          a(href="/nissan") Nissan
    p For access to the about and contact pages click on the links on the menu at the top of the page.</code></pre>

The routes are placed in a special [index.js file](https://github.com/mariobox/minimal-express/blob/master/routes/index.js) that is referenced by the main [app.js](https://github.com/mariobox/minimal-express/blob/master/app.js) file that holds the flow of steps necessary for the application to work. 

This is how the index.js file containing the routes looks:

<pre><code>const express = require('express');
const router = express.Router();
const pjson = require('../package.json');
const cars = require('../carsData.json');

router.get('/', function (req, res) {
  res.render('index', { 
    title: 'Home', 
    message: pjson.description, 
    name: pjson.name 
})
})

router.get('/about', function (req, res) {
  res.render('about', { 
    title: 'About Us', 
    message: pjson.description, 
    name: pjson.name 
})
})

router.get('/contact', function (req, res) {
  res.render('contact', { 
    title: 'Contact', 
    message: '555-555-5555', 
    name: pjson.name 
})
})

router.get('/:id', function (req, res) {
  var i = 0;
  switch(req.params.id) {
    case 'toyota': i = 0; break;
    case 'subaru': i = 1; break;
    case 'nissan': i = 2; 
}
  
  res.render('cars', { 
    currentBrand: req.params.id,
    title: req.params.id,
    name: pjson.name,
    model1: cars[i].models[0], 
    model2: cars[i].models[1],
    model3: cars[i].models[2]
    })
})

module.exports = router;</code></pre>

The *home*, *contact* and *about* pages are fairly straight forward.  The pages dedicated to the car *brands*, though, are where the dynamic nature of the site really shines. Since the car brand is part of the URL, the Express app gets it directly from the URL and inserts it in the cars.pug template using template literals. 

The application also looks through a [flat data json file](https://github.com/mariobox/minimal-express/blob/master/carsData.json) to get the models corresponding to each brand, and inserts them in an unordered list also specified in the cars.pug template.

The site also makes use of *includes*, by which the common areas of the site (like the navigation and the footer) are placed in separate pug template files, and called each time the application needs to put together a page following a user request.

The [source code is on Github](https://github.com/mariobox/minimal-express), if you want to take a closer look. I've also placed a [live demo](http://www.mariosanchezcarrion.com:3000) in my [Digital Ocean VPS](https://m.do.co/c/b96aa4f9fdfd) (referral link). Other than than, I recommend checking out the [Express.js documentation](https://expressjs.com/), which is very detailed and clear. 




