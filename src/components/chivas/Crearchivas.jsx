import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import {v4} from 'uuid';




const Crearchivas = () => {
const [nombre, setnombre] = useState("")
const [capacidad, setcapacidad] = useState("");
const [categoria, setcategoria] = useState("");
const [descripcion, setdescripcion] = useState("");
const [licencia, setlicencia] = useState("");

let redireccion = useNavigate ()

async function addChiva (){ 
    let chivaNueva = {
        id: v4 (),
        nombre: nombre,
        capacidad:capacidad,
        categoria:categoria,
        descripcion:descripcion,
        licencia:licencia,

    };
    await axios.post("http://localhost:3000/chivas", chivaNueva)
} 

const agregarChiva =()=>{

    Swal.fire({
        title: "Está seguro que desea crear la Chiva?",
        text: "Luego podrá eliminar la Chiva",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, crear Chiva"
      }).then((result) => {
        if (result.isConfirmed) {
            addChiva();
            redireccion('/chivas')
          Swal.fire({
            title: "Creada",
            text: "La Chiva se ha creado correctamente.",
            icon: "success"
          });
        }
      });
}


    return (
        <div>
            <section class="estilos">
                <div class="content">

                    <h1 class="logo">CREAR <span>CHIVA</span></h1>

                    <div class="contact-wrapper animated bounceInUp">
                        <div class="contact-form">
                            <h3>Crear Nueva Chiva</h3>
                            <form action="" method='post'>
                                <div>
                                    <label htmlFor='nombre'>nombre</label>
                                    <input type="text" onChange={(e)=> setnombre(e.target.value)}  />
                                </div>
                                <div>
                                    <label htmlFor='capacidad' >capacidad</label>
                                    <input type="number" onChange={(e)=> setcapacidad(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='categoria' >categoria</label>
                                    <input type="number"  onChange={(e)=> setcategoria(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='licencia'>licencia</label>
                                    <input type="text" onChange={(e)=> setlicencia(e.target.value)} />
                                </div>
                                <div class="block">
                                    <label htmlFor='descripcion' >descripcion</label>
                                    <textarea type="text" rows="3" onChange={(e)=> setdescripcion(e.target.value)} ></textarea>
                                </div>
                                <div class="block">
                                    <button onClick={agregarChiva} type='button'>
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="contact-info">
                            <h4>Informacion Empresarial</h4>
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i> TEL: 01 8000 519 519</li>
                                <li><i class="fas fa-phone"></i> CR 70a # 54-21 </li>
                                <li><i class="fas fa-envelope-open-text"></i> ChivasTours@gmail.com</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                            <p>ChivasTours.com</p>
                            <Link to="/" className='btn'>Volver al inicio</Link>
                            <Link to="/Chivas" className="btn"> Ver chivas</Link>

                        </div>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Crearchivas