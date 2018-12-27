---
title: "Simple To Do List with ReactJS"
slug: reacttodo	
date: 2018-12-27
source: "https://github.com/mariobox/react-todo"
demo: "http://mariobox.github.io/react-todo-demo"
blurb: ""
tags: tech, javascript, react
---

**Made with**: <i class="icon-reactjs"></i> ReactJS

**Project Summary**: 

A very basic To Do app made with ReactJS

[Source Files](https://github.com/mariobox/react-todo) | [Live Demo](http://mariobox.github.io/react-todo-demo) <hr class="art" />

This is a simple implementation of a To Do list to show ReactJS's basic features: components, props and state.

<img src="https://66.media.tumblr.com/80b5e831b75a9c617c52d013baf8d384/tumblr_pkeoj0MHGO1qz7ur9o1_1280.png" />

As starting point, we used <code>create-react-app</code>, a node package developed by the creators of ReactJS that provides the basic scaffolding you need to create a ReactJS site. If you don't have it installed you can get [instructions here](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f).

Once that's done, we go to the App.js component and remove everything we don't need. The App.js component will hold all the elements and components we need to render the web page of the application.

Aside from App.js, we need two other components: ToDoList.js, which contains our TODO list, and ToDo.js, which contains an individual TODO item.

The state of our application will reside in our main App.js component, and passed to the other components via props.

We can add TODO's through an input field. Each new TODO is added to our state and stored in an array which is also monitored by our app's state. When an item is added to the TODO list array, the array is passed to the ToDoList.js component via props, and the ToDoList.js component will map through the array and pass each task to the individual ToDo.js compenent so that it can render it to the screen as a checkbox form item.

When a task is completed, you can just click on the checkbox next to the task, and instructions to remove that item from the TODO list array is passed from our ToDo.js component to our ToDoList.js component, and from there to our main App.js component using event handlers and callback functions passed via props. App.js will then update state and re-render page: the TODO list will be re-rendered, this time without the item we just removed.

To make the app look nicer, we have also added some Bootstrap classes.

Bear in mind that this app is only the front end of a TODO list (there is no database) so your TODO list will disappear once you close your browser. For the purposes of this project, however, that is perfectly fine, since we only want to showcase a simple implementation of ReactJS components, props and state. 

