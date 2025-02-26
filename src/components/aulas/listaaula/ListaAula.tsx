import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import CardAula from "../cardaula/CardAula";
import { buscar } from "../../../services/Service";
import { Aula } from "../../../models/Aula";

function ListaAula() {

    const [aula, setAula] = useState<Aula[]>([])

    useEffect(() =>{
        buscar('/aula', setAula);
    }, [aula.length])

    return ( 
        <>
        {aula.length === 0 && (
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
                       {aula.map((aula) => (
                            <CardAula key={aula.id} aula={aula} />
                        ))}
                    </div>
                </div>
            </div>
        </>
     );
}

export default ListaAula;