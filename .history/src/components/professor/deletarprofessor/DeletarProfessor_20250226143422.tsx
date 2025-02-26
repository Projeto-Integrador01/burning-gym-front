import { useState } from "react";
import { useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";


function DeletarProfessor(){


    const [professor, setProfessor] = useState<Professor>({} as Professor);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();


    async function buscarPorId(id: string) {
        try {
            await buscar(`/professor/${id}`, setProfessor);
        } catch (error: any) {
            // Handle error
        }
    }








}