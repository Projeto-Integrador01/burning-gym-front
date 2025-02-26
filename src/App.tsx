import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/SobreNos";
import DeletarAula from "./components/aulas/deletaraula/DeletarAula";
import FormAula from "./components/aulas/formaula/FormAula";
import ListaAula from "./components/aulas/listaaula/ListaAula";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-200">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<SobreNos />} />
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
