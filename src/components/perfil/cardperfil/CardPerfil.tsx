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
    buscarPorId("3");
  }, []);

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-6 rounded-2xl overflow-hidden bg-[#2C2C2E]">
        <img
          className="w-full h-60 object-cover border-b-8 border-white"
          src="https://media.istockphoto.com/id/472347896/pt/foto/campo-de-futebol-listrado.jpg?s=612x612&w=0&k=20&c=gC6LYxNjFxVyndHWWYDgLOnNDY4YGmVOWknX0W7a4Io="
          alt="Capa do Perfil"
        />

        <img
          className="rounded-full w-36 mx-auto mt-[-8rem] border-8 border-white relative z-10"
          src={aluno.foto}
          alt={`Foto de perfil de ${aluno.nome}`}
        />

        <div className="relative mt-[-6rem] h-72 flex flex-col bg-[#D32F2F] text-white text-3xl items-center justify-center p-10">
          <p>Nome: {aluno.nome} </p>
          <p>IMC: {aluno.imc}</p>
          <p>Objetivo: {aluno.objetivo}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPerfil;
