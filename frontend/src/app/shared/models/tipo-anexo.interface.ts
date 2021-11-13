import { IAnexoServico } from './anexo-servico.interface';
import { ITipoServico } from './tipo-servico.interface';

export interface ITipoAnexo {
    anexoServico: IAnexoServico[];
    id: number;
    nome: string;
    tipoServico: ITipoServico[];
}
