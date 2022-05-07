import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule, NgbModule],
    declarations: [],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule, NgbModule],
})
export class SharedModule {}
