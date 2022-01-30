
// import react and css file 
import React from "react";
import './footer.css'

// footer function to render footer component in the landing page 
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">©2019 Credit One Bank, N.A All Rights Reserved. Member FDIC.</p>
            </div>
        </footer>
    );
}

// this line to export function Footer() to let us use this component in landing page 
export default Footer