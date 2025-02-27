import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Grupo from "./pages/home/Grupo";
import Perfil from "./pages/perfil/Perfil";
import ListaProfessor from "./components/professor/listaprofessor/ListaProfessor";
import FormProfessor from "./components/professor/formprofessor/FormProfessor";
import DeletarProfessor from "./components/professor/deletarprofessor/DeletarProfessor";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#2C2C2E]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Grupo />} />
          <Route path="/perfil/4" element={<Perfil />} />
          <Route path="/professores" element={<ListaProfessor />} />
          <Route path="/cadastrarprofessor" element={<FormProfessor />} />
          <Route path="/editarprofessor/:id" element={<FormProfessor />} />
          <Route path="/deletarprofessor/:id" element={<DeletarProfessor />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
