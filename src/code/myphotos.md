---
title: "Creating a Photo Gallery for This Site"
slug: myphotos	
type: code
label: Portfolio
date: 2020-01-30
source: ""
demo: "https://mariosanchez.org/photos"
blurb: ""
tags: tech, javascript
---

**Made with**: <i class="icon-javascript"></i>JavaScript

**Project Summary**: 

A pleasantly styled image gallery that renders dynamically when the web page is called.

<hr class="art" />

I wanted to post a few pictures from my trips and other activities here in the site. Looking around the web for ideas I settled on a simple square format, with a subtle frame and a gray transparent rectangle for the description placed at the bottom of the photo. These are the style declarations for the photos:

<pre>
<code>
img.profile {
  padding: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1em;
  margin-right: 2%;
}

.picbox {
  display: inline-block; 
  margin: 0.5em;
}

figure {
  margin: 0;
  position: relative;

}

figcaption {
  font-size: 0.85em;
  line-height: 1.5;
  color: #fff;
  background: rgba(19,43,102, .50);
  bottom: 0;
  position: absolute;
  margin-bottom: 33px;
  margin-left: 5px;
  padding: 0.6em;
  box-sizing: border-box; 
}
</code>
</pre>

I placed the pictures in my <code>img</code> folder and then created a [JavaScript object](https://mariosanchez.org/pix.json) with the url and description of each picture. Every time I want to add a picture to the gallery, I add a new member at the top of the object.

Finally, I created the following [JavaScript script](https://mariosanchez.org/js/pix.js) that renders the images in the gallery. It maps over the array of pictures in the JS object mentioned before, and builds the HTML elements that hold the gallery. Once the map function is done, the HTML is placed in the proper place in the photos HTML template.

By doing it this way, I avoid having to hard code an HTML page every time I want to add a picture. It is much cleaner this way, and if I ever decide to change something in the gallery I won't have to make changes to every picture, I just have to change the JS script once.

To see the gallery in action click [here](../photos).























