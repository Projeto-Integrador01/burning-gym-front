import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";
import { atualizar, buscar, cadastrar } from "../../../services/Service";



function FormProfessor(){
    const navigate = useNavigate();

    const[professor, setProfessor] = useState<Professor>({} as Professor);

    const [isLoading, setIsloading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>();



    async function buscarPorId(id: string) {
        try {
          await buscar(`/professor/${id}`, setProfessor);
        } catch (error: any) {
          alert("Erro ao buscar por id");
        }
      }


      useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id);
        }
      }, [id]);


      function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProfessor({
          ...professor,
          [e.target.name]: e.target.value,
        });
      }

      function retornar() {
        navigate("/professores");
      }


      async function gerarNovoProfessor(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setIsloading(true);
        
      
    
        if (id !== undefined) {
          try {
            await atualizar(`/professor`, professor, setProfessor);
            alert("Professor foi atualizado com sucesso!");
          } catch (error: any) {
            if (error.toString().includes("403")) {
            } else {
              alert("Erro ao atualizar o professor!");
            }
          }
        } else {
          try {
            await cadastrar(`/professor`, professor, setProfessor);
            alert("Professor cadastrado com sucesso!");
          } catch (error: any) {
            if (error.toString().includes("403")) {
              alert("Erro ao cadastrar");
            } else {
              alert("Erro ao cadastrar o professor!");
            }
          }
        }
    
        setIsloading(false);
        retornar();
      }

      return (
        <div className="container flex flex-col items-center text-white justify-center mx-auto">
          <h1 className="text-4xl text-center my-8">
            {id ? "Atualizar Professor" : "Cadastrar Professor"}
          </h1>
    
          <form
            onSubmit={gerarNovoProfessor}
            className="w-1/2 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Nome do professor</label>
              <input
                type="text"
                name="nome"
                value={professor.nome || ""}
                onChange={atualizarEstado}
                placeholder="Escreva o nome do professor"
                className="border-2 border-[#ff9f00] rounded p-2"
              />
              <label htmlFor="descricao">Especialidade do Professor</label>
               <input
                type="text"
                name="especialidade"
                value={professor.especialidade || ""}
                onChange={atualizarEstado}
                placeholder="Escreva a especialidade do professor"
                className="border-2 border-[#ff9f00] rounded p-2"
              />
            </div>
    
            <button
              className="rounded text-slate-100 bg-[#ff9f00] hover:bg-orange-500 w-1/2 py-2 mx-auto flex justify-center"
              type="submit"
            >
              {isLoading ? "Carregando..." : id ? "Atualizar" : "Cadastrar"}
            </button>
          </form>
        </div>
      );

}

export default FormProfessor;