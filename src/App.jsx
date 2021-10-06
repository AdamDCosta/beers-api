import './App.scss';
import React, { useState, useEffect } from 'react';

// import beers from "./data/beers";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";



const App = () => {

  const [ beers, setBeers ] = useState([])

  const [ searchTerm, setSearchTerm ] = useState("")

  const [ highABV, setHighABV ] = useState("false")

  

  useEffect(() => {
    
    fetch(`https://api.punkapi.com/v2/beers/?page=1&per_page=80${searchTerm}`)
    .then(response => {
      return response.json()
    })
    .then(beersArray => {
      console.log(beersArray)
        if (beersArray) {
          setBeers(beersArray) 
          } else {
            setBeers([])
          }
        })  
  }, [searchTerm, ])

  

  const handleSearch = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const nameSearch = searchInput ? `&beer_name=${searchInput}` : "";

    setSearchTerm(nameSearch)
  }

  const handleABV = () => {
    setHighABV(!highABV)
    
  }
  
  const abvFilter = highABV ? `&abv_gt=6` : "";
  


  // const filteredBeersJSX =
  //   searchTerm.length === 0 ? beers :
  //   beers.filter(beer => {
  //     const lowerBeer = beer.name.toLowerCase()
  //     return lowerBeer.includes(searchTerm)
  //   })


  return (
    <div className="App">
      <Header />
      <Main beers={beers} handleSearch={handleSearch} searchTerm={searchTerm} handleABV={handleABV}/>
    </div>
  );

}
export default App;


// The Plan

// Clean up files - add app.jsx and app.scss

// Add data file

// Plan components & props

// --> Components/props
//  1. Sidenav
//      -> Search Bar
//      -> Filter List
//        -> Filter Item
//  2. Main section (container component)
//      -> Card List
//      -> Beer Card

