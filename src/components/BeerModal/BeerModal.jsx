import React from 'react'
import "./BeerModal.scss"

const BeerModal = (props) => {

  const {beer} = props

  


  return (
    <article className="beer-modal">
      <div className="beer-modal__top">
        <img className="beer-modal__top--image" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-modal__lower">
        <div className="beer-modal__lower--heading">
          <h2 className="beer-modal__lower--name">
            {beer.name.toUpperCase()}
          </h2>
          <h4>{beer.tagline}</h4>
        </div>
        <p>{beer.description}</p>
        <div className=".beer-modal__lower--info">
        <h4>ABV:
          <span> {beer.abv}%</span>
        </h4>
        <h4>IBU:
          <span> {beer.ibu}</span>
        </h4>
        <h4>EBC:
          <span> {beer.ebc}</span>
        </h4>

        <h2>Food Pairings</h2>
          <ul className=".beer-modal__lower--pairings">
            <li>{beer.food_pairing[0]}</li>
            <li>{beer.food_pairing[1]}</li>
            <li>{beer.food_pairing[2]}</li>
          </ul>
        <h4>First Brewed: 
          <span> {beer.first_brewed}</span> 
        </h4>
      </div>

      </div>

    </article>
  )
}

export default BeerModal
