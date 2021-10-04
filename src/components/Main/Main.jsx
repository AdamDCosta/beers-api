
import React, {useState} from 'react'
import "./Main.scss";
import Nav from "../Nav/Nav";

import BeerCardList from '../BeerCardList/BeerCardList';
import beers from '../../data/beers';

const Main = () => {

  // const { beers } = props

  const [ searchTerm, setSearch] = useState("")

  const handleSearch = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearch(searchInput)
    
  }


  const filteredBeersJSX =
    searchTerm.length === 0 ? beers :
    beers.filter(beer => {
      const lowerBeer = beer.name.toLowerCase()
      return lowerBeer.includes(searchTerm)
    })


  return (
    <section className="main">
      <Nav handleSearch={handleSearch} searchTerm={searchTerm}/>
      <BeerCardList beersArr={filteredBeersJSX} className="main__beers"/>
    </section>
  )
}

export default Main
