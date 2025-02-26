export interface Aluno {
  id: string;
  nome: string;
  usuario: string;
  senha: string;
  foto?: string;
  peso: number;
  altura: number;
  objetivo: string;
  imc?: number;
}
