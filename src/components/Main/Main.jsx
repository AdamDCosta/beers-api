import React from 'react';
import "./Main.scss";

import BeerCardList from '../BeerCardList/BeerCardList';


const Main = () => {
  // needs to generate the beerTiles

  

  return (
    <section className="main">
      <BeerCardList beer = { beers } />
    </section>
  )
}

export default Main
