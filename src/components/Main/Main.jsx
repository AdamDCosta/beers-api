
import React, {useState} from 'react'
import "./Main.scss";
import Nav from "../Nav/Nav";

import BeerCardList from '../BeerCardList/BeerCardList';
// import beers from '../../data/beers';


const Main = (props) => {

  const { beers, handleSearch, handleABV, searchTerm, handleClassic,    handleAcidity } = props

  // const [ showModal, setShowModal ] = useState(false);

  // // const toggleModal = () => {
  // //   setShowModal(!showModal);
  // };

  // const [ searchTerm, setSearch] = useState("")

  // const [ abvFilter, setABVFilter ] = useState(false)

  // const handleSearch = (event) => {
  //   const searchInput = event.target.value.toLowerCase();
  //   const searchName = searchInput.split(" ").join("_")
  //   console.log(searchName)
  //   setSearch(searchInput)
    
  // }

  // const handleAbv = () => {
  //   !abvFilter ? beers :
  //   beers.filter(beer => {
  //     beer.abv > 6 ? beer : null 
  //   })
  // } 
    


  // const filteredBeersJSX =
  //   searchTerm.length === 0 ? beers :
  //   beers.filter(beer => {
  //     const lowerBeer = beer.name.toLowerCase()
  //     return lowerBeer.includes(searchTerm)
  //   })


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
