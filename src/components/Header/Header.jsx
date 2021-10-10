import React from 'react'
import "./Header.scss"
import Logo from "../../assets/images/brewdog-logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="brewdog-logo" className="header__logo"/>
      <h1>Punk API</h1>
      <br />
      <h2>The Brewdog back catalogue</h2>
    </header>
  )
}

export default Header
