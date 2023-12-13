import React from 'react'
import { Link } from 'react-router-dom'
import chivaDos from '../components/img/Chiva-Guatape.png'
import chivaTres from '../components/img/chiva-tres.png'
import chivaCuatro from '../components/img/chiva-Dos.png'
import chivaLuzU from '../components/img/chiva-alumbradosUno.png'
import chivaLuzD from '../components/img/chiva-alumbradosDos.png'
import chivaUno from '../components/img/1.png'
import rutaLecheraU from '../components/img/ruta-lechera.png'
import rutaLechera from '../components/img/tour_lechero.png'
import chiva from "../components/img/logochivas.png"

import '../Nosotros.css'
const Nosotros = () => {
    return (
        <div >
            <Link to="/" className='btn'>Volver al inicio</Link>
            <h1>Conoce sobre Nosotros</h1>

            <div className="orden">
                <div className="galerya">
                    <div className="fotoo">
                        <img src={chivaUno} alt="" />
                    </div>
                    <div className="piee">
                        <p align="center">sala de exhibicion 1</p>
                        <p align="center">chivas rumberas</p>
                    </div>
                </div>
                <div className="galerya">
                    <div className="fotoo">
                        <img src={chivaTres} alt="" />
                    </div>
                    <div className="piee">
                        <p align="center">sala de exhibicion 1</p>
                        <p align="center">chivas rumberas</p>
                    </div>
                </div>
                <div className="galerya">
                    <div className="fotoo">
                        <img src={chivaDos} alt="" />
                    </div>
                    <div className="piee">
                        <p align="center">sala de exhibicion 1</p>
                        <p align="center">chivas rumberas</p>
                    </div>
                </div>

                <div className="galerya">
                    <div className="fotoo">
                        <img src={chivaCuatro} alt="" />
                    </div>
                    <div className="piee">
                        <p align="center">sala de exhibicion 1</p>
                        <p align="center">chivas rumberas</p>
                    </div>
                </div>


            </div>
            <section className="orden-1">

                <div>
                    <h2>¿Por Qué Nosotros?</h2>
                    <p className="text">Chivas rumba promueve el turismo sostenible haciendo especial énfasis en la preservación del patrimonio cultural material e inmaterial, y de esta manera contribuye al enriquecimiento y la calidad de vida de las poblaciones locales. así mismo, tiene en cuenta todas las manifestaciones culturales y fomenta en sus clientes valores de respeto y cuidado.</p>
                </div>

                <div>
                    <h2>Misión</h2>
                    <p className="text">Ofrecer gran variedad de servicios turísticos contando con personal profesional y capacitado para brindar una buena asesoría, teniendo en cuenta siempre las diferentes necesidades de nuestros clientes y garantizándoles así un gran respaldo a la hora de invertir en una mejor calidad de vida y sano esparcimiento.</p>
                </div>

                <div>
                    <h2>Visión</h2>
                    <p className="text">Seremos en el 2025  la mejor garantía turística con una cobertura del 100% a nivel nacional en lugares turísticos, sitios de hospedaje, alojamiento y recreación, brindándoles varias alternativas de ahorro programado y crédito en destinos internacionales. Brindaremos un gran “Respaldo y Tranquilidad Sin Límites”</p>
                </div>

            </section>
            <div>
                <h1 align="center">RUTAS EMBLEMATICAS</h1>
            </div>

            <section className="rtas">

                <img src={chivaLuzU} alt="" className="position" />
                <img src={chivaLuzD} alt="" className="positionn" />

                <div>
                    <h2 >Tour</h2>
                    <h4 align="center">Noche de alumbrados</h4>

                    <p align="center"> Este tour cuenta con una capacidad entre 40 y 50 personas teniendo una duracion de 3 a 4 horas aproximadamente
                        con dos horarios de salida los cuales son: 7:00 PM a 11:00 PM y 8:00 PM  a 12:00 AM SALIDAS DOMINGO a JUEVES CON VALOR DEL VEHÍCULO 4 HORAS:  $ 950.000
                        (Sólo un Horario en la Noche para disfrutar)
                        SALIDAS VIERNES Y SÁBADOS CON VALOR DEL VEHICULO 4 HORAS: $ 1.150.000
                    </p>
                    <ul >
                        <p align="center">INCLUYE</p>
                        
                            <li >Avenida la Playa
                            <li>Avenida Oriental</li>
                            <li>Avenida San Juan</li>
                            <li>Avenida del Poblado</li>
                            <li>Avenida del Río</li>
                            <li>Parque Norte (No incluye atracciones mecánicas)</li>
                            <li>Municipio de Envigado</li>
                            <li>Luces discotequeras en la chiva</li>
                            <li>Guía Coordinador</li>
                            <li>Tarjeta de Asistencia Médica</li>
                        </li>
                    </ul>

                </div>


            </section>

            <section className="ruttas">

                <img src={rutaLecheraU} alt="" className="posicion" />
                <img src={rutaLechera} alt="" className="posicionn" />

                <div>
                    <h2 >Tour</h2>
                    <h4 align="center">Lechero. ¡De la ciudad al campo!</h4>

                    <p align="center"> Este tour cuenta con una capacidad entre 15 y 30 personas teniendo una duracion de 1 día
                        con  horario de salida: 6:30 AM SALIDAS  COMPARTIDAS TODOS LOS DOMINGOS punto de encuentro: Cámara de Comercio de Medellín, sobre la Avenida Oriental HORA DE LLEGADA: 8:00 p.m Aproximado.
                      
                    </p>
                    <ul align="center">
                        <p align="center">INCLUYE</p>
                        
                            <li>Interactúa con los animales de la granja; vamos a vivir la ruta lechera </li>
                            <li>Aprende a elaborar un delicioso queso artesanal propio del tour lechero</li>
                            <li>Guía acompañante para el recorrido</li>
                            <li>Recorre caminando por los municipioso aledaños</li>
                            <li>Tarjeta de asistencia médica</li>
                           
                        
                    </ul>

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

export default Nosotros