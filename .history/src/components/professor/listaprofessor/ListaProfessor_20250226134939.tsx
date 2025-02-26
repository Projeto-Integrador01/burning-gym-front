import { useEffect, useState } from "react";
import { Professor } from "../../../models/Professor";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardProfessor from "../cardprofessor/CardProfessor";


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
}, [professor.length])


return (
    <>
        {professor.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {professor.map((professor) => (
                            <CardProfessor key={professor.id} professor={professor} />
                        ))}
                    </div>
                </div>
            </div>
        </>
)















}