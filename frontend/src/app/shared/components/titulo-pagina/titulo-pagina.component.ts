import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TituloPaginaComponent implements OnInit {

    @Input() titulo: string | undefined;
    @Input() icone?: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
