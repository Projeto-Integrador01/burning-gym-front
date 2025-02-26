import { Aula } from "./Aula";

export interface Professor {
  id: string;
  nome: string;
  especialidade: string;
  aula: Aula | null;
}
