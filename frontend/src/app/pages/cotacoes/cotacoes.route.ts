import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CotacoesListaComponent } from './cotacoes-lista/cotacoes-lista.component';

const routes: Routes = [
    {
        path: '',
        component: CotacoesListaComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CotacoesRoute { }
