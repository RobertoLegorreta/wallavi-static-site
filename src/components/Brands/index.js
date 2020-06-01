import React from 'react';
import "../../styles.css";
import "./brands.css";

const Brands = (props) => {
    return(
        <div className = "brands-section">
            {props.images?.map((element, index) => (
                <figure key={index} className="brands-images">
                    <img src={element.image} alt=""/>
                </figure>
            ))}
        </div>
    )
}

export default Brands;