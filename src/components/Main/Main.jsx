
import React from 'react'
import "./Main.scss";
import Nav from "../Nav/Nav";

import BeerCardList from '../BeerCardList/BeerCardList';



const Main = (props) => {

  const { beers, handleSearch, handleABV, searchTerm, handleClassic,    handleAcidity } = props


  return (
    <section className="main">
      <Nav 
      handleSearch={handleSearch} 
      searchTerm={searchTerm} 
      handleABV={handleABV} 
      handleClassic={handleClassic} 
      handleAcidity={handleAcidity}/>

      <BeerCardList beersArr={beers} className="main__beers"/>
    </section>

  )
}

export default Main
