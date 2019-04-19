---
title: "Command Line Applications in Nodejs"
slug: cla	
date: 2017-07-23
source: "https://github.com/mariobox/command-line-apps"
demo: "#"
blurb: ""
tags: tech, node
---

**Made with**: <i class="icon-nodejs"></i>Node

**Project Summary**: 

A command line application is a program that you can run from the terminal's [command line](https://www.davidbaumgold.com/tutorials/command-line/). You can have the output print directly to the terminal console.

[Source Files](https://github.com/mariobox/command-line-apps) <hr class="art" />

I recently wrote three simple command line applications to practice the concepts learned in [Treehouse](http://referrals.trhou.se/mariosanchezcarrion)'s (affiliate link) Basic Node course:
1. A weather app
2. A stock quote app, and
3. A currency exchange app

The way these three apps work is this: you call the program from the command line by typing 
<pre><code>node weather.js 33155</code></pre> 

in the case of the weather app. This will print the temperature and weather conditions for zip code 33155 to the console.  You can also pass several arguments, for example: 
<pre><code>node weather.js 33155 27516 13902</code></pre> 

which will generate three lines of output, one for each zip code entered. The output will look like this:

<pre><code>Temperature in Miami, FL 33155 is 88.5F and it is currently Clear.
Temperature in Binghamton, NY 13902 is 80.1F and it is currently Rain.
Temperature in Chapel Hill, NC 27516 is 93.6F and it is currently Cloudy.</code></pre>

The stock quote app and the currency exchange app work just the same: you call the program passing along one or more arguments (stock symbols or currencies in abreviated form) and the program will print the output to the console.

This is how the input and the output of the stock quote app look:

<pre><code>node stocks.js GE AAPL FB
GE stock price closed at 25.91
AAPL stock price closed at 150.27
FB stock price closed at 164.43</pre></code>

This is how it looks in the currency exchange app:
<pre><code>node fx.js GBP EUR BRL
One GBP is equal to 1.2992 US Dollars
One USD is equal to 0.769704433497537 GBP
One EUR is equal to 1.1642 US Dollars
One USD is equal to 0.8589589417625838 EUR
One BRL is equal to 0.32138 US Dollars
One USD is equal to 3.111581305619516 BRL
</pre></code>


What is happening behind the scenes is that the program is using Node's <code>http.get</code> or <code>https.get</code> methods to get information from a JSON file provided by an [API](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82) (application programming interface).  For example, in the case of the weather app, it is using Weather Underground's API. To use an API you need an API key, which will be given to you when you sign up.

If you want to take a look at these three programs under the hood I've placed the [source code](https://github.com/mariobox/command-line-apps) on Github. You can clone the repository and try to run the apps from your terminal's command line. Remember to replace where it says "yourapikeygoeshere" with your own API key, or the programs will not run (except the currency exchange app, where the API I'm using does not require a key).


