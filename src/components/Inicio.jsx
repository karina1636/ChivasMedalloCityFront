import ftChivasUno from "../components/img/ftChivasUno.png"
import "../index.css"
import notUno from "../components/img/notUNO.png"
import notDos from "../components/img/notDos.png"
import notTres from "../components/img/notTres.png"
import chiva from "../components/img/logochivas.png"




const Inicio = () => {
    return (

        <div>
            <div>

            </div>

            <div className="inicioUno">

                <img src={ftChivasUno} alt="" />


                <div >

                    <h3>CHIVAS ANTIOQUIA </h3>
                    <h1>RUMBA</h1>
                    <p align="center">
                        Nuestra agencia de viajes Chivas turisticas te da la oportunidad de
                        celebrar con nosotros tus mejores momentos tales como: Cumpleaños, Integraciones de colegios
                        y universidades, Fiestas empresariales (congresos, eventos), Despedidas de
                        solteros y solteras, Paseos a fincas, Recogidas en el aeropuerto, Rumba
                        nocturna por Medellin o lugares de Antioquia, chivas discotekeras, city
                        tours y dias de sol.
                        TE ESPERAMOS...
                    </p>
                </div>
            </div>
            <h1 align="center">ULTIMAS NOTICIAS</h1>
            <section className="noticias">

                <div className="informes">
                    <article className="division">
                        <img src={notDos} alt="Logo" />
                        <section>
                            <p align="center"><>Santa Fe de Antioquia, la antigua capital del departamento y uno de los municipios más queridos por los antioqueños, es un hermoso pueblo que ofrece...</></p>

                        </section>
                    </article>
                    <article className="division">
                        <img src={notUno} alt="Logo" />
                        <div>
                            <p align="center"> <>Las Chivas Turísticas en Medellín se caracterizan por su gran colorido, predominando el amarillo, el azul y el rojo</></p>

                        </div>
                    </article>
                    <article className="division">
                        <img src={notTres} alt="Logo" />
                        <section>
                            <p align="center"><>Nació la Chiva Rumbera para quedarse en Medellin
                                Fue en el departamento de Antioquia, en Colombia,  cuando se construyó la primera carrocería que daría origen a las Chivas</> </p>

                        </section>
                    </article>
                </div>
            </section>

            <footer class="pie-pagina">
                <div class="grupo-1">
                    <div class="box">
                        <figure>
                            <a href="#">
                                <img src={chiva} alt="" />
                            </a>
                        </figure>
                    </div>
                    <div class="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                    </div>
                    <div class="box">
                        <h2>SIGUENOS</h2>
                        <div class="red-social">
                            <a href="#" class="fa fa-facebook">F</a>
                            <a href="#" class="fa fa-instagram">I</a>
                            <a href="#" class="fa fa-twitter">X</a>
                            <a href="#" class="fa fa-youtube">Y</a>
                        </div>
                    </div>
                </div>
                <div class="grupo-2">
                    <small>&copy; 2021 <b>SLee Dw</b> - Todos los Derechos Reservados.</small>
                </div>
            </footer>




        </div>


    )
}

export default Inicio