import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

export interface Aula {
  id: string;
  tipoAula: string;
  descricao: string;
  data: string;
  duracaoAula: string;
  aluno: Aluno | null;
  professor: Professor | null;
}
