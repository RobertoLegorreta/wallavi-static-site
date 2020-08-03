import React , {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../../styles.css";
import "./carrouselProjects.css";

const CarrouselProjects = (props) => {
    const [blockScroll, setBlockScroll] = useState(false);

    const informationDevelopment = [
        {
            title: "Cabsi",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-KrD0I08G7DMZwZ6QrcS%2FCaptura%20de%20pantalla%202017-08-10%20a%20la(s)%2014.18.26.png?alt=media&token=0673df29-abd0-4bc6-b7b3-331750aa4308",
            textTitle: "Cabsi",
            textDescription: "Description: Análisis, diseño y desarrollo de aplicación para ayudar a las personas a trasladarse de un lugar a otro de mejor manera"
        },
        {
            title: "De todo",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-KrCth1IO4gXqQVzyKUk%2F95-03.png?alt=media&token=d97648f3-96fd-482a-90e0-ac45d9e76369",
            textTitle: "De todo",
            textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr7QaFnzBVTCH-8Riwn%2FCaptura%20de%20pantalla%202017-08-09%20a%20la(s)%2011.08.04.png?alt=media&token=56c04b56-9413-4fed-82b3-e8d894d01d82",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro 2",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-KrCMGD_IZX03S9lCVro%2FCaptura%20de%20pantalla%202017-08-09%20a%20la(s)%2020.19.40.png?alt=media&token=5d3ee2b8-8d2c-4559-886c-488e9125d828",
            textTitle: "Otro2",
            textDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-KrCLLUgYB4OaL8hgXIX%2FCaptura%20de%20pantalla%202017-08-09%20a%20la(s)%2020.19.18.png?alt=media&token=7a24625d-18d6-48b0-9594-95940a388a3f",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr4U-7nv9PdP8pyzae1%2F20751290_10213968242942485_235998012_n.jpg?alt=media&token=1c12ceb7-a16d-4f8f-beb5-f97d26625d86",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr4UQSmIsRoSbqS5yEb%2F20731278_10213968242422472_1909791288_n.jpg?alt=media&token=9348ba47-7cf4-4999-97c5-4715d2c3688a",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr4WEvXDB30Y0qkbISl%2F20751550_10213968242582476_1021677586_n.jpg?alt=media&token=a8b2c013-c873-4112-ba9c-ffbea9585803",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr4WuhFlsO7zd1qhgoZ%2F20706896_10213968242102464_785835465_n.jpg?alt=media&token=d52b81eb-c894-44ee-93f5-d8f34c868dc9",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kr7u5XYv_ifPQ2fmOjM%2FCaptura%20de%20pantalla%202017-08-09%20a%20la(s)%2011.08.23.png?alt=media&token=fbe78f78-ecf6-4356-8938-107fbeac0b67",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-KqabJSZHJ9xuii3IkWK%2FCaptura%20de%20pantalla%202017-07-27%20a%20la(s)%2016.33.29.png?alt=media&token=f86292f1-ae75-4161-a0cf-9b7e9b0024e0",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kqa9qZNT0LTA75BZkU1%2FCaptura%20de%20pantalla%202017-07-27%20a%20la(s)%2013.15.14.png?alt=media&token=3a34e136-8fe5-49c1-a7cf-92223f13480f",
            textTitle: "Otro",
            textDescription: "Sit amet consectetur adipisicing elit. Ex cum nobis hic quas provident commodi ratione debitis laborum corrupti magnam at optio, quibusdam aspernatur consequatur deleniti et ullam enim qui?"
        },
        {
            title: "Otro3",
            logo: "",
            image: "https://firebasestorage.googleapis.com/v0/b/robergram-74a87.appspot.com/o/entradas%2F-Kqa7mJ-QNoEM5qxknAJ%2FCaptura%20de%20pantalla%202017-07-27%20a%20la(s)%2013.10.33.png?alt=media&token=0d638c92-cc95-446a-9775-a89fdae8058c",
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
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                centerPadding: "230px",
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  centerMode: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
            }
        ]
    };

    document.addEventListener("keydown", function(event) {
        console.log(event.which);
        if(event.which === 27){
            openInfo("")
        }
    })

    const modal = (elementInformation) => {
        return (
            <div>
                <div 
                    className="transparent"
                    // onClick = {()=>openInfo("")}
                >
                </div>
                <div className="body-modal">
                    <img 
                        // onClick = {()=>openInfo("")}
                        className="close-modal" 
                        src="https://www.freeiconspng.com/uploads/close-icon-29.png"
                        alt="close"
                    />
                    <div className="container-left-modal">
                        <div
                            className="container-image-modal"
                            style={{ backgroundImage: `url("${elementInformation.image}")` }}
                        >
                        </div>
                    </div>
                    <div className="container-right-modal">
                        <div className="title-container-modal">
                            <img className="logo-modal" src={elementInformation.logo} alt="main"></img>
                            <p className="title-modal">{elementInformation.title}</p>
                        </div>
                        <hr />
                        <div>
                            <p className="descrip-modal">{elementInformation.textDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function openInfo(element) {
        let parentModal = document.getElementById("parentModal");
        let modalDetail = ""
        if(element!==""){
            modalDetail = modal(element)
            setBlockScroll(true)

        }else{
            setBlockScroll(false)

        }
        if (parentModal) {
            ReactDOM.render(modalDetail, parentModal);
            document.body.style.overflow = null;
        }
    }

    useEffect(() => {

        if(blockScroll){
            // document.querySelector('html').scrollTop = window.scrollY;
            document.body.style.overflow = 'hidden';
        }
      },[blockScroll]);

    return (
        <div className="section-slider">
            <h2 className="section-h2"> Lastest Projects Developed 💻</h2>
            <Slider {...settings}>
                {informationDevelopment?.map((element, index) => (
                    <div key={index} className="container-all-images">
                        <div
                            className="slider-container-images"
                            style={{ backgroundImage: `url("${element.image}")` }}
                            // onClick={e => openInfo(element)}
                        >
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarrouselProjects;