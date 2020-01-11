---
title: "How to Create a Simple Static Site With Gulp"
slug: gulp
type: blog
label: Blog
date: 2017-08-16
blurb: ""
tags: tech, advanced
---

The objective of this project is to build a very simple static site containing just three pages: *index.html*, *about.html*, and *contact.html*.  Rather than creating each page individually, we will use Gulp's "gulp-concat" module to build each page by combining a *header.html* file, a *footer.html* file and a page body file, and serve the consolidated pages to a "public" folder where they will be ready for deployment.

The advantage of doing it this way is that if we want to add a menu item to our navigation, or change the copyright year in our footer, we will only have to do it in one place as opposed to each file. This may not sound like a big deal in a three-page site like the one on this project, but it would be a different story if we were dealing with a 50+ page site.

We also want to use Gulp to compile Sass into CSS, using the "gulp-sass" module. We will create a Sass style sheet called *minimal.scss*, which is basically equal to the *minimal.css* style sheet we're using for this site, with the exception of three variables which are listed at the top of our Sass file: one for the color of the top horizontal bar and links, and two for fonts.  We don't want to create a more complicated Sass file, since the idea of this project is not to work with Sass but to learn how to use Gulp.

If you want to follow along, you can find the all the project files in this [Github repository](https://github.com/mariobox/gulp-static-site).

Before we start, we need to make sure that we have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (node package manager) installed.

Then we can create a folder for our project, navigate to that folder, and create a "package.json" file by typing:

<code>npm init</code>

from the command line, and filling in the requested information (or just hit enter all the way through).

We then need to install all the Gulp modules we're going to use in our project, and save each of them to our "package.json" file as a development dependency, starting with Gulp itself, like this:

<code>npm install gulp --save-dev</code>

We also need to install Gulp globally:

<code>npm install gulp -g</code>

We then install all our other modules as dev dependencies, following the same syntax.  Check your "package.json" to make sure all of them are there:

<pre><code>
{
  "name": "testgulpsite",
  "version": "1.0.0",
  "description": "simple static site made with gulp",
  "main": "gulpfile.js",
  "dependencies": {},
  "devDependencies": {
    "del": "^3.0.0",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.1",
    "gulp-livereload": "^3.8.1",
    "gulp-sass": "^3.1.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "MSC",
  "license": "ISC"
}
</code></pre>

As you can see, the Gulp modules we're going to be using are:

* gulp
* gulp-concat
* gulp-del
* gulp-livereload
* gulp-sass

Next, we need to create a "gulpfile.js", which will contain the all the Gulp tasks that we will define for our workflow. You can see our gulpfile.js [in Github](https://github.com/mariobox/gulp-static-site).

The first thing you need to do in your "gulpfile.js" is to declare variables for all the Gulp modules you're going to use, and place them  at the top of the file, like this:

<pre><code>
var   gulp = require('gulp'),
    concat = require('gulp-concat'),
       del = require('del'),
livereload = require('gulp-livereload'),
      sass = require('gulp-sass');
</code></pre>

You can then start to define your tasks. I'm not going to explain exactly every step I went through to create my "gulpfile.js", since I only want to give you an idea of what's possible. I'm just going to mention some of the tasks. This, for example, is a task to concatenate partial html files:

<pre><code>
gulp.task("concatIndex", function() {
  gulp.src(['partials/header.html', 'partials/indexbody.html', 'partials/footer.html'])
  .pipe(concat("index.html"))
  .pipe(gulp.dest("public"))
  .pipe(livereload());
});
</code></pre>

<br/>
This code tells Gulp to take the source files in the array in the order they appear, and combine them into a single file called *index.html*. Then, it instructs Gulp to place the newly created *index.html* file in a folder called "public".  The ".pipe(livereload())" instruction is there just to tell the [gulp-livereload](https://www.npmjs.com/package/gulp-livereload) module to reload the browser automatically every time we make a change. This is very useful, since otherwise you would have to continuously refresh the page by hand. 

The way you run tasks is by typing <code>gulp [nameOfTheTask]</code> from the command line. In the case of our previous task it would be <code>gulp concatIndex</code>.

Another task you can define is "compileSass", so that Gulp can translate your Sass style sheets into CSS, to be understood by the browser. The syntax for such a task looks like this:

<pre><code>
gulp.task('compileSass', function() {
  return gulp.src("scss/minimal.scss")
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});
</code></pre>

You can also define a task to run all the necessary tasks to build your site at once, so you don't have to call them one by one. That would be the "build" task defined here:

<pre><code>
gulp.task("build", ['compileSass', 'concatIndex', 'concatAbout', 'concatContact'], function() {
  return gulp.src(["css/*", "img/*", "js/*"], { base: './'})
  .pipe(gulp.dest('public'))
  .pipe(livereload());
});
</code></pre>
<br />
The "build" task tells Gulp to run the tasks in the second argument (the array) in the order they appear, then take the "css", "img" and "js" folders and copy them in the "public" folder where they will be ready for deployment.

Our gulpfile.js also contains a "clean" task, that uses the "gulp-del" module to erase the "public" folder completely. It looks like this:

<pre><code>
gulp.task('clean', function() {
  del(['public'])
});
</code></pre>

Finally, it also contains a "watch" task to tell Gulp to watch for changes on files in a group of folders and run the "build" task automatically every time it detects any change. With the "watch" task we are basically automating our site developing process. The only thing we need to do to update our site is to make changes to the source files and Gulp will do the rest. Our "watch" task looks like this:

<pre><code>
gulp.task("watch", function() {
  livereload.listen();
  return gulp.watch(['partials/*.html', 'scss/*', 'img/*', 'js/*'], ['build'])
})
</code></pre>
<br />
If you want to see how your site changes in real time you will need to run a server: just open a new terminal window and type <code>http-server</code> and it will let you know what port to look. (I am assuming you have already installed [http-server](https://www.npmjs.com/package/http-server) using npm install).

As I hinted before, this post is only meant to give you an idea of what you can do with Gulp, not to teach you Gulp. For that, there is a [very good course](https://teamtreehouse.com/library/gulp-basics) at [Treehouse](http://referrals.trhou.se/mariosanchezcarrion).
