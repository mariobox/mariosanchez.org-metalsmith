---
title: "Moving My Site to a Digital Ocean VPS"
slug: vps
date: 2017-06-18
blurb: ""
---

I just moved my site to a [Digital Ocean virtual private server (VPS)](https://m.do.co/c/b96aa4f9fdfd) (referral link). I had been wanting to do it for a long time but it seemed complicated, and using Github Pages to host my site was both easy and convenient. In the end, my desire to learn how to operate a VPS won over the convenience of Github, and I decided to take the plunge.

First, I created a simple *Hello World!* HTML page and, after some trial and error, was able to deploy it to a VPS using a domain name that I had lying around. Since that worked, the next logical step was to try to move my site. Moving my site was slightly more complicated because I'm using a static site generator, which adds a few more steps and nuances to the process. 

In the end, it took some concentration, three or four hours of uninterrupted time, and heavy use of Google and Stack Overflow, but the move was successful and my site now resides in its own Digital Ocean virtual private server (or "droplet", as DO likes to call their VPS's).

Below are the series of steps I took:

### Setting Up the VPS

1. [Create a new Digital Ocean VPS](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet-virtual-server).
2. SSH into the VPS and create a new user. 
3. Give the new user superuser privileges, and set up SSH keys for the new user so that I won't have to log in as root. 
4. Disable root login (for extra security). [This article](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04) shows how to do 2, 3, and 4.
5. [Configure my domain name](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean). I did it slightly differently than the article explains: I didn't point the domain name servers to Digital Ocean since I wanted to keep using Godaddy's email forwarding feature (which would have been disabled if I had moved my DNS to DO). Instead, I just created an A record pointing *@* to the I.P. of my VPS, and a CNAME pointing *www* to *@*. I then went to Godaddy and did exactly the same thing.
6. [Install a NGINX web server](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts). Pretty straight forward.
7. [Create server blocks and configure one for my site](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts). Server blocks let you host multiple sites on the same server. I also did this part slightly differently than explained in the article: I left the default server location intact, so that when I type the I.P. of my VPS in the browser's address bar it still shows the standard NGINX welcome message. Basically, this means that I set up my site like the *test.com* example site in the article. 

### Moving my site

1. SSH into the VPS and [install Node and Node package manager](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04). This is necessary because my site runs on Metalsmith, which is made with Nodejs.
2. Create a directory called *git*, where all the projects that I want to track using version control will reside, and inside it create a directory called *mariosanchez.org*, to host the site's source files. 
3. Navigate to *mariosanchez.org* and clone my [remote Github repository](https://github.com/mariobox/mariosanchez.org). 
4. Open the *build.js* file and change the name of the folder where the static files are served from */public* to */var/www/mariosanchez.org/html*.
5. Go to the site's Github repository and make the same change to the *build.js* file. 
6. From my local computer, do `git pull origin master` to incorporate the change in 5, so both local and remote repositories are in sync, and immediately revert the *build.js* file to serve the site to */public* again (why do this will become clear in the next step)
6. In my local computer open the *.gitignore* file and add *build.js* to the list of sites to ignore. This is necessary because in my local computer *build.js* needs to deploys to */public* (instead of */var/www/mariosanchez.org/html*). By ignoring telling Git to ignore *build.js* we make sure that the remote Github repository won't revert back to */public* next time I `git push` some changes.

### Updating my site

1. Open my site's folder in my local computer, make some changes, `git add`, `git commit` and `git push` to Github.
2. SSH into my VPS and navigate to the project folder: */git/mariosanchez.org*. Do `git pull origin master` to incorporate the changes made in 1.
9. Run `npm start` to simultaneously generate and deploy my changes to the web.
10. Open the browser, go to site, and make sure everything looks OK.


