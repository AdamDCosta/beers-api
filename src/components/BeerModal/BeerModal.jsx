import React from 'react'
import "./BeerModal.scss"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import whiteCross from "../../assets/images/white-cross.png"


const BeerModal = (props) => {

  const { beers } = props;

  const { beerId } = useParams();

  const idArray = beers.filter(beer => {
    return beer.id == beerId
  })  
  const idObj = idArray[0]

  console.log(idObj)


  return (
    <article className="beer-modal">

      <Link to="/">
        <img className="beer-modal__close" src={whiteCross} alt="close window"/>
      </Link>
        
        <img className="beer-modal__image" src={idObj.image_url} alt={idObj.name} />
        
      
        <div className="beer-modal__heading">
          <h2 className="beer-modal__heading--name">
            {idObj.name.toUpperCase()}
          </h2>
          <h4 className="beer-modal__heading--tag">
            {`"${idObj.tagline}"`}
          </h4>
        </div>

      
      
        <p>{idObj.description}</p>
        <div className="beer-modal__info">
          <h4>ABV:
            <span> {idObj.abv}%</span>
          </h4>
          <h4>IBU:
            <span> {idObj.ibu}</span>
          </h4>
          <h4>EBC:
            <span> {idObj.ebc}</span>
          </h4>
        </div>

        <h2>Great to drink with...</h2>
          <ul className="beer-modal__pairings">
            <li>{idObj.food_pairing[0]}</li>
            <li>{idObj.food_pairing[1]}</li>
            <li>{idObj.food_pairing[2]}</li>
          </ul>
        <h4>First Brewed: 
          <span> {idObj.first_brewed}</span> 
        </h4>
      


    </article>
  )
}

export default BeerModal
