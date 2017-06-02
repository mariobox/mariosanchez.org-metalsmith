---
title: "Image Gallery Built with JQuery and JSON"
slug: jsongram
date: 2017-06-01
blurb: "Refactoring my Snapshots page"
---

I have an [image gallery](../snapshots) that is part of this site. The code for each image is created manually in the HTML of the page, which is kind of cumbersome, so I recently created a program so that it builds on page load using jQuery and JSON.

I have uploaded the [source files](https://github.com/mariobox/jsongallery) to Github, and also created a [live demo](http://mariosanchez.org/jsongallery/).

Here are the steps you need to follow:

1. Create a repository for your images. I normally upload them to an inactive Tumblr blog and then write down the URL of the images.

2. Create a JSON file that references the URL's of the images, plus any other piece of information that you want to add to your gallery (in my case, just a picture description).

3. Create the HTML page where your image gallery will build. Include an empty div where your gallery will be loaded.

4. Here comes the fun part: create a JavaScript program that makes an AJAX call to the JSON file, iterates through all the pictures, builds the image gallery and drops it in the div referenced in (3).

5. Save everything, load the pages on a server and open the gallery page. If everything went well, your gallery should now be live on the page.

This is how the JSON page of my demo looks like:

<pre><code>{
  "items": 
[
  {
    "url": "http://66.media.tumblr.com/5b1ff46184c72d8eb99ce41e13953bc1/tumblr_ofv7d2aqfP1qz7ur9o2_540.jpg",
    "description": "Annapolis"
  },

  {
    "url": "http://68.media.tumblr.com/bb7fe01f3c9f38009ac143a31714ffd4/tumblr_njsbfyVTKX1qz7ur9o1_540.jpg",
    "description": "Russia"
  },

  {
    "url": "https://68.media.tumblr.com/9f6f1e5460a46f4a7fa8c098dc5640d3/tumblr_on36eqLWVA1qz7ur9o1_540.jpg",
    "description": "Barcelona"
  },

  {
    "url": "https://66.media.tumblr.com/8647cda79e25754c8e47d01a8cfd4d97/tumblr_obzannm7fP1qz7ur9o1_540.jpg",
    "description": "Estadio Monumental River"
  },
  
  {
    "url": "http://66.media.tumblr.com/3453ff27919cf46b7955e28f71c254c4/tumblr_obza4vDzSq1qz7ur9o1_540.jpg",
    "description": "Port of Miami"
  },

  {
    "url": "http://66.media.tumblr.com/09784396750c3cdfab2cb0d5379f2160/tumblr_nogpcm9V3V1qz7ur9o7_540.jpg",
    "description": "Ferrari"
  }
]
}</code></pre>

This is how the JavaScript that builds the gallery looks like:

<pre><code>$(document).ready(function() {
    
    function displayPhotos(data) {
      var photoHTML = "";
      $.each(data.items,function(i,photo) {
        photoHTML += // code for the image divs goes here
      }); // end each
      
      $('#photos').html(photoHTML);
    };

    $.getJSON("mscphotos.json", displayPhotos);

}); // end ready</code></pre>

Note: There was an issue rendering the JS function above in HTML, so I had to strip out the HTML of the image divs. For the actual code please check out the <a href="https://github.com/mariobox/jsongallery">source files</a>.


