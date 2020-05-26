import React from 'react';
import "../../styles.css"
import "./layers.css"

const LayersPromo = (props) => {
    return(
        <div
            className = "layers"
            style = {props.style}
        >
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default LayersPromo;