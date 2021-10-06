import React from 'react'
import "./HighABV.scss"

const HighABV = (props) => {

  const {handleABV} = props


  return (
    <div className="abv">
    <label htmlFor="highABV">High ABV</label>
    <input type="checkbox" name="HighABV" onChange={handleABV}/>
    </div>
  )
}

export default HighABV
