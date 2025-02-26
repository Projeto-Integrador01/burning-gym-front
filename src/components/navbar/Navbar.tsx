import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full text-white flex justify-center py-4 bg-[rgb(0,105,92)] px-4">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold text-white hover:text-gray-300">
          Home
        </Link>

        <div className="flex gap-4">
          <Link to="/sobre" className="text-white hover:text-gray-300">
            Sobre Nós
          </Link>
          <Link to="/professores" className=" hover:text-gray-300">
            Professores
          </Link>
          <Link to="/aula" className=" hover:text-gray-300">
            Aulas
          </Link>
          <Link to='/cadastraraula' className='hover:underline'>
            Cadastrar Aula
          </Link>
          <Link to="/perfil" className=" hover:text-gray-300">
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
