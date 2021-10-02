
import React from 'react'
import "./Body.scss";
import Nav from "../Nav/Nav";

import BeerCardList from '../BeerCardList/BeerCardList';
import beers from '../../data/beers';

const Body = () => {
  return (
    <body className="body">
      <Nav />
      <BeerCardList beersArr={beers} className="body__beers"/>
    </body>
  )
}

export default Body
