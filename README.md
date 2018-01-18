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
