import React from 'react';
import "../../styles.css";
import "./banner.css";
import producto from '../../assets/images/banner-product.png';

const Banner = () => {

    return(
        <div className = "banner">
            <h1 className = "banner-title">
                Llevar el inventario de tu negocio <br/>
                <span> nunca fue tan fácil </span>
            </h1>
            <img src={producto} alt=""/>
        </div>
    )
}

export default Banner;