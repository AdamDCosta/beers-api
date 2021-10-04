import React from 'react'
import "./HighABV.scss"

const HighABV = () => {

  const {filterTitle, filterBox} = props


  return (
    <label htmlFor="{filterTitle}">{filterTitle}</label>
    <input type="checkbox" name={filterTitle} />
  )
}

export default HighABV
