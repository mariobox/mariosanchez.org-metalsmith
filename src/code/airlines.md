---
title: "Airlines"
slug: airlines	
type: code
label: Portfolio
date: 2020-01-21
source: "https://github.com/mariobox/airlines"
demo: ""
blurb: ""
tags: tech, python, flask, jinja
---

**Made with**: <i class="icon-python"></i>Python

**Project Summary**: 

Submit the name of an airline and get its 2-charachter IATA symbol

[Source Files](https://github.com/mariobox/flask-blog) <hr class="art" />

For example, you can type &ldquo;american&rdquo; in the search box:

<img src="https://mariobox.github.io/airlines/iata-search.jpg">

And when you click &ldquo;Submit&rdquo; the result will be a list of all the airlines that have &rdquo;american in their name, followed by their IATA symbol in parentheses:

<img src="https://mariobox.github.io/airlines/iata-results.jpg">

If you're more specific and type only &ldquo;american airlines&rdquo;, you'll get the AA symbol.

The program is made in Python, with the aid of Flask and Jinja to display it on a web page.

First, the program takes a JSON file with all airline/symbol combinations and transforms it into a list of tuples. Each tuple is in the form of (&lsquo;Symbol&rsquo;, &ldquo;Airline Name&rsquo;).

Next, we iterate among all tuples in the list and append to a new list of tuples where the airline name matches the pattern you input.

Finally, we print the list of results on a webpage, using Flask and a Jinja template.

To run this code on your computer you first need to install and import the json and flask modules.
