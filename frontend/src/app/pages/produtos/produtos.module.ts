import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosRoute } from './produtos.route';

@NgModule({
    imports: [
        SharedModule,
        ProdutosRoute
    ],
    declarations: [
        ProdutosListaComponent
    ]
})
export class ProdutosModule { }
