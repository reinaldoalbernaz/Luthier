import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeritoListaComponent } from './perito-lista/perito-lista.component';

const routes: Routes = [
    {
        path: '',
        component: PeritoListaComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PeritoRoute { }
