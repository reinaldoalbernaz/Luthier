import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PartiturasListaComponent } from './partituras-lista/partituras-lista.component';
import { PartiturasRoute } from './partituras.route';

@NgModule({
    imports: [SharedModule, PartiturasRoute],
    declarations: [PartiturasListaComponent],
})
export class PartiturasModule {}
