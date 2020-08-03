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
      title: "LO QUE HACEMOS 🚀",
      image: "",
      text: "Desarrollamos software de gran calidad con una de las inversiones más bajas en el mercado. Todos los sistemas que desarrollamos están diseñados a la medida, aportando una gran experiencia para el usuario. Sistemas altamente seguros, escalables y de gran desempeño."
    }
  ]
  const informationDevelopment = [
    {
      title: "👨‍💻 EN DESARROLLO",
      image: "",
      textTitle: "Proyecto: Tu cooperativa",
      textDescription: "Descripción: Desarrollo de aplicación web responsiva y progresiva, servida en AWS, utilizando bases de datos relacionales y siguiendo un enfoque de microservicios, ",
      textCurrentPhase: "Fase actual: Implementación de seguridad",
    }
  ]
  const images = [
    {image: "./brands/donparrafa.png"},
    {image: "./brands/goho.png"},
    // {image: "./brands/pngu.png"},
    {image: "./brands/safru.png"},
    {image: "./brands/tepikenas.png"},
    {image: "./brands/morena.png"},
    {image: "./brands/tidingo.png"}
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
