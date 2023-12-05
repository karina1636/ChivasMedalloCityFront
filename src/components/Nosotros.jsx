import React from 'react'
import { Link } from 'react-router-dom'
import VistaInicio from './vistas/VistaInicio'

const Nosotros = () => {
    return (
        <div>
            
            <Link to="/" className='btn'>Volver al inicio</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores omnis mollitia sed beatae veritatis eos iste eum repellat cupiditate. Laudantium ut necessitatibus atque expedita ratione dolores asperiores, minus non deleniti?</p>
        </div>
    )
}

export default Nosotros