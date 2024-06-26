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
        navigator.clipboard.writeText(text);
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
            <h1 className='mb-3'>{props.heading}</h1>
            <textarea class="form-control" value={text} style ={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            

        </div>
        <div className="container my-3" style ={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
