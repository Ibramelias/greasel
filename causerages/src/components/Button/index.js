
// import css file and react 
import React from "react";
import './button.css'

// this function it takes three paramters and this resuble button so we can render these component manytimes
function Button({ text, btnType, clickHandler }) {
    return (
        <button type="button" className={`btn btn--${btnType}`} onClick={clickHandler}>
            {text}
        </button>
    );
}

// this line to export function Button() to let us use this component in landing page 
export default Button;