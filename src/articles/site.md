---
title: "How This Site Is Made"
slug: site
type: blog
label: Blog
date: 2020-01-15
blurb: 
tags: tech
---

This site has gone through several iterations, although it has always been a [static site](https://techterms.com/definition/staticwebsite).

First I hand-coded it page by page, since I didn't know there was a better way: static site generators. 

Static site generators are programs that create static sites in a more efficient way, and they're ideal for blogs, or for small to medium sites where content doesn't change based on user input. A static site generator can be written in any programming language. Some of the most popular ones are build with Python, JavaScript, Ruby or Go. 

What these programs do is comb through one or more folders containing content files usually written in [Markdown](https://daringfireball.net/projects/markdown/) (e.g. blog posts) and converts them to HTML so that browsers can understand them.

Static site generators use templating engines. A templating engine picks up specific parts of the content files and places them inside an HTML template. For example, something like <code>{{ title }}</code> in an HTML template would be a placeholder for the title of a post. When the program goes through the files in the content folder, it opens a file, identifies the title, and plugs it in the HTML template where the curly braces with the word &ldquo;title&rdquo; are. There are placeholders for other elements as well, like the body of the post, the date, etc.

Templating engines also provide templates called &ldquo;partials&rdquo; for the common areas of the site, like the header and footer. For example, if you want to add an item to your navigation menu and your site has 100 pages, you don't need to edit 100 pages. You just edit the header template, and the static site generator will apply it to all your pages automatically the next time it runs.

Once all the HTML pages on the site have been generated, they are usually placed inside a folder called &ldquo;public&rdquo; or &ldquo;build&rdquo;. You can then push the contents of that folder to the open web via a [File Transfer Utility](https://filezilla-project.org/) or, if you're more advanced, via [Git](https://git-scm.com/) or [SSH](https://en.wikipedia.org/wiki/Secure_Shell).

That, in a nutshell, is how this site is made and how static site generators work.

I am currently using a JavaScript-based static site generator called [Metalsmith](https://metalsmith.io), although in the past I have used [Hugo](https:gohugo.io) and [Jekyll](https://jekyllrb.com). All of them are great.

As far as the look and feel of the site is concerned, I'm using a custom style sheet that I hand-coded myself. 

--------

The basic workflow I follow to update this site goes like this:

Open my text editor and write a blog post or page using [Markdown](https://daringfireball.net/projects/markdown/). This is how [this post](https://raw.githubusercontent.com/mariobox/mariosanchez.org/master/src/articles/site.md) looks written in Markdown.

I then save the file, open my terminal and navigate to the site's directory:

`cd /Websites/mariosanchez.org`

Next, I run Metalsmith: 

`npm start` 

This instructs the static site generator to comb through my posts directory, convert the Markdown files to HTML, and save them in the `public` folder.

To Add and Commit the files to my Git repository I type this:

`git add .`

`git commit -m "wrote a post"`

To Push the files to my Github remote repository I do: 

`git push origin master`

To Push the static files in the `public` folder to my Digital Ocean VPS I do: 

`./deploy.sh` 

Note: `deploy.sh` is a custom bash script that syncs the contents of the `/Websites/mariosanchez.org/public` folder in my local computer with the `/var/www/mariosanchez.org/html` folder in my VPS. `/var/www/mariosanchez.org/html` is the folder that Digital Ocean uses to serve my site to the open web.

Finally, I open the browser, navigate to the site and make sure that my changes are now live on the web.

