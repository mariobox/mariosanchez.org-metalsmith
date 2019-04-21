---
title: "Refactoring My Site"
slug: refactor
date: 2017-06-11
blurb: "Cleaning up the CSS and HTML"
tags: tech, beginners
---

After taking a quick look at my CSS style sheets I noticed that there were lots of classes and ID's that were no longer in use. As the HTML of my site went through different iterations, I never really cleaned up the CSS to reflect those changes. I just kept building on top of the existing style declarations to the point that I couldn't recognize what was needed and what not. The weeds had taken over the garden.

I decided to use a radical approach: start with a blank document and build the CSS from scratch, property by property, with the goal of making my site look the same, plus some subtle improvements.

The first thing I did was to get rid of the multi-column responsive grid. There was no need for it, since my site uses only one column. The next step was to replace the <em>normalize.css</em> reset style sheet with this simple CSS declaration:

<pre><code>* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}</code></pre>

This tiny snippet of code strips all elements on the page of their margin and padding values, so that everything renders the same in all browsers.

Then, I opened the HTML template files and removed all references to classes, ID's and elements that were not being used or that I wasn't going to use any more. I also took the opportunity to properly indent the HTML to make it easier to read. Since I'm using [Metalsmith](../metalswitch/), I have templates for the header, footer, blog posts, blog post list, stand-alone pages and index page (Metalsmith grabs them one by one and builds the HTML pages you see on the web. That's why Metalsmith is called a [static site generator](https://davidwalsh.name/introduction-static-site-generators)).

Once the HTML had been cleaned up, I moved to the CSS file, adding style declarations one by one to get to the look and feel that I wanted, using the minimum amount of code. I followed a mobile-first approach, which means that I made the site look good in mobile devices first, and then added a few media queries to make it render well in larger devices.

I also took the opportunity to make minor changes to the way the site looks. Since my goal is to keep this site looking as plain and minimalistic as possible while still being pleasant to the eye, I went easy on the changes. Basically, I just changed the color of the links, the font family (to [Catamaran](https://fonts.google.com/specimen/Catamaran)), and made the size of the headings and navagation menu items smaller.

After that, I went through every page checking for broken links and things that didn't look good, and made the necessary fixes.

Once everything looked OK, I <em>git committed</em> and <em>git pushed</em> the changes to the server.

The final step was to validate the code. For that, I headed up to the [W3 markup validation page](https://validator.w3.org/) and typed in the URL of my site. The validator discovered a couple of minor issues (two unclosed div's), so I went back and fixed that. I then ran the validator again and everything was fine.

My site is now looking better than before, loads super fast, the [CSS file is clean and easy to understand](/minimal.css) with no unnecessary properties, and the HTML is W3 compliant.

The next step will be to add a [hamburger menu](https://www.computerhope.com/jargon/h/hamburger-menu.htm) for mobile screens, so that when someone clicks on it, it displays the menu options. However, I think I'll rather leave the site alone for now, and spend my time learning some intermediate JavaScript.
