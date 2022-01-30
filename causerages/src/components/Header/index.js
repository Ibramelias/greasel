import React from "react";
import "../../App.css";
import "./header.css"


function Header({logoSrc, colorClass = "header--blue"}) {
    return (
        <header className={`header ${colorClass}`}>
            <div className="container">
                <div className="header-logo">
                    <img src={logoSrc} alt="logo" />
                </div>
            </div>
        </header>
    )
}



export default Header;