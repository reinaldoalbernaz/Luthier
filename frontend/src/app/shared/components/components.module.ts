import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TituloPaginaComponent } from './titulo-pagina/titulo-pagina.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TituloPaginaComponent],
    exports: [TituloPaginaComponent],
})
export class ComponentsModule {}
