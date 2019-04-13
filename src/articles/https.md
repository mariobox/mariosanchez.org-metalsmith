---
title: "How To Enable HTTPS For Your Website"
slug: https
date: 2018-05-19
blurb: 
tags: tech
---

I recently configured my web server to serve this site over HTTPS. 

HTTPS, or Hyper Text Transfer Protocol Secure is the secure version of HTTP, the protocol over which data is sent between your browser and a website. The 'S' at the end of HTTPS stands for 'Secure'. This means all communications between your browser and a website are encrypted. (Learn [why you should use HTTPS instead of plain HTTP](https://www.eff.org/encrypt-the-web)). 
  
To enable HTTPS on my site I used [Certbot](https://certbot.eff.org/about/), an automatic tool that fetches and deploys a [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) certificate on your webserver. In their own words "Certbot is the most extensive client and can automatically configure your web server to start serving over HTTPS immediately".
  
The certificate deployed by Certbot is issued by [Let's Encrypt](https://letsencrypt.org/), a free, automated, and open [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority), run for the public’s benefit. Let's Encrypt is a joint project by the [Electronic Frontier Foundation (EFF)](https://www.eff.org), [Mozilla](https://mozilla.org) and many other sponsors.
  
In my case, I am running a [Digital Ocean](https://m.do.co/c/b96aa4f9fdfd) (aff. link) Nginx server on Ubuntu 16.04, so all I had to do to enable HTTPS on my server was to follow [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04). 
  
If you decide to use Let's Encrypt on your site too, please consider sending them a [donation](https://letsencrypt.org/donate/). Your contribution will support those who are working to create a more secure and privacy-respecting web.

