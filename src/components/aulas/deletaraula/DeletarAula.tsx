import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import { Aula } from "../../../models/Aula"
import { buscar, deletar } from "../../../services/Service"

function DeletarAula() {

    const navigate = useNavigate()

    const [aula, setAula] = useState<Aula>({} as Aula)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/aula/${id}`, setAula)
        } catch (error: any) {
            alert('Erro ao buscar a aula.')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarAula() {
        setIsLoading(true)

        try {
            await deletar(`/aula/${id}`)

            alert('Aula apagada com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar a aula.')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/aula")
    }

    return (
        <div>
        <h1 className='text-4xl text-white text-center my-4'>Deletar aula</h1>
            <p className='text-center text-white font-semibold mb-4'>
                Você tem certeza de que deseja apagar a aula a seguir?</p>
        <div className="min-w-[350px] border border-gray-300 rounded-lg overflow-hidden bg-gray-100 shadow-md">
  {/* Cabeçalho laranja */}
  <div className="flex w-full bg-[#ff9f00] py-3 px-5 items-center gap-4">
    <h3 className="text-lg font-bold text-white uppercase">{aula.professor?.especialidade}</h3>
    
  </div>

  {/* Conteúdo da aula */}
<br/>
  <div className="p-4">
    <div className="p-4">
      <p className="text-lg"><strong>Professor:</strong> {aula.professor?.nome}</p>
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

  {/* Botões de ação */}
  <div className="flex">
    <button
      className="text-slate-100 bg-[#2C2C2E] hover:bg-red-500 w-full py-2"
      onClick={retornar}>
      Não
    </button>
    <button
      className="w-full text-slate-100 bg-[#2C2C2E] border-l border-white hover:bg-[#ff9f00] flex items-center justify-center"
      onClick={deletarAula}>
      {isLoading ? (
        <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
      ) : (
        <span>Sim</span>
      )}
    </button>
  </div>
</div>
</div>

    )
}
export default DeletarAula
