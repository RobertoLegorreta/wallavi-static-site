import React from 'react';
import "../../styles.css";
import "./banner.css";
import producto from '../../assets/images/banner-product.png';

const Banner = () => {

    return(
        <div className = "banner">
            <h1 className = "banner-title">
                WORLD CLASS WEB APPS <br/>
                <span> FROM DESING TO PRODUCTION </span>
            </h1>
            <img src={producto} alt=""/>
        </div>
    )
}

export default Banner;