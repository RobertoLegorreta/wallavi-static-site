import React from 'react';
import "../../styles.css"
import "./header.css"
import logo from "../../assets/images/logo.png"

const Header = () => {

    //this header is made it with bootstrap
    return(
        <nav className = "header">
            <div className = "logo">
                <img className = "logo-img" src={logo} alt=""/>
                <h1 className = "logo-text">WALLAVI INVENTORY</h1>
            </div>
            <div className = "right-side">
                <p className = "header-text">
                    Productos y servicios
                </p>
                <button className = "contact-button">
                    Contactar
                </button>
            </div>
        </nav>
    )
}

export default Header;