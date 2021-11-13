import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    sidebar = true;
    nomeUsuario: string | undefined;
    role: string | undefined;
    constructor(
        public navbarService: NavbarService,
        private deviceService: DeviceDetectorService,
        private router: Router
    ) {}

    ngOnInit() {
        this.ajustarLayoutMobile();
        this.buscarUsuarioLogado();
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
}
