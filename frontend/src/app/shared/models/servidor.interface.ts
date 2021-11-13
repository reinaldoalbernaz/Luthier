import { IVinculo } from './vinculo.interface';

export interface IServidor {
    bairro?: string;
    celular?: string;
    cep?: string;
    cidade?: string;
    complemento?: string;
    cpf: string;
    dataNascimento?: Date;
    email?: string;
    endereco?: string;
    id: number;
    nome: string;
    numero?: string;
    sexo: string;
    telefone?: string;
    userId?: number;
    vinculos: IVinculo[];
}
