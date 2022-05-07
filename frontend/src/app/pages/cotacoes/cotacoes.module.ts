import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CotacoesListaComponent } from './cotacoes-lista/cotacoes-lista.component';
import { CotacoesRoute } from './cotacoes.route';

@NgModule({
    imports: [SharedModule, CotacoesRoute],
    declarations: [CotacoesListaComponent],
})
export class CotacoesModule { }
