import React from 'react'
import "./BeerTile.scss"
import InfoButton from '../InfoButton/InfoButton'
import { Link } from "react-router-dom";

const BeerTile = (props) => {


  const {beer} = props

  

  const beerDesc = () => {

    if (beer.description.length < 150) {
      return beer.description
    } else {
      const lastSentenceIndex = beer.description.indexOf(".", 150) + 1
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
          <h4 className="beer-tile__right--tag">{`"${beer.tagline}"`}</h4>
        </div>
        <p className="beer-tile__right--desc">{beerDesc()}</p>
        <div className="beer-tile__right--info">
          <div className="beer-tile__right--info-stats">
            <h4>ABV:
              <span> {beer.abv}%</span>
            </h4>
            <h4>First Brewed: 
              <span> {beer.first_brewed}</span> 
            </h4>
          </div>
        </div> 
          <Link to={`/beers-api/${beer.id}`}>
            <span className="beer-tile__right--info-button">
              <InfoButton />
            </span>
          </Link>
      </div>

    </article>
  )
}

export default BeerTile
