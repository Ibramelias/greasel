
// import css file and react 
import React from "react";
import './button.css'

// resuble btn takes props //
function Button({ text, type, clickHandler }) {
    return (
        <button type="button" className={`btn btn--${type}`} onClick={clickHandler}>
            {text}
        </button>
    );
}

// this line to export component btn to use it the page 
export default Button;