import { Link } from 'react-router-dom'
import { Aula } from '../../../models/Aula'

interface CardAulasProps {
    aula: Aula
}

function CardAula({ aula }: CardAulasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {aula.tipoAula}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{aula.data}</h4>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição: {aula.descricao}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Tempo de duração: {aula.duracaoAula}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Professor: {aula.professor?.nome}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Aluno: {aula.aluno?.nome}</p>
            </div>
            <div className="flex">
                <Link to={`/editaraula/${aula.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletaraula/${aula.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default CardAula