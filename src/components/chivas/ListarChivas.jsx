import axios from 'axios'
import { useState } from 'react'
import "./Styles.css"
import { Link } from 'react-router-dom'

const ListarChivas = () => {
    const [chivas, setchivas] = useState ([])

    const traerChivas = async () => {
        let listadochivas = await axios.get("http://localhost:3000/chivas");
        console.log(listadochivas)
        setchivas(listadochivas.data);



    }

  return (
    <div className='chivasfort'> 

        <section className='cards'>
            {
            chivas.map((chiva)=>(

                <section key={chiva.id}>
                    
                    <p>{chiva.nombre}</p>
                    <p>{chiva.capacidad}</p>
                    <p>{chiva.categoria}</p>
                    <p>{chiva.descripcion}</p>
                    <p>{chiva.licencia}</p>


                </section>

                
            ))
            }

        </section>
        
        <h1>Lista de chivas</h1>
        <button onClick={traerChivas} type='butoon ' className='btn'>Mostrar Chivas</button>
        <Link to="/" className='btn'>Volver al inicio</Link>
        <Link to="/Crear" className=' btn btn-Dos' >Crear Chiva</Link>
    </div>
  )
}

export default ListarChivas