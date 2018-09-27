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

