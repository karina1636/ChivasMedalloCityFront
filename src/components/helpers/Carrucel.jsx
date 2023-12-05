
import medallo from "../img/medallo.png"
import chivasft from "../img/nocheChivas.png"
import medellinoche from "../img/medellinNoche.png"
import "./Header.css"
import Header from "./Header"
const Carrucel = () => {
    return (
        <div  >
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={medellinoche} className="d-block  " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={chivasft} className="d-block  " alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={medallo} className="d-block " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </div>
    )
}

export default Carrucel