import { IAnexoServico } from './anexo-servico.interface';
import { IParecer } from './parecer.interface';

export interface IServico {
    anexoServico: IAnexoServico[];
    dataFim: Date;
    dataInicio: Date;
    dataProcesso?: Date;
    dataRequerimento: Date;
    id: number;
    numeroProcesso?: String;
    numeroSgd?: String;
    parecer: IParecer[];
    qtdDias: number;
    tipoServicoId: number;
    vinculoId: number;
}
