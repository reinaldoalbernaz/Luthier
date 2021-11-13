import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ERole } from '../config/role.enum';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    email: string | undefined;
    senha: string | undefined;

    constructor(private router: Router) {}

    ngOnInit() {}

    logar() {
        let token = {
            nomeUsuario: '',
            role: [''],
        };

        switch (this.email?.toUpperCase()) {
            case "ADMIN": token = { nomeUsuario: 'Admin', role: [ERole.ADMIN] };
                break;
            case "USER": token = { nomeUsuario: 'User', role: [ERole.USER] };
                break;
            default:
                break;
        }

        localStorage.setItem('nomeUsuario', token?.nomeUsuario);
        localStorage.setItem('role', token?.role.toString());
        this.router.navigate(['/inicio']);
    }
}
