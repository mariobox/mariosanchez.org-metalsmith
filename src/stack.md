---
title: "Stack"
slug: stack
date: 2019-04-15
blurb: 
tags: tech
---

<img src="../img/ubuntu2.jpg" class="profile medium" alt="home computer">

These are the tools I'm currently using for web development:

- **Computer**: Toshiba Satellite C55. 4Gb of RAM. Intel Celeron N2830 dual core processor.  It's a little underpowered, but it was cheap (~$250) and does the trick for now. 
- **Operating System**: [Ubuntu 18.04 LTS](https://www.ubuntu.com/download/desktop). I also enabled a second partition to run Windows 10 just in case I needed (never, so far).
- **Static Site Generator**: [Metalsmith](https://metalsmith.io), a simple, pluggable static site generator made with JavaScript.
- **Responsive Framework**: Custom CSS: [minimal.css](/css/minimal.css).
- **Version Control**: [Git](https://git-scm.com/) and [Github](https://github.com/mariobox).
- **Text Editor**: [Visual Studio Code](https://code.visualstudio.com/).
- **Hosting**: Nginx virtual private server running on an Ubuntu 16.04 droplet at [Digital Ocean](https://m.do.co/c/b96aa4f9fdfd) (referral link).
- **Email Client**: [Thunderbird](https://www.thunderbird.net/en-US/) with Enigmail (for encryption).
- **SSL/TLS** Certificate by [Let's Encrypt](https://letsencrypt.org), to serve this site through HTTPS.

-------

The basic workflow I follow to update this site goes like this:

1. Go to the folder in my computer where the files for this site are located: `cd Websites/mariosanchez.org`
2. Write posts or page content in [Markdown](https://daringfireball.net/projects/markdown/).
3. From `/Websites/mariosanchez.org` run Metalsmith: `npm start`. This converts the markdown files to HTML and saves them in the `/Websites/mariosanchez.org/public` folder.
4. Git commit the changes by running the following commands from the `/Websites/mariosanchez.org` folder: `git add --all` and `git commit -m "made some changes"`.
5. Push the files to Github's remote repository: `git push origin master`.
6. Push the static files in the `/Websites/mariosanchez.org/public` folder to my Digital Ocean VPS by running `./deploy.sh` from the `/Websites/mariosanchez.org` folder. `deploy.sh` is a custom bash script that syncs the contents of the `/Websites/mariosanchez.org/public` folder in my local computer with the `/var/www/mariosanchez.org/html` folder in my VPS. `/var/www/mariosanchez.org/html` is the folder that Digital Ocean uses to serve this site to the open web.
7. Open the browser, navigate to the site and check that everything looks OK. If something is off, fix it and go back to #3.
