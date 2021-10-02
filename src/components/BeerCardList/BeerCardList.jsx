import React from 'react'
import "./BeerCardList.scss"

import BeerTile from '../BeerTile/BeerTile'

const BeerCardList = (props) => {

  const { beersArr } = props;

  const cardListJSX = beersArr.map((beer, index) => {
    return <BeerTile key={beer.name + (index + 1)} beer = { beer }/>
  })
  return (

    <section className="beers">
      {cardListJSX}
    </section>
  )
}

export default BeerCardList
