import { EConselho } from './conselho.enum';
import { IEspecialidade } from './especialidade.interface';
import { IParecer } from './parecer.interface';

export interface IPerito {
    celular?: string;
    conselho: EConselho;
    cpf: string;
    email: string;
    especialidades: IEspecialidade[];
    id: number;
    nome: string;
    numeroConselho: number;
    Parecer: IParecer[];
    telefone?: string;
    ufConselho: string;
    userId?: number;
}
