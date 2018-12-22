---
title: "How To Create a Minimal Hugo Site"
slug: minihugo
date: 2016-05-30
source: "https://github.com/mariobox/MinimalHugoSite"
demo: "http://mariobox.github.io/minimalhugodemo/"
blurb: "A barebones but funcional Hugo blog"
tags: tech, go, hugo
---

These are the instructions to create a minimal, functional Hugo site. For more information read the [Hugo Documentation](http://gohugo.io/overview/introduction/).

#### Download Hugo 

You can download Hugo for many different platforms from the [Hugo site](http://gohugo.io).

-----

#### Copy hugo.exe on a working folder

Create a folder (you can name it /projects/) under your root, and then navigate to that folder by typing

<pre><code>cd projects</code></pre>

-----

#### Create a new Hugo site in a subfolder of /projects called /projecthugo

<pre><code>hugo new site ~/projects/projecthugo/</code></pre>

-----

#### Go to your Hugo site folder

<pre><code>cd projecthugo</code></pre>

-----

#### List the contents of the /projecthugo folder

<pre><code>ls</code></pre>

You should now see a skeleton with the basic structure of a Hugo site but no content or any of the folders or files:

<pre><code>archetypes  config.toml content layouts static data</code></pre>

-----

#### Install Hugo in your path.

Copy the hugo.exe into your /projecthugo folder.

Do <pre><code>ls</code></pre> 

again and you should now see the hugo executable:

<pre><code>archetypes  config.toml content layouts static data hugo.exe</code></pre>

-----

#### Create some posts

<pre><code>hugo new post/post1.md</code></pre>

Open post1.md with your favorite text editor and you will see three fields already pre-written in the top section of the file, called "front matter" (between the +++ marks). By default, Hugo includes:

* Title
* Date and 
* Draft 

You can add more parameters later (like Categories or Tags).

Hugo will match the title of your post with your post file name, so if you want to call it something different just replace the text between quotes in the Title field in the front matter.

Now you can write some content below the second +++ line (leave one or two lines blank at the beginning).

If you want your post to go live remember to change <pre><code>draft = true</pre></code> for <pre><code>draft = false</code></pre>

If you keep it as draft your post will not show on your site.

Create another post called post2.md following a similar process.

-----

### Create a couple of pages that are not posts

These would be pages like **about** or **contact**.

<pre><code>hugo new about.md</code></pre>

and

<pre><code>hugo new contact.md</code></pre>

Open your favorite text editor and create some content for about.md and contact.md

-----

#### Create _default templates

You will create four templates and place them in a folder called /layouts/_default:

- single.html
- list.html
- summary.html
- li.html

* Single is for your individual content (e.g. posts or pages)
* List is for a list of posts.
* Summary and li are views that will be used in your list template, depending if you just want a list of posts titles or a summary of each post in addition to the title.

The Hugo documentation provides instructions on what code to use in each of them.

You can create section specific templates if your site is larger but for now _default templates are all we need.

-----

#### Create partial templates

These are good for the common areas of your site. Go ahead and create:

* header.html (must include a link to the style sheet and the site's navigation)
* footer.html (for copyright or similar info)

Place these templates in a folder called /layouts/partials/. These partial templates can be called from any other template (for example from single.hmtl or list.html) by simply using the following code within those templates:

<pre><code>{{ partial "header.html" . }}</code></pre>

or 

<pre><code>{{ partial "footer.html" . }}</code></pre>

-----

#### Create an index.html template

This template is only used for the home page. Create it however you want your home page to look and place it in the root of the /layouts folder.  You can also choose to use a list of posts as your index page. In that case just save the list template as index.html

-----

#### Create a /static/css folder and upload a style sheet.

Don't forget to link to the style sheet from the header.html partial template:

<pre><code>link rel="stylesheet" type="text/css" href="/css/style.css"</code></pre>

You need to include the above code between <>.

-----

#### Create a /static/images folder and upload some images.

Self explanatory.

-----

#### Update your config.toml file

Just add the URL of your site and your site's description. That's all you're going to need to start. You can add more parameters later.

-----

#### Try out your site

Once you have created content and templates it's time to view your site. Type the following command:

<pre><code>hugo server -w</code></pre>

If everything went well Hugo will generate your website and you will be able to see it at http://localhost:1313 . 

-----

#### Get your site ready to upload

Once you're satisfied with the way your site looks, run the hugo command by itself:

<pre><code>hugo</code></pre>

You are now ready to upload or git push your site to your web hosting service. Your site files will be in a folder called /public.

-----

**Update:**

If you don't want to start from scratch, I have created a Minimal Hugo Site and git pushed the [source code](https://github.com/mariobox/MinimalHugoSite) to Github. 

You can simply clone the repository by running:

<pre><code>git clone https://github.com/mariobox/MinimalHugoSite.git</code></pre>

Here is a [live demo](http://www.mariosanchez.org/minimalhugodemo/).
