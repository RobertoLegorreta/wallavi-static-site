import React, {useState} from 'react';
import "../../styles.css"
import "./header.css"
import logo from "../../assets/images/logo.svg"
// import instagram from "../../assets/images/instagram.svg"
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const menu = () => {
        return(
            <div>
                <div 
                    className="transparent-section"
                    onClick={() => showMenu()}
                >
                </div>
                <div className="triangle">
                </div>
                <div className="menu">
                    <div className="first-line-menu">
                        <p className="title-menu">
                            Inventory
                        </p>
                        <p className="descrip-menu">
                            Próximamente
                        </p>
                    </div>
                    <div className="second-line-menu">
                        <div className="first-child-second-line">
                            <p className="title-menu">
                                Sales Point
                            </p>
                            <p className="descrip-menu">
                                Próximamente
                            </p>
                        </div>
                        <div>
                            <p className="title-menu">
                                Online Store
                            </p>
                            <p className="descrip-menu">
                                Próximamente
                            </p>
                        </div>
                    </div>
                    <div className="third-line-menu">
                        <p className="title-menu">
                            Rockstars
                        </p>
                        <p className="descrip-menu">
                            Software Development
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const contact = () => {
        return(
            <div>
                <div 
                    className="transparent-section-contact"
                    onClick={() => showContact()}
                >
                </div>
                <div className="contact">
                    <form action="mailto:info@robertolegorreta.com" method="post" encType="text/plain">
                        <input 
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            required
                        />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <textarea 
                            type="text"
                            name="texto"
                            placeholder="Mensaje"
                            required
                        />
                        <div className="footer">
                            <button type="submit">
                                Contactar
                            </button>
                            <div className="social-media">
                                {/* <img src={instagram} alt=""/> */}
                                <a href="https://www.facebook.com/wallavimx" target="_new"><img src={facebook} alt=""/></a>
                                <a href="https://www.linkedin.com/company/wallavi" target="_new"><img src={linkedin} alt=""/></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const showMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const showContact = () => {
        setContactVisible(!contactVisible);
        if(contactVisible){
            document.body.style.overflow = null;
        }
        else{
            document.body.style.overflow = 'hidden';
            document.querySelector('html').scrollTop = window.scrollY;
        }
    }

    return(
        <div>
            <nav className = "header">
                <div className = "logo">
                    <img className = "logo-img" src={logo} alt=""/>
                    <h1 className = "logo-text">WALLAVI ROCKSTARS</h1>
                </div>
                <div className = "right-side">
                    <p 
                        className = "header-text"
                        onClick = {() => showMenu()}
                    >
                        Productos y servicios
                    </p>
                    {/* <button 
                        className = "contact-button"
                        onClick = {() => showContact()}
                    >
                        Contactar
                    </button> */}
                </div>
            </nav>
            {menuVisible && menu()}
            {contactVisible && contact()}
        </div>
    )
}

export default Header;