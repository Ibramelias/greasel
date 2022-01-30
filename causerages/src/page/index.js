// import the components / assets to use them in the page 
import { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo_white.svg";
import bg from "../assets/bg.jpg";
import './landingpage.css'




function LandingPage() {
    const [headerStyle, setHeaderStyle] = useState({ logo, colorClass: "header--white" });
    function clickHandler() {
        setHeaderStyle({ logo: logoWhite, colorClass: "header--blue" })
    }
    function redierctHandler() {
        window.open("https://www.creditonebank.com/", "_blank")
    }

    return (
        <div>
            {/* header component of the page  */}
            <Header logoSrc={headerStyle.logo} colorClass={headerStyle.colorClass} />

            {/* structuer of the page  */}
            <main className="main-content">
                <div className="container">
                    {/* this part for poromotion ads */}
                    <div className="ad_container">
                        <h2 className="main-header">Consolidate Your Debt <br /> With A Lower Rate </h2>
                        <div className="promotion">
                            <h1 className="promotion-precentage">XX.XX%</h1>
                            <p className="promotional-apr"><strong>Promotional APR</strong><br />now through<br /><strong>XX/XX/XXX</strong></p>
                            <p className="variable-period">A<strong>XX.XX% Variable APR</strong><br />will apply after the<br />Promotional period*</p>
                        </div>
                        <h3 className="main-sub-header">Manage life's expenses by transferring a balance <br /> to your Credit One Bank account today </h3>

                        {/* this section for buttons  */}
                        <div className="btns">
                            <Button text="Accept Now" btnType="primary" clickHandler={clickHandler} />
                            <Button text="No Thanks" btnType="secondary" clickHandler={redierctHandler} />
                        </div>
                        {/* terms and conditions part */}
                        <p className="apply-fee">A fee may apply.</p>
                        <p className="terms">*See the 'Discloures and Terms & Conditions'<br />on the application page by selecting the 'Accept Now' button.</p>
                    </div>
                </div>

                {/* background of the page  */}
                <div className="background-img">
                    <img src={bg} alt='backgroungImage' />
                </div>
            </main>
            {/* footer component of the page */}
            <Footer />
        </div>
    )
}

// export this functio to use it in App.js to rander the page 
export default LandingPage;