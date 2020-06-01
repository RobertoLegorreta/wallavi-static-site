import React, {useState} from 'react';
import "../../styles.css"
import "./header.css"
import logo from "../../assets/images/logo.png"
import redSocial from "../../assets/images/pngocean.png"

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
                            Simplificando el inventariado
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
                            Próximamente
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
                    className="transparent-section"
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
                                <img src={redSocial} alt=""/>
                                <img src={redSocial} alt=""/>
                                <img src={redSocial} alt=""/>
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
                    <button 
                        className = "contact-button"
                        onClick = {() => showContact()}
                    >
                        Contactar
                    </button>
                </div>
            </nav>
            {menuVisible && menu()}
            {contactVisible && contact()}
        </div>
    )
}

export default Header;