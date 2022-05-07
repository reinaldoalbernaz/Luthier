import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cotacoes-lista',
    templateUrl: './cotacoes-lista.component.html',
    styleUrls: ['./cotacoes-lista.component.scss'],
})
export class CotacoesListaComponent implements OnInit {
    peritos: any[] = [1, 2, 3];

    constructor() {}

    ngOnInit() {}
}
