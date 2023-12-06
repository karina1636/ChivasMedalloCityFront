import ftChivasUno from "../components/img/ftChivasUno.png"
import "../index.css"
import notUno from "../components/img/notUNO.png"
import notDos from "../components/img/notDos.png"
import notTres from "../components/img/notTres.png"
import mapa from "../components/img/mapa.png"



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
            <h2 align="center">ULTIMAS NOTICIAS</h2>
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

            <div>
                <footer>
                    <section className="content contact">
                        <h2 className="title" align="center">Contacto</h2>
                        <p align="center"> TEL: 01 8000 519 519</p>
                        <figure className="mapa">
                            <img src={mapa} height="200px"   align="center"alt="mapa"/>
                        </figure>
                    </section>

                </footer>
            </div>




        </div>


    )
}

export default Inicio