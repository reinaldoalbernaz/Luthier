export interface IDependente {
    id: number;
    vinculoId: number;
    nome: string;
    tipo?: string;
    cpf?: string;
    dataNascimento: Date;
    sexo: string;
}
