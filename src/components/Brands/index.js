import React from 'react';
import "../../styles.css";
import "./brands.css";
import Slider from "react-slick";

const Brands = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    };

    return(
        <div className = "brands-section">
            <div className = "brand-images-container">
                {props.images?.map((element, index) => (
                    <figure key={index} className="brands-images">
                        <img src={element.image} alt=""/>
                    </figure>
                ))}
            </div>
            <div className="section-slider-brands">
                <Slider {...settings}>
                    {props.images?.map((element, index) => (
                        <div
                            className="slider-container-brands"
                            key={index}
                        >
                            <img src={element.image} alt=""/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Brands;