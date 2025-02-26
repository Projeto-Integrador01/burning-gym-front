import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Aula } from "../../../models/Aula";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { Professor } from "../../../models/Professor";

function FormAula() {

    const navigate = useNavigate()

    const [aula, setAula] = useState<Aula>({} as Aula)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [professor, setProfessor] = useState<Professor>({} as Professor)
    const [professores, setProfessores] = useState<Professor[]>([])

    const { id } = useParams<{ id: string }>();

    async function buscarAulaId(id: string) {
        await buscar(`/aula/${id}`, setAula)
    }

    async function buscarProfessorId(id: string) {
        await buscar(`/professor/${id}`, setProfessor)
    }

    async function buscarProfessores() {
        await buscar(`/professor`, setProfessores)
    }

    // Esse useEffect é responsavel por buscar os Temas e também, se o ID for diferente de undefined
    // pegar o ID da postagem e fazer um busca no back-end em busca dos dados
    useEffect(() => {
        buscarProfessores()

        if (id !== undefined) {
            buscarAulaId(id)
        }
    }, [id])

    // Sempre que um Tema for escolhido, fazemos o relacionamento desse novo tema com a Postagem
    useEffect(() => {
        setAula({
            ...aula,
            professor: professor,
        })
    }, [professor])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setAula({
            ...aula,
            [e.target.name]: e.target.value,
            professor: professor
        })
    }

    function retornar(){
        navigate("/aula")
    }

    console.log(aula)

    async function gerarNovaAula(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
              await atualizar(`/aula`, aula, setAula);
              alert('A aula foi atualizada com sucesso!');
            } catch (error: any) {
              alert('Erro ao atualizar a aula.');
            }
          } else {
            try {
              await cadastrar(`/aula`, aula, setAula);
              alert('A aula foi cadastrada com sucesso!');
            } catch (error: any) {
              alert('Erro ao aula a aula.');
            }
          }
        
          setIsLoading(false);
          retornar();
    }

    return ( 
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar aula' : 'Editar aula'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaAula}>
                <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Tipo da aula</label>
                    <input
                        type="text"
                        placeholder="Insira o tipo da aula"
                        name='tipoAula'
                        className="border-2 border-slate-700 rounded p-2"
                        value={aula.tipoAula}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição da aula</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua aula"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={aula.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Data da aula</label>
                    <input
                        type="text"
                        placeholder="Insira a data da aula"
                        name='data'
                        className="border-2 border-slate-700 rounded p-2"
                        value={aula.data}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Duração da aula</label>
                    <input
                        type="text"
                        placeholder="Insira a duração da aula"
                        name='duracaoAula'
                        className="border-2 border-slate-700 rounded p-2"
                        value={aula.duracaoAula}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <p>Professores</p>
                    <select name="professor" id="professor" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarProfessorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Tema</option>

                        {professores.map((professor) => (
                            <>
                                <option value={professor.id} >{professor.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
     );
}

export default FormAula;