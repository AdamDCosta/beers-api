import React from 'react'
import "./BeerTile.scss"

const BeerTile = (props) => {

  //img, title, description, abv, brewdate

  const {beer} = props
  
  return (
    <article className="beer-tile">
      {/* do I need to add key here or when I iterate? */}
      <img className="beer-tile__image" src={beer.image_url} alt={beer.name} />
      <div className="beer-tile__heading">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
      </div>
      <p>{beer.description}</p>
      <div className=".beer-tile__info">
        <h4>ABV:
          <span>{beer.abv}%</span>
        </h4>
        <h4>First Brewed 
          <span>{beer.first_brewed}</span> 
        </h4>
      </div>

    </article>
  )
}

export default BeerTile
