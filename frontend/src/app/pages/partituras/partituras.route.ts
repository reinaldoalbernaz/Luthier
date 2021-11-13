import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartiturasListaComponent } from './partituras-lista/partituras-lista.component';

const routes: Routes = [
    {
        path: '',
        component: PartiturasListaComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartiturasRoute { }
