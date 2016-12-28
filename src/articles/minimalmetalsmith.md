---
title: "How to Create a Minimal Metalsmith Blog"
date: 2016-12-11
blurb: ""
---

I've been experimenting with [static site generators](http://staticsitegenerators.net) for a few months now. I first started with Ruby-based [Jekyll](http://jekyllrb.com/), before settling for Go-based [Hugo](http://gohugo.io), which is what I'm using now to run this site. What I like about Hugo is its simplicity, its many blog-friendly features (like tags and pagination), and the fact that it has a very robust documentation, which is key for relative newcomers like me.

Lately, however, I have been hearing good things about JavaScript and [Node.js](http://nodejs.org) (the ability to run JavaScript in your computer, not just the browser). I searched around for a tutorial to build a basic blog in [Metalsmith](http://www.metalsmith.io/), an increasingly popular static site generator built with JavaScript. If you want to build a basic Metalsmith site there is no better place to start than this [Metalsmith tutorial](https://www.neustadt.fr/essays/crafting-a-simple-blog-with-metalsmith/) by [Parimal Satyal](http://www.neustadt.fr/).

I am not going to repeat the instuctions here because you will be better off just checking out the [tutorial](https://www.neustadt.fr/essays/crafting-a-simple-blog-with-metalsmith/). I am just going to summarize the main steps:

1. Download [Node.js and npm](http://nodejs.org). 
2. Create and navigate to a directory for your project.
3. Create a <code>src</code> folder, where all your content and templates are going to be.
4. Create a <code>package.json</code> file where the meta information about your site is going to be.
5. Download and install [Metalsmith](http://www.metalsmith.io/).
6. Create a <code>build.js</code> file, where the flow of instructions to create your site are going to be.
7. Update <code>package.json</code> to "tell" it to run <code>build.js</code> every time Metalsmith is run.
8. Test-run your installation by typing <code>npm start</code> from the command line.
9. If everything is OK at this point, download all the Metalsmith modules you need, one by one, updating your <code>build.js</code> each time, to add them to the build flow.
10. Create some templates and place them in a folder named <code>/layouts</code>.
11. Write some blog posts.
12. Run Metalsmith by typing: <code>npm start</code>
13. Go to <code>localhost:8082</code> in your browser, and you should see your site there!

Aside from the instructions in the tutorial, I threw in a link to [Bootstrap](http://getbootstrap.com) to give the files some minimal styling.

Don't try to follow the instructions above; they are just notes-to-self to remember the basic steps to create the site. Go to the [tutorial](https://www.neustadt.fr/essays/crafting-a-simple-blog-with-metalsmith/) instead, and follow the instructions carefully.

I have placed the [source files](https://github.com/mariobox/MinimalMetalsmithBlog) of my newly created Minimal Metalsmith Blog in [Github](https://github.com/mariobox/MinimalMetalsmithBlog). You can also see a [Live Demo here](http://www.mariosanchez.org/MiniMetalDemo/).