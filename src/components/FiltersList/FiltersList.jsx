import React from 'react'
import "./FiltersList.scss"
import HighABV from '../HighABV/HighABV'
import ClassicRange from '../ClassicRange/ClassicRange'
import Acidic from '../Acidic/Acidic'

const FiltersList = (props) => {

  const { handleABV } = props

  return (
    <div className="filters-list">
      <HighABV handleABV={handleABV}/>
      <ClassicRange />
      <Acidic />

    </div>
  )
}

export default FiltersList
