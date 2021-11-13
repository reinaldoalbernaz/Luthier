import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InicioComponent } from './inicio.component';
import { InicioRoute } from './inicio.route';

@NgModule({
  imports: [CommonModule, InicioRoute],
  declarations: [InicioComponent],
})
export class InicioModule {}
