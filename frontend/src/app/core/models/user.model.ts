import { IPerito } from 'src/app/shared/models/perito.interface';
import { IServidor } from 'src/app/shared/models/servidor.interface';

import { ERole } from '../config/role.enum';

export interface IUser {
    id: number;
    nome: String;
    login: String;
    senha: String;
    role: ERole;
    ativo: Boolean;
    Perito: IPerito[];
    Servidor: IServidor[];
}
