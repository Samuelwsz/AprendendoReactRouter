import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"
import Menu from "./Components/Menu/Index"
import Rodape from "./Components/Rodape"
import PaginaPadrao from "./Components/PaginaPadrao"
import Post from "./Pages/Post"
import NaoEncontrada from "./Components/NaoEncontrada"
import ScrollToTop from "./Components/ScrollToTop"

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        {/*
        Na rota "/", a estrutura a ser renderizada é:
        <PaginaPadrao>
          <Inicio/>
        </PaginaPadrao>

         Na rota "/sobemim", a estrutura a ser renderizada é:
        <PaginaPadrao>
          <SobreMim/>
        </PaginaPadrao>
        */}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
