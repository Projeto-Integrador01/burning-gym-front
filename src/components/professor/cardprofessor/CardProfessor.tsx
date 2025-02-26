import { Link } from "react-router-dom";
import { Professor } from "../../../models/Professor";


interface CardProfessorProps {
    professor: Professor;
}

function CardProfessor({ professor }: CardProfessorProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[rgb(34,197,94)] text-white font-bold text-2xl'>
                Professor
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>nome: {professor.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>especialidade: {professor.especialidade}</p>
            <div className="flex">
                <Link
                    to={`/editarprofessor/${professor.id}`}
                    className='w-full text-slate-100 bg-[rgb(34,197,94)] hover:bg-[rgb(34,160,74)] 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarprofessor/${professor.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProfessor;