
import chiva from "../img/logochivas.png"
import "./Header.css"


const Header = () => {
  return (

    <header >

      <img src={chiva} alt="" />


      <nav className="navbar">
        <a href="#" className="btn">INICIO</a>
        <a href="#" className="btn">NOSOTROS</a>
        <a href="#" className="btn">NOTICIAS</a>
        <a href="#" className="btn">CONTACTO</a>

      </nav>



    </header>

  )
}

export default Header