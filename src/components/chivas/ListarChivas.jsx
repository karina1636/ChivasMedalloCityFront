import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Styles.css"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ListarChivas = () => {
    const [chivas, setchivas] = useState([])

    const traerChivas = async () => {
        let listadochivas = await axios.get("http://localhost:3000/chivas");
        console.log(listadochivas)
        setchivas(listadochivas.data);

    }

    useEffect(() => {traerChivas()}, [])

    async function eliminarChivas(id){
        await axios.delete("http://localhost:3000/chivas/"+ id)
        traerChivas()
    }

    function confirmarDelete(id){
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            eliminarChivas(id)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }

    

    return (
        <div className='chivasfort'>

            <section className='cards'>
                {
                    chivas.map((chiva) => (

                        <section key={chiva.id}>

                            <p>{chiva.nombre}</p>
                            <p>{chiva.capacidad}</p>
                            <p>{chiva.categoria}</p>
                            <p>{chiva.descripcion}</p>
                            <p>{chiva.licencia}</p>
                           <div className='botonoes'>
                            <Link to={'/editar/' + chiva.id}>Editar</Link>
                            <button onClick={()=> confirmarDelete(chiva.id)}>Eliminar</button>
                           </div>
                        </section>


                    ))
                }

            </section>

            <h1>Lista de chivas</h1>
            <Link to="/" className='btn'>Volver al inicio</Link>
            <Link to="/Crear" className='btn btn-Dos'>Crear Chiva</Link>
        </div>
    )
}

export default ListarChivas