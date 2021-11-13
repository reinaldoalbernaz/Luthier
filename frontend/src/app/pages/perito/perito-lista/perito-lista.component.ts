import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perito-lista',
  templateUrl: './perito-lista.component.html',
  styleUrls: ['./perito-lista.component.scss']
})
export class PeritoListaComponent implements OnInit {

    peritos: any[] = [1, 2, 3,];
  constructor() { }

  ngOnInit() {
  }

}
