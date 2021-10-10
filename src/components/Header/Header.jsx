import React from 'react'
import "./Header.scss"
import Logo from "../../assets/images/brewdog-logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="brewdog-logo" className="header__logo"/>
      <div className="header__title">
        <h1>PUNK API</h1>
      
        <h2>The Brewdog back catalogue</h2>

      </div>
    </header>
  )
}

export default Header
