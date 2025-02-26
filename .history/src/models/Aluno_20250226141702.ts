export interface Aluno {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto?: string;
  peso: number;
  altura: number;
  objetivo: string;
  imc?: number;
}
