
// imports css files to use from another folders
import React from "react";
import "../../App.css";
import "./header.css"

// this function takes props to let the header change his color to blue 
function Header({ logoSrc, colorClass = "header--blue" }) {
    return (
        // HTML structure for the header 
        <header className={`header ${colorClass}`}>
            <div className="container">
                <div className="header-logo">
                    <img src={logoSrc} alt="logo" />
                </div>
            </div>
        </header>
    )
}

// this line to export this header component to use it the page 
export default Header;