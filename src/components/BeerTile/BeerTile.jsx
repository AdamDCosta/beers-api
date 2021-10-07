import React from 'react'
import "./BeerTile.scss"

const BeerTile = (props) => {

  //img, title, description, abv, brewdate

  const {beer} = props

  const beerDesc = () => {
    if (beer.description.length < 200) {
      return beer.description
    } else {
      const lastSentenceIndex = beer.description.indexOf(".", 200) + 1
      const shortenedText = beer.description.substring(0, lastSentenceIndex);
      return shortenedText + ".."
    }
  }
  
  
  return (
    <article className="beer-tile">
      <div className="beer-tile__left">
        <img className="beer-tile__left--image" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-tile__right">
        <div className="beer-tile__right--heading">
          <h2 className="beer-tile__right--name">
            {beer.name.toUpperCase()}
          </h2>
          <h4>{beer.tagline}</h4>
        </div>
        <p>{beerDesc()}</p>
        <div className=".beer-tile__right--info">
        <h4>ABV:
          <span> {beer.abv}%</span>
        </h4>
        <h4>First Brewed: 
          <span> {beer.first_brewed}</span> 
        </h4>
      </div>

      </div>

    </article>
  )
}

export default BeerTile
