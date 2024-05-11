import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to your clipboard", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style ={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea class="form-control" value={text} style ={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            

        </div>
        <div className="container my-3" style ={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length-1)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
