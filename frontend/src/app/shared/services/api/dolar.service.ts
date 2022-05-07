import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Dolar } from '../../models/dolar';

import { ErrorHandleService } from '../error/handle-error.service';

@Injectable({ providedIn: 'root' })
export class DolarService {

    private endpoint = 'https://economia.awesomeapi.com.br/last/USD-BRL';

    constructor(private http: HttpClient, private errorHandleService: ErrorHandleService) { }

    dolarAtual(): Observable<Dolar> {
        return this.http.get<any>(this.endpoint).pipe(
            map((res) => {
                const dolar: Dolar = {
                    compra: res.USDBRL.bid,
                    venda: res.USDBRL.ask,
                    maximo: res.USDBRL.high,
                    minimo: res.USDBRL.low,
                }
                return dolar;
            }),
            catchError(err => {
                this.errorHandleService.mostrarErro(err);
                return throwError(err);
            })
        );
    }

}
