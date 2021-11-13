import { IPerito } from './perito.interface';

export interface IEspecialidade {
    grupo?: string;
    id: number;
    nome: string;
    peritos: IPerito[];
}
