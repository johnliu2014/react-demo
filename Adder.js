// component function
// parameter: object
// return: React.createElement call

function Adder({n1, n2}) { // object destructuring assignment
    const sum = n1 + n2;
    // any JavaScript expression in braces
    return <h1>{sum}</h1>;
}

ReactDOM.render(
    // react component have Capitalized name
    // 注意: props 是数字没有引号
    <Adder n1={2} n2={4} />,
    document.getElementById('app')
);