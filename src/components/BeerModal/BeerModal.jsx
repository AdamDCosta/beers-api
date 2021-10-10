import React from 'react'
import "./BeerModal.scss"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import whiteCross from "../../assets/images/white-cross.png"
import Header from '../Header/Header';
import whiteBanner from "../../assets/images/brewdog_white.png"

const BeerModal = (props) => {

  const { beers } = props;

  const { beerId } = useParams();

  const idArray = beers.filter(beer => {
    return beer.id == beerId
  })  
  const idObj = idArray[0]


  const maltsList = idObj.ingredients.malt.map(mlt => {
    const maltItem =  <li>{mlt.name}: {mlt.amount.value}kg</li>
    return maltItem
  })

  const hopsList = idObj.ingredients.hops.map(hop => {
    const hopsItem =  <li>{hop.name}: {hop.amount.value}kg</li>
    return hopsItem
  })


  return (

    <section className="beer-modal">

      <Header />

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
          <h4 className="beer-modal__heading--date">First Brewed: 
          <span> {idObj.first_brewed}</span> 
        </h4>
        </div>

        <div className="beer-modal__desc">
          <p>{idObj.description}</p>
        </div>

        <div className="beer-modal__grid">
          <div className="beer-modal__info">        
            <h4 className="beer-modal__info--cell">
              ABV:<span> {idObj.abv}%</span>
            </h4>         
            <h4 className="beer-modal__info--cell">
              IBU:<span> {idObj.ibu}</span>
            </h4>          
            <h4 className="beer-modal__info--cell">
              EBC:<span> {idObj.ebc}</span>
            </h4>         
          </div>
        </div>

        <div className="beer-modal__pairings">
          <h2>Drink with...</h2>
            <ul>
              <li>{idObj.food_pairing[0]}</li>
              <li>{idObj.food_pairing[1]}</li>
              <li>{idObj.food_pairing[2]}</li>
            </ul>
        </div>
        

        <article className="beer-modal__brewing">
          <h2 className="beer-modal__brewing--heading">Brewers Tips</h2>
          <p className="beer-modal__brewing--tip">
            {idObj.brewers_tips}
          </p>
          <div className="beer-modal__brewing--ingredients">
            <div className="beer-modal__brewing--ingredients-cell">
              <h4>Malts</h4>
              <ul>
               {maltsList}
              </ul>
            </div>
            <div className="beer-modal__brewing--ingredients-cell">
              <h4>Hops</h4>
              <ul>
               {hopsList}
              </ul>
            </div>


          </div>
        </article>
      

    <Link to="/">
      <footer className="beer-modal__footer">
        <img src={whiteBanner} alt="brewdog footer" />
      </footer>
    </Link>
    </section>
  )
}

export default BeerModal
