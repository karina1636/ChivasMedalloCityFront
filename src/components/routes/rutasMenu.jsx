import Inicio from '../Inicio'
import Nosotros from '../Nosotros'
import ErrorNotFound from '../helpers/ErrorNotFound'
import VistaInicio from '../vistas/VistaInicio'

let rutasMenu=[

  {
    path:"/",
    element:<VistaInicio/>,
    errorElement:<ErrorNotFound/>
  },
  {
    path:"/Nosotros",
    element:<Nosotros/>
  }
]

export default rutasMenu