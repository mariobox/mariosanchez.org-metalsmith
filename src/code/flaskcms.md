---
title: "Basic CMS with Flask, Jinja and SQLite"
slug: flaskcms	
date: 2018-12-20
source: "https://github.com/mariobox/flask-blog"
demo: "#"
blurb: ""
tags: tech, python, flask, jinja, sqlite
---

**Made with**: <i class="icon-python"></i>Python

**Project Summary**: 

Basic CMS with Flask, Jinja and SQLite

[Source Files](https://github.com/mariobox/flask-blog) <hr class="art" />

I created this app as part of my CS50x final project.

The specs called for a rudimentary content management system where you can write blog posts, store them in a database and display them on an index page (newer posts first). It also needed to allow users to register and log in, and the ability for registered users to edit and delete posts.

The index page, while not logged in, looks like this:

<img src="https://66.media.tumblr.com/9ce7d2dcc65e959f4be0a04bff726487/tumblr_pk1w9gZUii1qz7ur9o1_1280.png" />

The posts are stored in a SQLite database and displayed via a &#8220;SELECT * FROM posts ORDER BY id DESC" query in the &#8220;/&quot; route.

The registration page shows you a form with several fields, indicating the conditions for each field to become valid:

<img src="https://66.media.tumblr.com/595c2e9aa77b0f48a17c62928c3e9e96/tumblr_pk1w9gZUii1qz7ur9o3_1280.png" />

The form validation function uses jQuery for several of the fields, so that we don't have to send a request to the server every time.

Once registered, you are redirected to a login page:

<img src="https://66.media.tumblr.com/7c05ef2cdddffad133837b7b459bc25f/tumblr_pk1w9gZUii1qz7ur9o4_1280.png" />

Once logged-in, you can edit and delete posts just by clicking the appropriate button:

<img src="https://66.media.tumblr.com/3777d1162b93a25054649abe47c096fd/tumblr_pk1w9gZUii1qz7ur9o5_1280.png" />

You can write and edit posts in HTML to give them nice formatting. 

<img src="https://66.media.tumblr.com/0f699d3ea6891905e58ea336541953d2/tumblr_pk1w9gZUii1qz7ur9o2_1280.png" />

Since the post content is written in a textarea of a form, you have to specifically include the <q>Safe</q> flag for the content to show HTML formatting (check the **arcicle.html** template).

If you want to see the blog in action, fork the repository to your own computer and perform the following commands from the command line in your project folder:

<code>export FLASK_APP=application.py</code><br />
<code>flask run</code>

This assumes you have Python, Flask and SQLite installed in your computer, as well as the following modules necessary to run application.py:

<code>
from cs50 import SQL</code><br />
<code>from flask_session import Session</code><br />
<code>from flask import Flask, render_template, redirect, request, session, jsonify</code><br />
<code>from datetime import datetime</code>

This assumes you have Python, Flask and SQLite installed in your computer, as well as the following modules necessary to run application.py:

<code>
from cs50 import SQL</code><br />
<code>from flask_session import Session</code><br />
<code>from flask import Flask, render_template, redirect, request, session, jsonify</code><br />
<code>from datetime import datetime</code>
