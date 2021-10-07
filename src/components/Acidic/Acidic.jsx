import React from 'react'
import "./Acidic.scss";

const Acidic = (props) => {

  const { handleAcidity} = props

  return (
    <div className="acidic">
      <label htmlFor="acidic">Acidic</label>
      <input
      type="checkbox"
      name="acidic"
      onChange={handleAcidity} />
    </div>
  )
}

export default Acidic
