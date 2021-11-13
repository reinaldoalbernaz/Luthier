import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
    declarations: [],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
})
export class SharedModule {}
