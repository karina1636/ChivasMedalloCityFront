
import { Link } from "react-router-dom"
import chiva from "../img/logochivas.png"
import "./Header.css"
import React from "react"



const Header = () => {
  return (
    <header >

      <img src={chiva} alt="" />


      <div className="navbar">
        <Link  className="btn">INICIO</Link>
        <Link to="/Nosotros" className="btn">NOSOTROS</Link>
        <Link  className="btn">NOTICIAS</Link>
        <Link className="btn">CONTACTO</Link>

      </div>



    </header>

  )
}

export default Header