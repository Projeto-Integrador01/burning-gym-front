import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";
import { buscar } from "../../../services/Service";



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





}