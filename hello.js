
// 1a description of the UI 
// 2a DOM location 
// => a tree of DOM nodes that matches the description return by React.createElement
ReactDOM.render(
    // 1 the top element 
    // 2 properties of the top elements 
    // 3 others became a child element of the top element 
    // => a description of the UI
    React.createElement('h1', {}, 'Hello World!'),
    document.getElementById('app')
);