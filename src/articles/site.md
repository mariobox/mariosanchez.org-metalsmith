---
title: "How This Site Is Made"
slug: site
type: blog
label: Blog
date: 2020-01-15
blurb: 
tags: tech
---

This site has gone through several iterations. 

First it was a [static website](https://techterms.com/definition/staticwebsite), hand-coded page by page. Now, it is still a static site, but made in a more efficient way, using a static site generator. I am currently using [Metalsmith](https://metalsmith.io), although in the past I have used [Hugo](https:gohugo.io) and [Jekyll](https://jekyllrb.com). All of them are great.

A static site generator is basically a program (written in Python, JavaScript or some other language) that combs through one or more folders containing content (like blog posts) and deploys that content in pre-designed templates to generate the individual HTML pages. 

For example, something like <code>{{ title }}</code> on a template would be a placeholder for the title of a post. When the program runs, it will open a content file, identify the title, and plug it where the curly braces are. There are placeholders for other elements as well, like the body of the post, the date, etc..

Another advantage of a static site generator is that it can use templates called &ldquo;partials&rdquo; for the common areas of the site, like the header and footer. For example, if you want to add an item to your navigation menu and your site has 100 pages, you don't need to change the menu in those 100 pages. You just change it on the header template, and the static site generator will update all your pages automatically.

The final collection of all the HTML pages generated is usually placed inside a folder called &ldquo;public&rdquo;. You can then push the contents of that folder to the open web via a [File Transfer Utility](https://filezilla-project.org/) or, if you're more advanced, via [Git](https://git-scm.com/) or [SSH](https://en.wikipedia.org/wiki/Secure_Shell).

That, in a nutshell, is how this site is made.

As far as the look and feel is concerned, I'm using a style sheet that I hand-coded myself. I think the dark theme looks cool :)

--------

The basic workflow I follow to update this site goes like this:

Open my text editor and write a blog post or page using [Markdown](https://daringfireball.net/projects/markdown/).

Save the file and open my terminal. Then, navigate to the site's directory:

`cd /Websites/mariosanchez.org`

Run Metalsmith: 

`npm start` 

(This instructs the static site generator to comb through my posts directory and convert the Markdown files to HTML, and save them in the `public` folder.)

Add the files (except those in the `public` folder) to my Git repository:

`git add .`

`git commit -m "wrote a post"`

Push the files to my Github remote repository: 

`git push origin master`

Push the static files in the `public` folder to my Digital Ocean VPS by running: 

`./deploy.sh` 

(`deploy.sh` is a custom bash script that syncs the contents of the `/Websites/mariosanchez.org/public` folder in my local computer with the `/var/www/mariosanchez.org/html` folder in my VPS. `/var/www/mariosanchez.org/html` is the folder that Digital Ocean uses to serve my site to the open web.)

Open the browser, navigate to the site and check that my changes are now live on the web.

