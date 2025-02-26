import { useState } from "react";
import { useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";
import { buscar } from "../../../services/Service";


function DeletarProfessor(){


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
        navigate("/categorias");
    }








}