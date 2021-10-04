import React, {useState} from 'react'
import beers from '../../data/beers'
import "./SearchBar.scss"

const SearchBar = (props) => {

  const { searchTerm, handleSearch } = props

  
  

  return (
    <input
      type="text"
      className="search"
      value={searchTerm}
      placeholder="Search by name..."
      onChange={handleSearch} />
  )
}

export default SearchBar

