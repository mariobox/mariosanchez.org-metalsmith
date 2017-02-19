---
title: "Stack"
blurb: ""
layout: page.html
---

<img src="http://66.media.tumblr.com/4a096d78507ad9616c947ff35e449b17/tumblr_obza4vDzSq1qz7ur9o2_540.jpg" class="roundnew" alt="home computer">

These are the tools I'm currently using for web development:

- **Computer**: Toshiba Satellite C55 (less than $300 at any store in the US). I also have an older Toshiba Satellite that I use to experiment: recently, I wiped out the hard drive and [installed Ubuntu](../ubuntu/). 
- **Operating System**: Windows 8.1
- **Terminal Emulator**: Git Bash (Linux terminal emulator that comes with [Git for Windows](https://git-scm.com)).
- **Static Site Generator**: [Metalsmith](https://metalsmith.io), a simple, pluggable static site generator made with JavaScript.
- **Responsive Framework**: [Skeleton](http://getskeleton.com).
- **Icon Toolkit**: [Font Awesome](http://fontawesome.io) and [Font Mfizz](http://fizzed.com/oss/font-mfizz).
- **Version Control**: [Git](https://git-scm.com).
- **Text Editor**: [Visual Studio Code](https://code.visualstudio.com/).
- **Image Bank**: [Pixabay](http://pixabay.com).
- **Hosting**: [Github Pages](https://pages.github.com/).
- **Cloud Server**: [Digital Ocean](http://digitalocean) virtual private servers (VPS).

-------

The basic workflow I follow to update this site goes like this:

1. Write posts or page content in [Markdown](https://daringfireball.net/projects/markdown/).
2. Go to the root folder of my project: `/` and run Metalsmith: `npm start`. This converts the markdown files to HTML and saves the updated site in the `/public` folder.
3. Git commit the changes in the `/` root folder and in the `/public` folder: `git add --all` and `git commit -m "made some changes"`.
4. Push the source files in the `/` folder and the HTML site in the `/public` folder to Github: `git push origin master`.
5. Open my browser and check that the site looks fine. If something is off, fix it and go back to #2.
