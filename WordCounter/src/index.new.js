// presentational components

function Counter({count}) {
    return (
        // React user className instead of class
        // htmlFor instead of for
        <p className="mb2">
            Word count: {count}
        </p>
    );
}

function ProgressBar({completion}) {
    const percentage = completion * 100;
    return (
        <div className="mv2 flex flex-column">
            <label htmlFor="progress" className="mv2">
                Progress
            </label>
            <progress value={completion} id="progress" className="bn">
                {percentage}%
            </progress>
        </div>
    );
}

function Editor ({
    text,
    onTextChange
}) {
    function handleChange(event) {
        onTextChange(event.target.value);
    }
    return (
        <div className="flex flex-column mv2">
            <label htmlFor="editor" className="mv2">
            Enter your text:
            </label>
            <textarea value={text}
            onChange={handleChange}
            id="editor" />
        </div>
    );
}
// In HTML, the <textarea> child element determines the <textarea> content,
// but the <textarea> React element uses the value prop.
function SaveButton({onClick}) {
    return (
        <button className="pv2 ph3" onClick={onClick}>
            Save
        </button>
    );
}
function AlertBox({status}) {
    if(status === FAILURE) {
        return <div className="mv2">Save failed</div>;
    } else if(status === SUCCESS) {
        return <div className="mv2">Save successful</div>;
    } else if (status === WAITING) {
        return <div className="mv2">Saving ...</div>;
    } else {
        // when you return null from a component, react doesn't render
        // anything
        return null;
    }
}
// util function
// When you've got code that has nothing to do with rendering a user interface,
// store it in a separate function.

function countWords(text) {
    // null and undefined behave as false in a boolean expression
    return text ? text.match(/\w+/g).length : 0;
}
// simulate fetch API
function makeFakeRequest(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                console.info(data);
                console.info('save success');
                resolve('Success!');
            } else {
                console.info(data);
                console.info('save failed');
                reject('Failure');
            }
        }, 500);
    });
}
// save status
// save successed
const SUCCESS = 'SUCCESS';
// save failed
const FAILURE = 'FAILURE';
// in progress
const WAITING = 'WAITING';
// no save was attempted
const IDLE = 'IDLE';
// container component
// take two props: a text and a target word count
// assemble the presentational components

// function WordCounter({text, targetWordCount}) {
//     const wordCount = countWords(text);
//     const progress = wordCount / targetWordCount;
//     return (
//         <form className="measure pa4 sans-serif">
//             <Editor text={text} />
//             <div className="flex mt3">
//                 <Counter count={wordCount}/>
//                 <ProgressBar completion={progress}/>
//             </div>
//         </form>
//     );
// }
class SaveManager extends React.Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.state = {saveStatus: IDLE};
    }
    save(event) {
        event.preventDefault();
        this.setState(() => ({saveStatus: WAITING}));
        this.props.saveFunction(this.props.data)
                  .then(success => this.setState(() => ({saveStatus: SUCCESS})),
                        failure => this.setState(() => ({saveStatus: FAILURE}))
                );
    }
    render() {
        return (
            <div className="flex flex-column mv2">
                <SaveButton onClick={this.save}/>
                <AlertBox status={this.state.saveStatus}/>
            </div>
        );
    }
}
class WordCounter extends React.Component {
    constructor() {
        // JavaScript forces you to call `super` before accessing
        // `this` in the constructor
        super();
        this.state = {text: ''};
        // `bind` returns a new function where `this` always has the
        // value that it had when you called `bind`
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    render() {
        // props and state are attached to the `this` variable
        const {targetWordCount} = this.props;
        const {text} = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;
        return (
        <form className="measure pa4 sans-serif">
              <Editor text={text} onTextChange={this.handleTextChange}/>
             <div className="flex mt3">
                 <Counter count={wordCount}/>
                 <ProgressBar completion={progress}/>
            </div>
            <SaveManager saveFunction={makeFakeRequest} data={this.state} />
         </form>);
    }
    handleTextChange(currentText) {
        // `setState` takes a function, which must return an object
        // with the updated state properties.
        // return value is an object, wrap the returned object
        // in parentheses to remove the ambiguity
        this.setState(() => ({text: currentText}));
    }
}

ReactDOM.render(
    // text 不用
    <WordCounter targetWordCount={10} />,
    document.getElementById('app')
);