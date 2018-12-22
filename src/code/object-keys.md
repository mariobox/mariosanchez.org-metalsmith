---
title: "Image Gallery Using JS Array Iteration Methods"
slug: object-keys
date: 2017-11-22
source: "https://github.com/mariobox/object-keys-and-map"
demo: "https://mariobox.github.io/object-keys-and-map/"
blurb: "A simple image gallery in JS"
tags: tech, javascript
---

<img src="../img/gallery.png" class="profile">

**Made with**: <i class="icon-javascript-alt"></i> JavaScript

**Project Summary**:

A nicely styled image gallery built on the fly with JavaScript.

[Source Files](https://github.com/mariobox/object-keys-and-map) | [Live Demo](https://mariobox.github.io/object-keys-and-map/)<hr class="art" />

By using the Object.keys() method, and the map() array iteration method, we can deploy a simple image gallery that builds itself whenever you call the page.

The information related to the images is stored in an object of objects (a large object called "photos" containing several objects: the images themselves). Then, with the Object.keys() method we will grab all the keys in the "photos" object and store them as strings in an array. We can then use these keys in bracket notation to access the properties of each image object and build the gallery.

Here is the main "photos" object:

<pre><code>
	var photos = {
	  ruby: {
	      desc: 'Wyncode Workshop',
	      image: 'http://68.media.tumblr.com/d93b8a4f6509ca49f26359464381063c/tumblr_ourbmw8Fw91qz7ur9o1_1280.jpg',
	  },

	  ubuntu: {
	      desc: 'Ubuntu Setup',
	      image: 'https://68.media.tumblr.com/a3b53c16f75cd9912bbfa2fa77312df9/tumblr_oqqkduUrGA1qz7ur9o1_540.jpg',
	  },

	  wordcamp: {
	      desc: 'Wordcamp Miami',
	      image: 'https://68.media.tumblr.com/df1c1a84a06bc5bd536324365796c421/tumblr_oqqkduUrGA1qz7ur9o2_540.jpg',
	  },

	  webdev: {
	     desc: 'Webdev Class',
	     image: 'http://68.media.tumblr.com/44135b2999959d30ee7ddb8196d01ab0/tumblr_oie5odPDhZ1qz7ur9o1_540.jpg',
	  },

	  homecomp: {
	     desc: 'Coding at Home',
	     image: 'http://66.media.tumblr.com/4a096d78507ad9616c947ff35e449b17/tumblr_obza4vDzSq1qz7ur9o2_540.jpg',
	  },

	  google: {
	     desc: 'Google Analytics',
	     image: 'https://66.media.tumblr.com/048db88744dcc7f30127ae3ccae3ce66/tumblr_obzbaq5C0Z1qz7ur9o1_540.jpg', 
	  }

	}
</code></pre>

<hr />
<p>This is how we will call the Object.keys() method and store the object keys in an array of strings:</p>

<pre><code>
var listPix = Object.keys(photos); // This generates the following array: ['ruby', 'ubuntu', 'wordcamp', 'webdev', 'homecomp', 'google']
</code></pre>

<hr />
<p>This is how we build the gallery:</p>

```
var grid = '';
listPix.map(key => grid += '<div class="picbox"><figure><img src=' + photos[key].image + ' class="profile medium"><figcaption>' + photos[key].desc + '</figcaption></figure></div>');

```



























