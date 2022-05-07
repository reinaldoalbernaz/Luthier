import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { Dolar } from 'src/app/shared/models/dolar';
import { DolarService } from 'src/app/shared/services/api/dolar.service';

import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {

    sidebar = true;
    nomeUsuario: string | undefined;
    role: string | undefined;

    dolar: Dolar;

    private subscribe = new Subscription();

    constructor(
        public navbarService: NavbarService,
        private dolarService: DolarService,
        private deviceService: DeviceDetectorService,
        private router: Router
    ) { }

    ngOnInit() {
        this.ajustarLayoutMobile();
        this.buscarUsuarioLogado();
        this.dolarAtual();
    }

    dolarAtual() {
        this.subscribe.add(
            this.dolarService.dolarAtual().subscribe({
                next: (res: Dolar) => this.dolar = res,
            })
        );
    }

    buscarUsuarioLogado() {
        this.nomeUsuario = localStorage.getItem('nomeUsuario')?.toString();
        this.role = localStorage.getItem('role')?.toString();
    }

    ajustarLayoutMobile() {
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();

        if (isMobile || isTablet) {
            if (this.sidebar) {
                this.sidebar = false;
                this.navbarService.alterar(false);
            }
        } else {
            this.sidebar = true;
            this.navbarService.alterar(true);
        }
    }

    ativarSidebar() {
        this.navbarService.alterar((this.sidebar = !this.sidebar));
    }

    deslogar() {
        this.router.navigate(['/']);
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }
}
