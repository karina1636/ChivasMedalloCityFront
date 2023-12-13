import Nosotros from '../Nosotros'
import Crearchivas from '../chivas/Crearchivas'
import EditChivas from '../chivas/EditChivas'
import ListarChivas from '../chivas/ListarChivas'
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
  },
  {
    path:"/Chivas",
    element:<ListarChivas/>
  },
  {
    path:"/Crear",
    element:<Crearchivas/>
  },
  {
    path: '/editar/:id',
    element: <EditChivas/>
  }

]

export default rutasMenu