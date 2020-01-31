---
title: "Stock Info with ReactJS Router and Hooks"
slug: stocksreact	
type: code
label: Portfolio
date: 2020-01-28
source: ""
demo: ""
blurb: ""
tags: tech, javascript
---

**Made with**: <i class="icon-reactjs"></i>React

**Project Summary**: 

Web app to fetch stock info from an API and display it using React

[Source Files](https://github.com/mariobox/stocks-react) <hr class="art" />

## Objective

To build a stock info app using React.

## What we wanted to accomplish

We wanted a simple form that let us input stock symbols. Upon submission, we wanted a page listing the names of those companies, hyperlinked to a specific company page where we could look at some financials.

Fig. 1: Input a few symbols and send the form:

<img src="/img/rs3.png" />

Fig 2: List of companies whose symbols we submitted

<img src="/img/rs2.png" />

Fig 3: Financials for each company

<img src="/img/rs1.png" width=546px; />

## How we went about it

We used React to render our HTML pages. We used a third party API for the stock info. We used the <code>fetch()</code> method to get the info from the API. We then used React routes and hooks to render the pages dynamically, using the parameters in the search query.

## What did we learn

We used <code>URLSearchParams(window.location.search)</code> to grab the query string parameter values.

We passed those values to our API endpoint using <code>fetch()</code>and then parsed the response with the <code>json()</code> method.

Once we received the info, we used React's new <code>useState</code> and <code>useEffect</code> functions to update our components and state. To make sure that the React components didn't render before the info from the API arrived, we used the <code>async</code> and <code>await</code> flags. 

Both the list of company names and the individual stock pages are generated dynamically, using the parameters in the query string.

**Note**

This project doesn't have a demo because I didn't want to post my API key in the public repository. If you want to run this program in your computer, you can [clone](https://github.com/mariobox/stocks-react) the project files and get a free API key from [worldtradingdata.com](htttps://worldtradingdata.com). Then go to App.js and insert your key where it says "YourKeyHere".

I'm also didn't bother with any styling. My intention was to make this page work, not make it pretty (although that may come later).
