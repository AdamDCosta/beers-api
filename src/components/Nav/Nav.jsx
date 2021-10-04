import React from 'react'
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar'

const Nav = () => {

  const { beers } = props

  const [ search, setSearch] = useState("")

  const handleSearch = (event) => {
    searchInput = event.target.value;
    setSearch(searchInput)
    
  }


  const filteredBeersJSX =
    search.length === 0 ? beers :
    beers.filter(beer => {
      beer.name.includes(search)
    })

  return (
    <nav className="nav">
      <h3 className="nav__heading">Search & Filter</h3>
      <SearchBar seachTerm={searchTerm} handleSearch = {handleSearch}/>
    </nav>
  )
}

export default Nav

