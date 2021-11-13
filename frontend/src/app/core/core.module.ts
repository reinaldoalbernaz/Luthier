import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreRoute } from './core.route';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, CoreRoute],
    declarations: [LoginComponent],
})
export class CoreModule {}
