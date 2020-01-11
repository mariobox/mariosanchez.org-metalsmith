---
title: "Simple and Stylish Circular Progress Bar"
slug: progresscircle
type: code
label: Portfolio
date: 2017-12-15
source: "https://github.com/mariobox/progress-circle"
demo: "https://mariobox.github.io/progress-circle"
blurb: ""
tags: tech, javascript
---

<img src="../img/progresscircle.png" />

**Made with**: <i class="icon-javascript-alt"></i> JavaScript and <i class="icon-css3-alt"></i> CSS3

**Project Summary**:

JS app that creates an animated and stylish progress bar around a circle with the progress score written in the center.

[Source Files](https://github.com/mariobox/progress-circle) | [Live Demo](https://mariobox.github.io/progress-circle)<hr class="art" />

I started with [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/) by Kimmo Brunfeldt, which does most of the heavy lifting. You can add it your project by including a link near your closing body tag to the [CDN repository](https://cdn.rawgit.com/kimmobrunfeldt/progressbar.js/0.5.6/dist/progressbar.js) where progressbar.js resides.

I used Progressbar's circle as the base for my project (you can use other geometrical shapes), which is intended to create an animated score dashboard to display at the end of a quiz. I then customized the shape with the following options:

1. I inserted the actual score in number format, centered in the middle of the circle. For this, I had to play with HTML id's and classes, and CSS absolute and relative positioning. Since the score is passed to a variable, I passed the variable to the &#8220;animate" function that draws the progress bar around the circle. For example, if the score is 8, the progress bar will only display around 80% of the circle (like in the image at the beginning of the article).

2. I Gave the progress bar different colors, depending on the score, which runs from 0 to 10 (but you can use any range just by tweaking the code). If the score is between 0 and 3, the progress bar is red. Between 4 and 7 it is yellow, and between 8 and 10 it is green.

You can try it out here:

<div style="text-align: center">
<iframe src="https://mariobox.github.io/progress-circle" style="height: 400px; border=none;"></iframe>
</div>
