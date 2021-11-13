import { IServico } from './servico.interface';
import { ITipoAnexo } from './tipo-anexo.interface';

export interface ITipoServico {
    descricao: String;
    id: number;
    limiteDias: number;
    nome: String;
    servico: IServico[];
    sigla?: String;
    tiposAnexo: ITipoAnexo[];
}
