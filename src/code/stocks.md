---
title: "Stock Watcher"
slug: stocks
type: code
label: Portfolio
date: 2018-12-19
source: "https://github.com/mariobox/stock-watcher"
demo: "http://mariobox.github.io/stock-watcher"
blurb: ""
tags: tech, javascript, bootstrap
---

**Made with**: <i class="icon-javascript"></i> JavaScript | <i class="icon-bootstrap"></i> Bootstrap

[Source Files](https://github.com/mariobox/stock-watcher) | [Live Demo](https://mariobox.github.io/stock-watcher/)<hr class="art" />

**Project Summary**:

A real time app to watch a portfolio of stocks.

Input a stock symbol or a series of symbols separated by a comma and the app will display information in neatly laid out Bootstrap cards.

### How Does It Work

The app uses a plain JavaScript AJAX request to get stock information from the [World Trading Data](https://www.worldtradingdata.com/) API. It then parses the response as a JSON object and accesses the third element of the object, which is an array called &lsquo;data&rsquo; containing one object for each stock symbol you requested.

The first thing you need to do is to capture the user's input and asign it to a variable that you can then pass to the API's url. For this, we make use of the <code>window.location.search</code> DOM object, which will give you everything that goes after the ? symbol in the query url. Let's say that the user submits two stock symbols: GOOG,AAPL from the search form. The <code>window.location.search</code> will give you the following string as a result: 'symbols=GOOG%2CAAPL'.

We can then use the URLSearchParams(window.location.search) to parse that string into an object, like this:

<code>let stocks = new URLSearchParams(window.location.search);</code>

Which will produce this object:

<code>stocks = {'symbols': 'GOOG,AAPL'}</code>

Finally, we extract the stock symbols by calling the get() method on stocks:

<code>stocks.get('symbols')</code>

By returning that expression to the function that called it in:

<code>const PORTFOLIO = portfolioFromQueryParams() || DEFAULT_PORTFOLIO;</code>

it gets passed to the API query url that is sent to the API in our AJAX request.

From then, it's just a matter of looping over the &lsquo;data&rsquo; array that comes back as a response using the map function, and assigning the information to variables, which are then formatted properly and passed along to an HTML expression that will render the information to the web page.

If the user doesn't input a selection of stock symbols the program will load the default portfolio which is hard coded in the stocks.js file. If you want to modify the default portfolio just edit the stocks.js file


