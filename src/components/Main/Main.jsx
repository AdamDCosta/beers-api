
import React from 'react'
import "./Main.scss";
import Nav from "../Nav/Nav";

import BeerCardList from '../BeerCardList/BeerCardList';
import beers from '../../data/beers';

const Body = () => {
  return (
    <section className="body">
      <Nav />
      <BeerCardList beersArr={beers} className="body__beers"/>
    </section>
  )
}

export default Body
