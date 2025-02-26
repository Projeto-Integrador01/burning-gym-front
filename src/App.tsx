import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 
import Home from "./pages/home/Home";
import Grupo from "./pages/home/Grupo";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#2C2C2E]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Grupo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
