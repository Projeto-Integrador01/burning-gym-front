import { Link } from 'react-router-dom'
import { Aula } from '../../../models/Aula'

interface CardAulasProps {
    aula: Aula
}

function CardAula({ aula }: CardAulasProps) {
    return (
        <div className="max-x-xl mx-8 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 shadow-md">
  {/* Cabeçalho vermelho */}
  <div className="flex w-full bg-[#ff9f00] py-3 px-5 items-center gap-4">
    <h3 className="text-lg font-bold text-white uppercase">{aula.professor?.especialidade}</h3>
  </div>

  {/* Conteúdo da aula */}
  <div className="p-4">
    <h4 className="text-lg"><strong>Data da Aula:</strong> : {aula.data}</h4>
    
    <div className="p-4">
      <p className="text-lg"><strong>Professor:</strong> {aula.professor?.nome}</p>
    </div>
    <div className="p-4">
      <p className="text-lg"><strong>Categoria da Aula:</strong> {aula.tipoAula}</p>
    </div>
    <div className="p-4">
      <p className="text-lg"><strong>Descrição:</strong> {aula.descricao}</p>
    </div>

    <div className="p-4">
      <p className="text-lg"><strong>Tempo de duração:</strong> {aula.duracaoAula}</p>
    </div>

    <div className="p-4">
      <p className="text-lg"><strong>Aluno:</strong> {aula.aluno?.nome}</p>
    </div>
  </div>

  <div className="flex justify-end">
    <Link
      to={`/editaraula/${aula.id}`}
      className="w-1/2 bg-[#2C2C2E] text-white hover:bg-gray-500 flex items-center justify-center py-2 transition"
    >
      <button>Editar</button>
    </Link>

    <Link
      to={`/deletaraula/${aula.id}`}
      className="w-1/2 bg-[#ff9f00] text-white hover:bg-red-400 flex items-center justify-center py-2 transition"
    >
      <button>Deletar</button>
    </Link>
  </div>
</div>
    )
}

export default CardAula