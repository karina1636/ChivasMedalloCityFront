
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
        <Link to ="/Chivas" className="btn">CHIVAS</Link>
        <Link  to="/Crear" className="btn">CREAR CHIVAS</Link>

      </div>



    </header>

  )
}

export default Header