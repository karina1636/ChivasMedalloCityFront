import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Styles.css"



const EditarChivas  = () => {
    const [nombre, setnombre] = useState("")
    const [capacidad, setcapacidad] = useState("");
    const [categoria, setcategoria] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [licencia, setlicencia] = useState("");
    let redireccion = useNavigate();
    let {id} = useParams();

    async function getChivasId(){

        const respuesta = await axios.get("http://localhost:3000/chivas/" + id);
        setnombre(respuesta.data.nombre);
        setcapacidad(respuesta.data.capacidad);
        setcategoria(respuesta.data.categoria);
        setdescripcion(respuesta.data.descripcion);
        setlicencia(respuesta.data.licencia);
    } 

    useEffect(()=> {getChivasId();}, []);

    async function addChiva() {
        let chivaNueva = {
            nombre: nombre,
            capacidad: capacidad,
            categoria: categoria,
            descripcion: descripcion,
            licencia: licencia,
        };
        await axios.put("http://localhost:3000/chivas/"+id, chivaNueva)
    }

    const updateChiva = () => {
        Swal.fire({
          title: "Está seguro que desea editar la chiva?",
          text: "Luego podrá editar la chiva",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, editar chiva",
        }).then((result) => {
          if (result.isConfirmed) {
            addChiva();
            redireccion("/Chivas");
            Swal.fire({
              title: "Actualizada!",
              text: "La Chiva se ha actualziado correctamente.",
              icon: "success",
            });
          }
        });
      };

      return (
        <div>
            <section class="estilos">
                <div class="content">

                    <h1 class="logo">Formulario <span>De captura</span></h1>

                    <div class="contact-wrapper animated bounceInUp">
                        <div class="contact-form">
                            <form action="" method='post'>
                                <div>
                                    <label htmlFor='nombre'>nombre</label>
                                    <input type="text" onChange={(e) => setnombre(e.target.value)} value={nombre} />
                                </div>
                                <div>
                                    <label htmlFor='capacidad' >capacidad</label>
                                    <input type="text" onChange={(e) => setcapacidad(e.target.value)}   value={capacidad}/>
                                </div>
                                <div>
                                    <label htmlFor='categoria' >categoria</label>
                                    <input type="text" onChange={(e) => setcategoria(e.target.value)} value={categoria} />
                                </div>
                                <div>
                                    <label htmlFor='licencia'>licencia</label>
                                    <input type="text" onChange={(e) => setlicencia(e.target.value)} value={licencia}/>
                                </div>
                                <div class="block">
                                    <label htmlFor='descripcion' >descripcion</label>
                                    <textarea type="text" rows="3" onChange={(e) => setdescripcion(e.target.value)} value={descripcion}></textarea>
                                </div>
                                <div class="block">
                                    <button onClick={updateChiva} type='button'>
                                        Actualizar
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
    );
};

export default EditarChivas      




