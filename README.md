# How Do React Good - An Intro to ReactJS

## Pre-Requisites

* NodeJS
* create-react-app 

### NodeJS
---

OS | Method |
--- | --- | 
macOS Recommended | brew install nodejs
macOS Alternative | [.pkg Installer](https://nodejs.org/dist/v8.9.4/node-v8.9.4.pkg)
Windows Recommended | choc install nodejs.install
Windows Alternaive | [.msi Installer](https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi)

### create-react-app
---
`npm install -g create-react-app@latest`

## Initialize

`create-react-app ../clq-react-intro`

__OR__

```javascript
git checkout init
npm install
```

## Starting

`npm start`

A new browser window should open up with your local dev environment. This environment is hot-reloadable
i.e. changes happen in real-time

# Overview of the modern JS landscape
HTML > CSS
JS - DOM manipulation API
  - Adding
  - Rendering
  - ETC

# JS History
Pre ES5 - jQuery
ES5/ES6 - Hugh jumps around 2013
ES7+ - Rolling release

* Protip - Search like a boss by filtering to answers within a year or two
* Very many outdated tutorials
* Be aware of the difference in versions
  * Not all browsers support out of the box so we must use tools to transpile (translate and compile down for backwards compatibility)

# Let's get started
Before React or any other JS, files are normally loaded sequentially
That is
-CSS
-JS

Inspect the order of loading scripts in the HTML

- If you're familiar with HTML, we'll notice there's no CSS/JS file being loaded
- Why is that?
- Tooling
  - Using a template starter pack so a lot of things are obscured for simplified and ease of entry
- We'll discuss this later

# index.js
This is our entry point or the code that runs initially by default (according to this boilerplate setup)

Any JS you load, will run, there's no inherent concept of a main class

We just organize our code in such a way we normally only have one file initialize the rest of the app

- Single Page App
- one html, one js, one page with multiple views that can handle url routing (yet still running under the singular JS app)

We see imports and a function call
imports are loading external pkgs/libs

We can define our pkg dependency using NPM.
We can also import other JS files we define in our application as well, but imports default to the NPM pkg dependency manager first (node_modules)

# ReactDOM.render
This is our app's hook into the HTML.
Basically the HTML acts a shell/container and basically use this to inject our app in the HTML page.

Notice the <App /> "HTML" like element. It isn't a traditional element, but now we can define our elements of these types

# JSX
HTML/CSS/JS has traditionally been the model to separate view/styling/programmable functionality
But as time progressed, this isolation increased overhead as pages and apps got more complicated

JSX acts as a templating mechanism that ties view/programmable functionality together. It's organized in such a way to promote modularity by encouraging isolated components design (think widgets).

It's HTML XML syntax with the ability to use JavaScript to manipulate standard conditions such as

- only show <element> if / else X is true
- create the <li> items in a <ul> list by mapping an array to <li> items

# Create a List component
- Start by creating the bare necessities for a React component
- Add a hello world
- import in the App.js and render the JSX element

- Let's now render an array that can be output to a traditional HTML list
- Say we have an array
- We know we will have a <ul> item but want to create an <li> for each element in the array

- JSX to the rescue
- When using JSX, we must use { } as an escape block for running or referencing Javascript code
- So we map each value in the array to an <li> item 
- This syntax is pre ES6, easier for newbie readability but let's use the latest syntax

- Add css by creating a css file
- import css file in JS
- apply to <ul> via className

# State management
- Create the constructor and initialize via super
- State is a mutable, private variable for exclusive for each instansiation of the <List /> object
- Defined in key:pair as a map
- We can now reference the state, let's try chaning the array we display in the list
- Changes happen in realtime without the need to re-render

# Changing state with buttons
- First we need to create a button
* Side note, returned JSX elements always need to be wrapped in a parent component such as <div> or <span>
- Let's add the button to increase prices by a dollar on every click as an upcharge
- First create the button

- Next we need to create the function
- We'll use React's setState function to mutate the state
  - Note that it's async
- for our function to understand this (in relation to the instanition of the object) we need to bind 'this' to it
(Read up on this in the You Don't Know JS)
- We then read the previous state and map the value to be + 1
- Then we update the button's onClick to wire the click listener to run this function

# Manipulating HTML rendering and output
- Let's say we want to display the integer as a dollar as we originally intended
- There are a few ways we can do this, but we have the power of JS to help us
  - Remember JSX is essentially a templating language
  - We can add html outisde the JS var
  - We can modify the JS var format
  - We can modify the source array itself
  - Many ways to do it

# Component LifeCycle
- React components have a series of lifecycle events
- The general idea is that a component will
  - Mount
  - Updat
  - Unmount

- Mount
  - Essentially initializing and setting everything up before the first frame render
  - Majority of the functions are async

- Let's do a loading example to demonstrate lifecycle
- https://www.codevoila.com/uploads/images/201607/reactjs_component_lifecycle_functions.png
- Mutate a string at different levels of the lifecycle
- Initiall set it to unmounted
- Set to mounted after mounted
- Change value from the return of a async function

- In will mount you can do your API calls here but they're async
- We need some placeholder to let the user continue to interact during load or to give some visual indicator

# Render Pitfalls
- Essentially the entire component will re-render even if it's one small change
- We want to avoid complex operations that will run everytime it is rendered/updated
  - Example - We have a table we want to filter
  - Say we store the data unfiltered but filter during the render
  - This can get costly may cause loss of silky smooth performance
- We have to remember that while browsers have come a long way, the performance isn't as far ahead as a native app would be (ignore WebAssembly :D)

