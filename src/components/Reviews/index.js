import React from 'react';
import "../../styles.css";
import "./reviews.css";

const Reviews = (props) => {
    return(
        <div className = "reviews-section">
            <h2>🖍 RESEÑAS</h2>
            <p className="client-review-text">"Empresa comprometida con sus clientes desde los primeros bocetos e ideas y que ofrece soluciones efectivas para todo. No importa la complejidad que quieras para tu proyecto web tu, aportas la idea y un equipo de profesionales hacen el resto"</p>
            <p className="client-review">Jorge Parra CEO Goho</p>
        </div>
    )
}

export default Reviews;