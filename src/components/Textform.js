import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');

    function handleUpClick() {
        console.log('Upper Click');
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleLowClick() {
        console.log('Lower Click');
        let newText = text.toLowerCase();
        setText(newText);
    }
    function handleOnChange(event) {
        console.log('OnChange')
        setText(event.target.value);
    }
    function handleClearTextClick(event) {
        console.log('Clear text')
        setText('');
    }
    function handleReverseTextClick(event) {
        setText(text.split(' ').reverse().join(' '));
    }
    function handleCapitalizedTextClick(event) {
        setText(text.split(' ').map(x => x[0].toUpperCase() + x.substring(1).toLowerCase()).join(' '));
    }
    function handleCopyTextClick(event) {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    function handleExtraSpaces(event) {
        setText(text.replaceAll(/\s+/g, ''));
    }


    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleReverseTextClick}>
                    Reverse Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizedTextClick}>
                    Capitalize Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopyTextClick}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                    Remove Extra Space
                </button>
            </div>

            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{!text.trim().length ? 0 : text.trim().split(' ').length} words and {text.length} characters </p>
                <p>{0.008 * text.split(' ').length} minutes read </p>
                <h3>Preview</h3>
                <span>{text}</span>
            </div>
        </>
    )
}
