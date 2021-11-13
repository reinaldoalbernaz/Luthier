import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavbarService } from '../navbar/navbar.service';
import { linksMenus } from './links-menu.interface';
import { ROUTES } from './sidebar-routes.config';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
    mostrar = false;
    menuItems: linksMenus[] = [];
    subMenuAtivo: number | undefined;
    subscription = new Subscription();
    constructor(public navbarService: NavbarService) {
        this.subscription.add(
            this.navbarService
                .statusSidebar()
                .subscribe(res => this.mostrar = res)
        );
    }

    ngOnInit() {
        this.filtrarMenuPorPermissao();
    }

    private filtrarMenuPorPermissao() {
        this.menuItems = [];

        for (const rota of ROUTES) {
            const subMenuRota = [];

            for (const subMenu of rota.submenu) {
                if (subMenu.autoridades.length === 0) {
                    subMenuRota.push(subMenu);
                } else {
                    subMenuRota.push(subMenu);
                }
            }

            if (rota.autoridades.length === 0) {
                this.menuItems.push(rota);
            } else {
                rota.submenu = subMenuRota;
                this.menuItems.push(rota);
            }
        }

        // console.log(this.menuItems);
    }

    expandirMenu(i: number) {
        this.subMenuAtivo = this.subMenuAtivo === i ? undefined : i;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
