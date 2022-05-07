import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [SidebarComponent, NavbarComponent, MainComponent],
    exports: [SidebarComponent, NavbarComponent, MainComponent],
})
export class LayoutsModule { }
