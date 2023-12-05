import Inicio from "./components/Inicio"
import Carrucel from "./components/helpers/Carrucel"
import Header from "./components/helpers/Header"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import rutasMenu from './components/routes/rutasMenu'

let router = createBrowserRouter(rutasMenu)


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
