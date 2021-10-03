import React from 'react'
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar'

const Nav = () => {
  return (
    <nav className="nav">
      <h3 className="nav__heading">Search & Filter</h3>
      <SearchBar />
    </nav>
  )
}

export default Nav

