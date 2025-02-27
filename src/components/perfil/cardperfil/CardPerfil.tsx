import { useEffect, useState } from "react";
import { Aluno } from "../../../models/Aluno";
import { buscar } from "../../../services/Service";

function CardPerfil() {
  const [aluno, setAluno] = useState<Aluno>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    peso: 0,
    altura: 0,
    objetivo: "",
    imc: 0,
  });

  async function buscarPorId(id: string) {
    await buscar(`/aluno/${id}`, setAluno);
  }

  useEffect(() => {
    buscarPorId("4");
  }, []);

  return (
    <div className="flex justify-center min-h-[px] min-w-[250px]">
      <div className="container mx-auto my-6 rounded-xl overflow-hidden bg-[#2C2C2E] border border-gray-500 
      shadow-lg hover:shadow-xl transition-all p-6 text-center">
        <img
          className="w-full h-45 border-gray-600 rounded-2xl"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66f2c84d-51b2-4552-856b-6b998af96a1f/deog84s-9254f3a7-8367-40f8-bf5e-3753e2d5d7b7.png/v1/fill/w_1192,h_670,q_70,strp/bg_emote___anger_by_sidabathetoonlord_deog84s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjZmMmM4NGQtNTFiMi00NTUyLTg1NmItNmI5OThhZjk2YTFmXC9kZW9nODRzLTkyNTRmM2E3LTgzNjctNDBmOC1iZjVlLTM3NTNlMmQ1ZDdiNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.F1hLlxuVcGFHvOq_5DiKvzTGGZBO4wfJWqUPTjD5Iig"
          alt={`Capa do perfil de ${aluno.nome}`}
        />
        <div className="relative flex justify-center -mt-10">
          <div className="w-32 h-32 bg-white rounded-full flex justify-center items-center shadow-md">
            <img
              className="w-26 h-26 rounded-full"
              src={aluno.foto}
              alt={`Foto de perfil de ${aluno.nome}`}
            />
          </div>
        </div>
        <div className="text-white mt-4">
          <h2 className="text-lg font-bold">{aluno.nome}</h2>
          <p className="text-gray-300 text-sm mt-1">{aluno.objetivo}</p>
          <div className="flex justify-center gap-4 mt-4 text-lg font-semibold">
            <div className="text-center">
              <p>{aluno.peso} kg</p>
              <span className="text-sm text-gray-400">Peso</span>
            </div>
            <div className="text-center">
              <p>{aluno.altura} m</p>
              <span className="text-sm text-gray-400">Altura</span>
            </div>
            <div className="text-center">
              <p>{aluno.imc}</p>
              <span className="text-sm text-gray-400">IMC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPerfil;
