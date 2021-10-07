import React from 'react'
import "./ClassicRange.scss"

const ClassicRange = (props) => {

  const { handleClassic } = props

  return (
    
    <div className="classic">
      <label htmlFor="classic">Classic Range</label>
      <input type="checkbox" name="classic" onChange={handleClassic}/>
    </div>
    
  )
}

export default ClassicRange
