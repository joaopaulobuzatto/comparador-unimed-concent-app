import {Component, Input, OnInit} from '@angular/core';

import {Item} from '../../model/item';

@Component({
  selector: 'app-itens-unimed-list',
  templateUrl: './itens-unimed-list.component.html',
  styleUrls: ['./itens-unimed-list.component.css']
})
export class ItensUnimedListComponent implements OnInit {

  @Input() itens: Item[] = [];

  readonly displayedColumns = ['requisicao', 'guia', 'beneficiario', 'codigo', 'descricao'];

  ngOnInit(): void {
  }

}
