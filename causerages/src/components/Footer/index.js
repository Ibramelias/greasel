
// import react and css file 
import React from "react";
import './footer.css'

// footer function to render footer component in the page 
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">©2019 Credit One Bank, N.A All Rights Reserved. Member FDIC.</p>
            </div>
        </footer>
    );
}

// this line to export footer component to use it the page 
export default Footer