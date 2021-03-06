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
}) {
    return (
        <div className="flex flex-column mv2">
            <label htmlFor="editor" className="mv2">
            Enter your text:
            </label>
            <textarea value={text} id="editor" />
        </div>
    );
}
// In HTML, the <textarea> child element determines the <textarea> content,
// but the <textarea> React element uses the value prop.

// util function
// When you've got code that has nothing to do with rendering a user interface,
// store it in a separate function.

function countWords(text) {
    // null and undefined behave as false in a boolean expression
    return text ? text.match(/\w+/g).length : 0;
}

// container component
// take two props: a text and a target word count
// assemble the presentational components

function WordCounter({text, targetWordCount}) {
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;
    return (
        <form className="measure pa4 sans-serif">
            <Editor text={text} />
            <div className="flex mt3">
                <Counter count={wordCount}/>
                <ProgressBar completion={progress}/>
            </div>
        </form>
    );
}

ReactDOM.render(
    // text 不用{}
    <WordCounter text={"hello World d!"} targetWordCount={10} />,
    document.getElementById('app')
);