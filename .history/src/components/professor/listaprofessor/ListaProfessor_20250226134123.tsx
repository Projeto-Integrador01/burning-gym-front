import { useEffect, useState } from "react";
import { Professor } from "../../../models/Professor";
import { buscar } from "../../../services/Service";


function ListaProfessor(){

const[professor, setProfessor] = useState<Professor[]>([])

async function listaProfessor(){

    try{
        await buscar(`/professor`, setProfessor)
    }catch(error: any){
        if(error.toString().includes('403')){
            alert("erro ao listar os professores")
        }
    }
    
}



useEffect(()=> {
    listaProfessor()
}, [categoria.length])


}