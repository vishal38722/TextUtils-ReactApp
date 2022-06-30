import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");       // State handling

    const UpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const Speak = () => {
        let message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
    }

    const Clear = () => {
        setText("");
    }

    const Copy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const ExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const color = ['red', 'blue', 'yellow', 'orange', 'green', 'black', 'pink', 'salmon', 'teal'];
    const changeColor = (number) =>{
            document.getElementById('myBox').style.color = color[number];
    }

    const Capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // //remove all the symbols
    // const handletextExtract =()=>{
    //     const regex = /[0-9/A-Z/a-z/ /]/g;

    //     const letters = text.match(regex);
    //     const res1 = letters.join('');
    //     setText(res1)
    // };


    // //to extract only the numbers in the text:
    // const handleNumExtract =()=>{
    //     const regex = /[0-9/ /]/g;

    //     const digits = text.match(regex);
    //     const res = digits.join('');
    //    setText(res)
    // };

    // // Function to reverse text:

    // const handleReverse = (event) => {
    //     /* Convert string to array*/
    //     let strArr = text.split("");
    //     /* Reverse array*/
    //     strArr = strArr.reverse();
    //     /* Convert array to string*/
    //     let newText = strArr.join("");
    //     setText(newText);
    // };

    // // Into "Capitalized form" or you can call it "Title Case" 
    // const intoTitleCase = () => {
    //     let newText = text.split(" ").map((currentValue) => {
    //         let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //         return newText;
    //     });
    //     setText(newText.join(" "));
    // }


    // // to encode text to base64
    // function base64Encode() {
    //         setText(btoa(text));
    //     }


    //     // to decode base64 to text

    //     function base64Decode() {
    //         setText(atob(text));
    // }

        // function CapatlizeWord(sentence){
        // return sentence.toLowerCase().split(" ").map((word)=>{
        // return word[0].toUpperCase()+word.substring(1)
        // }).join(' ')
        // setText((previous)=>{
        // return CapatlizeWord (previous)
        // })

    // // dark and light theme
    // const handleLightTheme = () => {
    //     document.querySelector('.body').style.backgroundColor = "white"
    // }

    // const handleDarkTheme = () => {
    //     document.querySelector('.body').style.backgroundColor = "black"
    //     document.querySelector('.body').style.color = "white"
    // }

    
    // change the color of text randomly
    



    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // return (
    //     <>
    //     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
    //         <h1>Enter the text below for processing</h1>
    //         <div className="mb-3">
    //             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} placeholder='Enter your text here' id="myBox" rows="10"></textarea>
    //         </div>
    //         <h3>Text Summary</h3>
    //         <p>{text.split(" ").length} words and {text.length} characters</p>
    //         <button className='btn btn-primary mx-1' onClick={UpperClick}>Convert to Upercase</button>
    //         <button className='btn btn-primary mx-1' onClick={LowerClick}>Convert to Lowercase</button>
    //         <button className='btn btn-primary mx-1' onClick={Clear}>Clear</button>
    //         <button className="btn btn-warning mx-2" onClick={Speak} type="submit">Speak</button>
    //         <button className="btn btn-warning mx-1" onClick={Copy}>Copy Text</button>
    //         <button className="btn btn-warning mx-1" onClick={ExtraSpaces}>Remove Extra Spaces</button>
    //     </div>
    //     </>
    // )


    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>TextUtils</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={UpperClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-1 my-1" onClick={LowerClick}>Convert to Lowercase</button>
            <button className="btn btn-info mx-1 my-1" onClick={Clear}>Clear Text</button>
            <button className="btn btn-warning mx-2 my-1" onClick={Speak} type="submit">Speak</button>
            <button className="btn btn-info mx-1 my-1" onClick={Copy}>Copy Text</button>
            <button className="btn btn-success mx-1 my-1" onClick={ExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" type="button" onClick={() => changeColor(Math.floor(Math.random() * 5))}>Change Color</button>
            <button className="btn btn-success mx-1 my-1" onClick={Capitalize}>Capitalize the Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}