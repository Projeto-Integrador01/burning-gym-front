import { Aula } from "./Aula";

export interface Professor {
  id: number;
  nome: string;
  especialidade: string;
  aula: Aula | null;
}
