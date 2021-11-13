import { IDependente } from './dependente.interface';
import { IServico } from './servico.interface';

export interface IVinculo {
    cargo: string;
    categoria?: string;
    dataExercicio: Date;
    departamento: string;
    dependentes: IDependente[];
    id: number;
    lotacao: string;
    matricula: string;
    orgao: string;
    regime: string;
    regional?: string;
    Servico: IServico[];
    servidorId: number;
    subCategoria?: string;
    unidade?: string;
}
