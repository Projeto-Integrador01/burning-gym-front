import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/SobreNos";
import ListaProfessor from "./components/professor/listaprofessor/ListaProfessor";
import FormProfessor from "./components/professor/formprofessor/FormProfessor";
import DeletarProfessor from "./components/professor/deletarprofessor/DeletarProfessor";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<SobreNos />} />
          <Route path="/professores" element={<ListaProfessor/>}/>
          <Route path="/cadastrarprofessor" element={<FormProfessor/>}/>
          <Route path="/deletarprofessor" element={<DeletarProfessor/>}/>

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
