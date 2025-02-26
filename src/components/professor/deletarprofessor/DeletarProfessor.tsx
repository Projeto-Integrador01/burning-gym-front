import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";


function DeletarProfessor(){

    const navigate = useNavigate();


    const [professor, setProfessor] = useState<Professor>({} as Professor);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();


    async function buscarPorId(id: string) {
        try {
            await buscar(`/professor/${id}`, setProfessor);
        } catch (error: any) {
            
        }
    }

    async function deletarProfessor() {
        setIsLoading(true);

        try {
            await deletar(`/professor/${id}`);
        } catch (error: any) {
            alert("Erro ao deletar o professor");
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/professores");
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);


    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar professor</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o professor a seguir?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-[rgb(34,197,94)]'>
                <header className='py-2 px-6 text-white font-bold text-2xl'>
                    Professor
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{professor.nome}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-[rgb(34,197,94)] hover:bg-[rgb(34,160,74)] flex items-center justify-center'
                        onClick={deletarProfessor}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarProfessor;