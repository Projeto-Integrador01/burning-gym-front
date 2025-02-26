import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Aula } from "../../../models/Aula";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormAula() {

    const navigate = useNavigate()

    const [aula, setAula] = useState<Aula>({} as Aula)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/aula/${id}`, setAula)
    }

    useEffect(() => {
        if(id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setAula({
            ...aula,
            [e.target.name]: e.target.value
        })
    }

    function retornar(){
        navigate("/aula")
    }

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
                    <label htmlFor="descricao">Professor</label>
                    <input
                        type="text"
                        placeholder="Insira o professor"
                        name='professor'
                        className="border-2 border-slate-700 rounded p-2"
                        value={aula.professor?.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
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