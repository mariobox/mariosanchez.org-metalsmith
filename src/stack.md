---
title: "Stack"
slug: stack
date: 2019-04-15
layout: page.html
blurb: 
tags: tech
---

<img src="../img/ubuntu2.jpg" class="gallery medium" alt="home computer">

These are the tools I'm currently using for web development:

- **Computer**: Toshiba Satellite C55. 4Gb of RAM. Intel Celeron N2830 dual core processor.  It's a little underpowered, but it was cheap (~$250) and I bought it a few years ago when I was just beginning to code and I still didn't know if I was going to stick to it for the long haul. So far it does the trick, so I haven't bought a new one yet. If you want to know what kind of computer you need [this article](https://www.zdnet.com/article/which-computer-should-i-buy-how-to-find-the-ipad-chromebook-mac-or-windows-pc-thats-right-for-you/) is very helpful.
- **Operating System**: [Ubuntu 18.04 LTS](https://www.ubuntu.com/download/desktop). Some of the most significant developments in the world of programming and web development are easily accessible from the Linux command line. A Windows machine just doesn't cut it for web development, although in the last year or two Microsoft has kind of thrown in the towel and is embracing open source. They even have an Ubuntu native app now that you can use without leaving Windows. Nevertheless, I decided to [install Ubuntu Linux](/ubuntu) in my computer, and so far it has been a good decision.
- **Static Site Generator**: [Metalsmith](https://metalsmith.io), a simple, pluggable static site generator made with JavaScript. There are many good, capable static site generators out there (like [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io)). I just liked the modular approach of Metalsmith more: install only what you need. This [article](/site/) explains a little bit more what is a static site generator and how does it work.
- **Responsive Framework**: Custom CSS: [minimal.css](/css/minimal.css). I decided to create my own style sheet from scratch rather than going with something like Bootstrap, which is more suitable for larger projects. I love the fact that I can control the look and feel of my site from a light-weight style sheet that I can tweak to my liking every now and then. I especially like the current iteration, with the dark theme that you now see.
- **Version Control**: [Git](https://git-scm.com/) and [Github](https://github.com/mariobox). If you want to get into programming, you have to learn version control. Version control basically means keeping records of every change you make to your site, and being able to revert to any previous version easily and flawlessly. Git is by far the best version control system and an industry standard. While Git concepts are not easy to grasp in their entirety, you'll likely end up using just a [few basic commands](/gcs/), and learning them is definitely doeable.
- **Text Editor**: [Visual Studio Code](https://code.visualstudio.com/). What text editor to use is perhaps the most fiercely debated question among programmers. I haven't yet met anybody who doesn't like [Sublime Text](https://sublimetext.com), while the most hard core developers wouldn't even be caught dead using something other than [Vim](https://vim.org). While Sublime Text is perhaps the best blend of power and ease of use, Vim is very hard to learn (after all, it is a clone of the Vi editors that came with early Unix systems). I find Visual Studio Code to be powerful enough for my needs. I especially like the IDE-style interface, where you can see your folders and files to the left, a terminal window at the bottom, and the text editor front and center, so that you don't have to toggle between different screens.
- **Hosting**: Nginx virtual private server running on an Ubuntu 16.04 droplet at [Digital Ocean](https://m.do.co/c/b96aa4f9fdfd) (referral link). Setting up a VPS is a real pain, and the reason I decided to go that route is because I took it as an aspirational project. If you're looking for easier options to host a personal site, I recommend [Github Pages](https://pages.github.com/).
- **SSL/TLS** Certificate by [Let's Encrypt](https://letsencrypt.org), to serve this site through HTTPS (if you decide to host your site in [Github Pages](https://pages.github.com) or [Firebase](https://firebase.google.com) you get SSL by default).


