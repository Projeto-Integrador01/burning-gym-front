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
        navigate("/");
      }


      async function gerarNovoProfessor(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setIsloading(true);
        
      
    
        if (id !== undefined) {
          try {
            await atualizar(`/categorias`, professor, setProfessor);
            alert("Professor foi atualizado com sucesso!");
          } catch (error: any) {
            if (error.toString().includes("403")) {
              // Tratar erro 403, se necessário
            } else {
              alert("Erro ao atualizar a catergoria!");
            }
          }
        } else {
          try {
            await cadastrar(`/categorias`, professor, setProfessor);
            alert("Categoria cadastrado com sucesso!");
          } catch (error: any) {
            if (error.toString().includes("403")) {
              alert("Erro ao cadastrar");
            } else {
              alert("Erro ao cadastrar o Categoria!");
            }
          }
        }
    
        setIsLoading(false);
        retornar();
      }





}