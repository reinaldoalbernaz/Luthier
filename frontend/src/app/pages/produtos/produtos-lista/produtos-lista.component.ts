import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-produtos-lista',
    templateUrl: './produtos-lista.component.html',
    styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

    produtos: any[] = [1, 2, 3];

    constructor() { }

    ngOnInit() {
    }

}
