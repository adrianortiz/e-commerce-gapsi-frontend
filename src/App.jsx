import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Proveedores from './Views/Proveedores/';
import Grafica from "./Views/Proveedores/Grafica";
import Bienvenida from "./Views/Bienvenida/Index";
// import ProtectedRoutes from "./Components/ProtectedRoutes"

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/grafica" element={<Grafica />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
