import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeritoListaComponent } from './perito-lista/perito-lista.component';
import { PeritoRoute } from './perito.route';

@NgModule({
    imports: [CommonModule, SharedModule, PeritoRoute],
    declarations: [PeritoListaComponent],
})
export class PeritoModule {}
