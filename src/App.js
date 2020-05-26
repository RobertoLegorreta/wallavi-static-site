import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import LayersPromo from './components/Layers';

function App() {
  const layers = [
    {id:'hdjhsuiue77t', style: {background: '#ee5958', bottom: "100px"}, text: "Quedan 15 dias"},
    {id:'jdauyiyuidui', style: {background: '#323946', bottom: "20px"}, text: ["Aprovecha las promociones por preventa. ", <br/>,  "Lanzamiento oficial 01/jul/2020"]}
  ]
  return (
    <div className="App">
      <Header />
      <Banner />
      {layers?.map((element) => (
        <LayersPromo
          key = {element.id}
          id = {element.id}
          style = {element.style}
          text = {element.text}
        />
      ))}
    </div>
  );
}

export default App;
