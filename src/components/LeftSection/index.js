import React from 'react';
import "../../styles.css";
import "./leftSection.css";

const LeftSection = (props) => {
    return(
        <div className="about-me-section">
            <h2 className="section-h2">{props.title}</h2>
            <div className = "left-section body-section">
                <div className="images-section" style={{backgroundImage: `url("${props.image}")`}}></div>
                <div className="text-section">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;