import React from 'react';
import "../../styles.css";
import "./underDevelopment.css";

const UnderDevelopment = (props) => {
    return(
        <div className="under-develop-section">
            <h2 className="section-h2">{props.title}</h2>
            <div className = "under-develop-body-section">
                <div className="under-develop-images-section">
                    <img src="./projects/under-development.png"></img>
                </div>
                <div className="under-develop-text-section">
                    <p>{props.textTitle}</p>
                    <p>{props.textDescription}</p>
                    <p>{props.textCurrentPhase}</p>
                </div>
            </div>
        </div>
    )
}

export default UnderDevelopment;