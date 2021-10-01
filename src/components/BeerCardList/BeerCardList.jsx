import React from 'react'

import BeerTile from '../BeerTile/BeerTile'

const BeerCardList = (props) => {

  const { beersArr } = props;

  const cardListJSX = beersArr.map(beer, index => {
    <BeerTile key={beer.name + (index + 1)} />
  })
  return (

    <section>
      {cardListJSX}
    </section>
  )
}

export default BeerCardList
