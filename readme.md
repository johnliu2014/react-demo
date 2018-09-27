# 1

react automatically updates the DOM(UI) when your data model changes

lets you iterate on the interface by combining, expanding, and moving around self-contained elements(components)

you pass new data to the components, and react takes care of tedious manipulations

react enforces strict rules to share data between components

map data to HTML elements

renderers components and props

express the UI as a function of the data

development builds of React and ReactDOM provides more helpful error messages

`Components` are JavaScript functions or classes that accept parameters, called `props`(an object), and return a description of the UI(React.createElement or JXS) based on those parameters.

When the data changes, you pass updated props to the component.

TOOLS: 
React developer tools
- allow access to file URLs
- component hierarchy on the current page
- props and state for the selected components
- console for error messages
  
A React component can receive props, perform computations, and describe how to display the result.

JSX: a new syntax to describe user interfaces inside JavaScript files.

TOOLS:
Babel: replace JSX with React.createElement
- in-browser Babel transform
Web Server for Chrome: Babel standalone doesn't work

Components combine multiple elements and describe a piece of UI as a function of data.

??? components can have children element and don't

Babel assumes elements that start with a lowercase define regular HTML elements, and elements that start with a capital are based on components.

# 2

components only receive data from their parents.

One component will perform the calculations, the use props to pass the result of the calculation to its children. AS `container/parent component`.

necessary data: text and target word count
derived data: count and progress

the text box, the counter, and the progress bar take props and display UI. `presentational components`.

Container components contain logic and perform calculation. Presentational components just display the props.

Since props pass from parents to children, you must place smart compenents higher up in th hierarchy.

```
<WordCounter>
    <Editor />
    <Counter />
    <ProgressBar />
</WordCounter>
```

Most components should define the markup and style to display the data. They work a little bit like templates. Other components sit at the top of the component hierarchy, and calculate the date their children need.

using `value props` to pass data between components.

# 3 

state concept
- values that change over time
- an object has state if its behavior is influenced by its history.

inside a React component, props are immutable ('配置'数据)

state object:
the data that affects the UI, in `this.state`
once you set the initial value, you update `this.state` with the `this.setState` function.

`setState` can only update the state of the component where you call it.

to update other components, pass the state or values you compute based on the state as props  parent ==> children

pass state change method as props chilren ==> parent

event object: 
tells you which part of the interface has been affected(event.target)
and what exactly happened(event.type)
event handler: a function that React calls everty time it detects an event like a click or keyboard input.

registering event handler:
pass the event handler as a prop to the element where you want to capture the user interaction

As you type, React invokes `handleChange`, which in return calls `handleTextChange`, which finally calls `setState` on `WordCounter`.
As the state changes, React sechedules a re-render of the whole `WordCounter` compenent, which also triggers a re-render of its children.

# 4 schedule a asynchronous action

separating state management from display of information

- event handler let you know how users interact with the UI and update the state in response
- update the state in response to some new data from the network
  
handle state with `setState` function

# 5 the build system

webpack: 

- module bundler 

Modules let you divide an application into multiple files, each with a specific function, and define the dependencies between the files.

Then the module bundler aggregates the source files into as many or as little files as you want.

- transformer

webpack can also transform the source code before assembling the modules.

This means you can optimize for performance in production while keeping the source files in a structure that's optimal for ease of development.

Node.js and npm

package.json

- scripts
  commands to manage our project
- dependencies
  production dependencies
- devDependencies
  development dependencies

node_modules
package-lock.json

init npm package: `npm init -y`
install webpack: `npm i --save-dev webpack`
configure webpack:


