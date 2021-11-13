import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [SidebarComponent, NavbarComponent, MainComponent],
  exports: [SidebarComponent, NavbarComponent, MainComponent],
})
export class LayoutsModule {}
