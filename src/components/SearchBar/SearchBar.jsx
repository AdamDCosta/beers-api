import React, {useState} from 'react'
import beers from '../../data/beers'
import "./SearchBar.scss"

const SearchBar = () => {

  // const { beers } = props
  const [ search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch = event.target.value;
    // setSearch = search
    // console.log(search)
  }

  // const filteredBeersJXS =
  //   search.length === 0 ? beers :
  //   beers.filter(beer => {
  //     beer.name.includes(search)
  //   })
  

  return (
    <input
      type="text"
      className="search"
      // value={Search}
      placeholder="Search by name..."
      onChange={handleSearch} />
  )
}

export default SearchBar

