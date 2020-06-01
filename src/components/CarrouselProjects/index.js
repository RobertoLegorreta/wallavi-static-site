import React from "react";
import Slider from "react-slick";
import "../../styles.css";
import "./carrouselProjects.css";

const CarrouselProjects = (props) => {
    const informationDevelopment = [
        {
            title: "Cabsi",
            image: "https://www.zohowebstatic.com/sites/default/files/iphone.png",
            textTitle: "Cabsi",
            textDescription: "Description: Análisis, diseño y desarrollo de aplicación para ayudar a las personas a trasladarse de un lugar a otro de mejor manera"
        },
        {
            title: "De todo",
            image: "https://image.winudf.com/v2/image1/Y29tLnNrZXRjaHdhcmVwcm9qZWN0cy5jb20uZGV2X3NjcmVlbl8wXzE1NTE2MjI1NzJfMDQ5/screen-0.jpg?fakeurl=1&type=.jpg",
            textTitle: "De todo",
            textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Places",
            image: "https://www.zohowebstatic.com/sites/default/files/iphone.png",
            textTitle: "Places",
            textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti"
        },
        {
            title: "Otro",
            image: "https://image.winudf.com/v2/image1/Y29tLnNrZXRjaHdhcmVwcm9qZWN0cy5jb20uZGV2X3NjcmVlbl8wXzE1NTE2MjI1NzJfMDQ5/screen-0.jpg?fakeurl=1&type=.jpg",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro 2",
            image: "https://www.zohowebstatic.com/sites/default/files/iphone.png",
            textTitle: "Otro2",
            textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            image: "https://image.winudf.com/v2/image1/Y29tLnNrZXRjaHdhcmVwcm9qZWN0cy5jb20uZGV2X3NjcmVlbl8wXzE1NTE2MjI1NzJfMDQ5/screen-0.jpg?fakeurl=1&type=.jpg",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        }
    ]
    const settings = {
        focusOnSelect: true,
        dots: true,
        className: "center-slider",
        centerMode: true,
        infinite: true,
        centerPadding: "180px",
        slidesToShow: 3,
        speed: 500,
        arrows: false
    };

    return (
      <div className="section-slider">
        <h2 className="section-h2"> Lastest Projects Developed</h2>
        <Slider {...settings}>
            {informationDevelopment?.map((element, index) => (
                <div key = {index} className="container-all-images">
                    <div
                        className = "slider-container-images"
                        style={{backgroundImage: `url("${element.image}")`}}
                    >
                    </div>
                </div>
            ))}
        </Slider>
      </div>
    );
}

export default CarrouselProjects;