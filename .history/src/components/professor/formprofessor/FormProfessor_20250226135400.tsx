import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";



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





}