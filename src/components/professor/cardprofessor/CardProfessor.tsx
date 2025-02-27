import { Link } from "react-router-dom";
import { Professor } from "../../../models/Professor";


interface CardProfessorProps {
    professor: Professor;
}

function CardProfessor({ professor }: CardProfessorProps) {
    return (
        <div className='border border-gray-300 flex flex-col rounded-2xl overflow-hidden justify-between m-4'>
            <header className='py-2 px-6 bg-[#ff9f00] text-white font-bold text-2xl'>
                Professor
            </header>
            <p className='p-4 text-2xl bg-slate-200 h-full'>Nome: {professor.nome}</p>
            <p className='p-4 text-2xl bg-slate-200 h-full'>Especialidade: {professor.especialidade}</p>
            <div className="flex justify-end">
                <Link
                    to={`/editarprofessor/${professor.id}`}
                    className='w-full text-slate-100 bg-[#2C2C2E] hover:bg-orange-500 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarprofessor/${professor.id}`}
                    className='border-l text-slate-100 bg-[#2C2C2E] hover:bg-red-500 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProfessor;