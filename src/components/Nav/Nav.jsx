import React from 'react'
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar'
import FiltersList from '../FiltersList/FiltersList'

const Nav = (props) => {

  const { handleSearch, searchTerm, handleABV } = props

  return (
    <nav className="nav">
      <h3 className="nav__heading">Search & Filter</h3>
      <SearchBar seachTerm={searchTerm} handleSearch = {handleSearch}/>
      <FiltersList handleABV={handleABV}/>
    </nav>
  )
}

export default Nav

