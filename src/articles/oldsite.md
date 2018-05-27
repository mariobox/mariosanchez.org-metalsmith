---
title: "How to Use Github to Retrieve an Older Version of Your Site"
slug: oldsite
date: 2018-05-28
blurb: 
tags: tech
---

By using Git + Github, all the commits you've ever made since your initial commit are available to you. You can just follow these steps to access a previous iteration of your site:

1. Go to your site's Github repository.
2. Click on the link showing the total number of commits in the repository (it should be at the top left of the table showing all your files and folders). After clicking on the link, a list of commits should pop up.
3. Navigate to a commit made on the date you want. For example, if you want to retrieve your site the way it looked in March 22, 2015, find a commit made on that day.
4. Click on the commit hash located to the right of the commit description. It should be a combination of letters and numbers, like `0f7411e`. After you click on it, you should see the details of that particluar commit, and a &#8220;Browse Files&#34; button at the top right of the table.
5. Click on the &#8220;Browse Files&#34; button. You should now see all your site's files.
8. Click on the green &#8220;Clone or Download&#34; button at the top right of the table and then follow the normal process to [clone the repository](https://help.github.com/articles/cloning-a-repository/) to your local computer.
9. In your local computer, navigate to the newly created folder where the files you just cloned are located, and open the `index.html` file with your broswer. You should now see your site, exactly like it looked on March 22, 2015! 