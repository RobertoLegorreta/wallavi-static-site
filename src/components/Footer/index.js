import React from 'react';
import "../../styles.css";
import "./footer.css";
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"

const Footer = (props) => {

    return(
        <div className = "footer-section">
            <div>
                <a href="https://www.facebook.com/wallavimx" target="_new"><img src={facebook}  alt="Facebook page"/></a>
                <a href="https://www.linkedin.com/company/wallavi" target="_new"><img src={linkedin} alt="Linkedin page"/></a>
            </div>
            <p>Wallavi S.A. De C.V. 2020. Todos los derechos reservados.</p>
            <div></div>
        </div>
    )
}

export default Footer;