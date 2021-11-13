import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partituras-lista',
    templateUrl: './partituras-lista.component.html',
    styleUrls: ['./partituras-lista.component.scss'],
})
export class PartiturasListaComponent implements OnInit {
    peritos: any[] = [1, 2, 3];

    constructor() {}

    ngOnInit() {}
}
