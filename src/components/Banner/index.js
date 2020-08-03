import React from 'react';
import "../../styles.css";
import "./banner.css";
import producto from '../../assets/images/smartmockups.svg';
import wave from '../../assets/images/trazado.svg';

const Banner = () => {

    return(
        <div>
            <div className = "banner">
                <h1 className = "banner-title">
                    WORLD CLASS WEB APPS <br/>
                    <span> FROM DESING TO PRODUCTION </span>
                </h1>
                <img className="wave" src={wave} alt=""/>
                <img className="main-img-banner" src={producto} alt=""/>
            </div>
        </div>
    )
}

export default Banner;