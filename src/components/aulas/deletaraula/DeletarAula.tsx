import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import { Aula } from "../../../models/Aula"
import { buscar } from "../../../services/Service"

function DeletarAula() {

    const navigate = useNavigate()

    const [aula, setAula] = useState<Aula>({} as Aula)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setAula)
        } catch (error: any) {
            alert('Erro ao buscar a categoria.')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletar() {
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
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar aula</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-blue-400 text-white font-bold text-2xl'>
                    <p>{}</p>
                </header>
                <h3 className='text-lg font-bold text-center uppercase'>
                        {aula.tipoAula}
                </h3>
                <h4 className='text-lg font-semibold uppercase'>{aula.data}</h4>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição: {aula.descricao}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Tempo de duração: {aula.duracaoAula}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Professor: {aula.professor?.nome}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>Aluno: {aula.aluno?.nome}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-400
                                   hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletar}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarAula
