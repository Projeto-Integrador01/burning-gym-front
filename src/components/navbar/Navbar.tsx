import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full text-white flex justify-center py-4 bg-orange-500 px-4">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold text-white hover:scale-110 hover:text-gray-300">
          Burning Gym
        </Link>

        <div className="flex gap-4">
        <Link to="/perfil/7" className=" hover:scale-110 hover:text-gray-300">
            Perfil
          </Link>
          <Link to="/professores"  className=" hover:scale-110 hover:text-gray-300">
            Professores
          </Link>
          <Link to="/cadastrarprofessor"  className=" hover:scale-110 hover:text-gray-300">
            Cadastrar Professor
          </Link>
          <Link to="/aula" className=" hover:scale-110 hover:text-gray-300">
            Aulas
          </Link>
          <Link to='/cadastraraula' className= "hover:scale-110 hover:text-gray-300" >
            Cadastrar Aula
          </Link>
          <Link to="/sobre" className="text-white hover:scale-110 hover:text-gray-300">
            Sobre Nós
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
