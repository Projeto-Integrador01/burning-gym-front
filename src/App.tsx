import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Grupo from "./pages/home/Grupo";
import Perfil from "./pages/perfil/Perfil";
import ListaProfessor from "./components/professor/listaprofessor/ListaProfessor";
import FormProfessor from "./components/professor/formprofessor/FormProfessor";
import DeletarProfessor from "./components/professor/deletarprofessor/DeletarProfessor";
import DeletarAula from "./components/aulas/deletaraula/DeletarAula";
import FormAula from "./components/aulas/formaula/FormAula";
import ListaAula from "./components/aulas/listaaula/ListaAula";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#4f4f53]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Grupo />} />
          <Route path="/perfil/4" element={<Perfil />} />
          <Route path="/professores" element={<ListaProfessor />} />
          <Route path="/cadastrarprofessor" element={<FormProfessor />} />
          <Route path="/editarprofessor/:id" element={<FormProfessor />} />
          <Route path="/deletarprofessor/:id" element={<DeletarProfessor />} />
          <Route path="/aula" element={<ListaAula/>}/>
          <Route path="/cadastraraula" element={<FormAula/>}/>
          <Route path="/editaraula/:id" element={<FormAula/>}/>
          <Route path="/deletaraula/:id" element={<DeletarAula/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
