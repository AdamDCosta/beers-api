import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import beers from "./data/beers";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import BeerModal from './components/BeerModal/BeerModal';


const App = () => {

  const [ beers, setBeers ] = useState([])

  const [ searchTerm, setSearchTerm ] = useState("")

  const [ highABV, setHighABV ] = useState(false)

  const [ isClassic, setIsClassic ] = useState(false)

  const [ isAcidic, setIsAcidic ] = useState(false)

  useEffect(() => {
    
    fetch(`https://api.punkapi.com/v2/beers/?page=1&per_page=80${searchTerm}${abvFilter}${classicFilter}`)
    .then(response => {
      return response.json()
    })
    .then(beersArray => {
      
        if (beersArray) {
          setBeers(beersArray) 
          } else {
            setBeers([])
          }
        })  
  }, [searchTerm, highABV, isClassic])

  // --- Search Function

  const handleSearch = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const nameSearch = searchInput ? `&beer_name=${searchInput}` : "";

    setSearchTerm(nameSearch)
  }


  // --- High ABV filter

  const handleABV = () => {
    setHighABV(!highABV)
  }
  
  const abvFilter = highABV ? `&abv_gt=6` : "";
  

  // ---Classic Range filter

  const handleClassic = () => {
    setIsClassic(!isClassic)
  }

  const classicFilter = isClassic ? `&brewed_before=01-2010` : "";

  
  // ---High acidity filter

  const handleAcidity = () => {
    setIsAcidic(!isAcidic)
  }

  const acidicFilterJSX = isAcidic ?  
    beers.filter(beer => {
      const acidicBeer = beer.ph < 4
      return acidicBeer 
    })
      : beers;
  
  



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/beers-api/">
            <Header />

            <Main beers={acidicFilterJSX} handleSearch={handleSearch} searchTerm={searchTerm} handleABV={handleABV} handleClassic={handleClassic} handleAcidity={handleAcidity}/>
          </Route>

          <Route path="/beers-api/:beerId">
            <BeerModal beers={beers}/>
          </Route>
       </Switch>
      </div>

    </Router>

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

