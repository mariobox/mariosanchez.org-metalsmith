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

Input a stock symbol or a series of symbols separated by a comma and the app will display information in neatly laid out cards.

### How Does It Work

The app uses a plain JavaScript AJAX request to get stock information from the [World Trading Data](https://www.worldtradingdata.com/) API. It then parses the response as a JSON object and accesses the third element of the object, which is an array called &lsquo;data&rsquo; containing one object for each stock symbol you requested.

The program then loops over the &lsquo;data&rsquo; array using the map function, and assigns the information to variables.

We then apply some formatting to the variables so that they display properly (i.e. with the &lsquo;$&rsquo; or &lsquo;%&rsquo; symbols and with the proper number of decimals).

The page styling is done using Bootstrap's card class to display the info for each stock.

If the user doesn't input a selection of stock symbols the program will load the default portfolio which is hard coded in the stocks.js file. If you want to modify the default portfolio just edit the stocks.js file


