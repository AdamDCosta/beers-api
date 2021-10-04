import React from 'react'
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar'

const Nav = (props) => {

  const { handleSearch, searchTerm } = props

  return (
    <nav className="nav">
      <h3 className="nav__heading">Search & Filter</h3>
      <SearchBar seachTerm={searchTerm} handleSearch = {handleSearch}/>
    </nav>
  )
}

export default Nav

