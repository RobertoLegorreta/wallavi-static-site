import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import LeftSection from './components/LeftSection';
import UnderDevelopment from './components/UnderDevelopment';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import CarrouselProject from './components/CarrouselProjects';


function App() {
  const informationPerson = [
    {
      title: "ABOUT ME",
      image: "http://www.schmidthk.com/wp-content/uploads/2014/06/shutterstock_103693073-300x277.jpg",
      text: "Hola mi nombre es Roberto Legorreta soy diseñador y desarrollador de software, he trabajado en multiples proyectos a lo largo de los ultimos años para todo tipo de empresas, desde pequeñas empresas hasta empresas extranjeras. he tenido la fortuna de colaborar con desarrolladores de muchas partes del mundo."
    }
  ]
  const informationDevelopment = [
    {
      title: "UNDER DEVELOPMENT",
      image: "http://www.schmidthk.com/wp-content/uploads/2014/06/shutterstock_103693073-300x277.jpg",
      textTitle: "Project Name: Cabsi",
      textDescription: "Description: Análisis, diseño y desarrollo de aplicación para ayudar a las personas a trasladarse de un lugar a otro de mejor manera",
      textCurrentPhase: "Current phase: Web Design",
    }
  ]
  const images = [
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"},
    {image: "/static/media/logo.ed3bf68e.png"}
  ]
  return (
    <div>
      <div className="App">
        <Header />
        <Banner />
        {informationPerson?.map((element, index) => (
            <LeftSection 
              key = {index}
              title = {element.title}
              image = {element.image}
              text = {element.text}/> 
        ))}
        {informationDevelopment?.map((element, index) => (
            <UnderDevelopment 
              key = {index}
              title = {element.title}
              image = {element.image}
              textTitle = {element.textTitle}
              textDescription = {element.textDescription}
              textCurrentPhase = {element.textCurrentPhase}
            /> 
        ))}
        <CarrouselProject />
        <Brands 
          images = {images}
        />
        <Reviews />
        <Footer />
      </div>
      <div id="parentModal" />
    </div>
  );
}

export default App;
