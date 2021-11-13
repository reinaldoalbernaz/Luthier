import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandleService {
    constructor() { }

    mostrarErro(errorResponse: HttpErrorResponse, ativarLog?: boolean): void {

        if (ativarLog) {
            console.error(errorResponse);
        }

        if (!environment.debug) {
            // Mensagem para o usuário
            swal.fire({
                title: 'Erro encontrado',
                icon: 'error',
                text: errorResponse.error.userMessage,
            });
            console.error(errorResponse);
        } else {
            // Mensagem para o desenvolvedor
            swal.fire({
                title: 'DEBUG',
                icon: 'error',
                html:
                    `<div class="text-left">
                        <b>Título:</b> ${errorResponse.error.title} </br>
                        <b>Status:</b> ${errorResponse.error.status} </br>
                        <b>Tipo:</b> ${errorResponse.error.type} </br>
                        <b>URL:</b> ${errorResponse.url} </br></br>
                        <b>Detalhes:</b>
                        <div class="alert alert-dark mt-1">
                        ${errorResponse.error.detail}
                        </div>
                        </div>`
            });
        }

    }
}
