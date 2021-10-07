import React from 'react'
import "./FiltersList.scss"
import HighABV from '../HighABV/HighABV'
import ClassicRange from '../ClassicRange/ClassicRange'
import Acidic from '../Acidic/Acidic'

const FiltersList = (props) => {

  const { handleABV, handleClassic, handleAcidity } = props

  return (
    <div className="filters-list">
      <HighABV handleABV={handleABV}/>
      <ClassicRange handleClassic={handleClassic}/>
      <Acidic handleAcidity={handleAcidity}/>

    </div>
  )
}

export default FiltersList
