import React from 'react'

const BeerTile = (props) => {

  //img, title, description, abv, brewdate

  const {beersArr} = props
  
  return (
    <article className="beer-tile">
      {/* do I need to add key here or when I iterate? */}
      <img src={beersArr.image_url} alt={beersArr.name} />
      <div className="beer-tile__heading">
        <h2>{beersArr.name}</h2>
        <p>{beersArr.tagline}</p>
      </div>
      <p>{beersArr.description}</p>
      <div className=".beer-tile__info">
        <h4>ABV:
          <span>{beersArr.abv}%</span>
        </h4>
        <h4>First Brewed 
          <span>{beersArr.first_brewed}</span> 
        </h4>
      </div>

    </article>
  )
}

export default BeerTile
