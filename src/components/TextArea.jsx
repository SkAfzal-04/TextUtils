import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [emailHeading, setEmailHeading] = useState("");
    const [preview, setPreview] = useState("");
    const handleUpClick = () => {
        // console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length>0){
            props.showAlert("Changed to Upper Case","success");
            }
            else{
                props.showAlert("No inputs found","warning");
            }
    }
    const handleloClick = () => {
        // console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length>0){
        props.showAlert("Changed to Lower Case","success");
        }
        else{
            props.showAlert("No inputs found","warning");
        }
    }
    const handleClear = () => {
        setText("");
    }
    const handlefeClick = () => {
        setEmailHeading("Emails Present In Your Text")
        let words = text.split(" ");
        let emails = [];
        let c = 1;
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes("@gmail.com")) {
                emails.push(c + "." + words[i]);
                c++;
            }
        }
        if (emails.length <= 1) {
            setEmail("No emails found");
        }
        else {
            setEmail(emails.join("<br/>"));
        }
    };


    const handleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        if (event.target.value === "") {
            setPreview("");
        }
        else {
            setPreview("Preview");
        }
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "azure" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="form-group" >
                    <textarea className="form-control inputArea" style={{ color: props.mode === "dark" ? "azure" : "black", backgroundColor: props.mode === "dark" ? "gray" : "white" }} value={text} onChange={handleOnchange} id="textArea" rows="8"></textarea>
                    <div className='blur' style={{ "opacity" : "0" }}>{text}</div>
                </div>
                <div className='btn-container'>
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary' onClick={handleloClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary' onClick={handlefeClick}>Find Emails</button>
                    <button className='btn btn-primary' onClick={handleClear}>Clear</button>
                </div>
            </div>
            <div className='container' style={{ color: props.mode === "dark" ? "azure" : "black" }}>
                <h2>Your Text Summery</h2>
                <p>Your text containts <b>{text.split(" ").length - 1}</b> Words and <b>{text.length}</b> Characters </p>
                <p>Average time to read given text is {text.split(" ").length * 0.008} minutes</p>
                <h3>{emailHeading}</h3>
                <p dangerouslySetInnerHTML={{ __html: email }} />
                <h3>{preview}</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
