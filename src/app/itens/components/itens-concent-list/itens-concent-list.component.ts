import {Component, Input, OnInit} from '@angular/core';

import {Item} from '../../model/item';

@Component({
  selector: 'app-itens-concent-list',
  templateUrl: './itens-concent-list.component.html',
  styleUrls: ['./itens-concent-list.component.css']
})
export class ItensConcentListComponent implements OnInit {

  @Input() itens: Item[] = [];

  readonly displayedColumns = ['guia', 'beneficiario', 'codigo', 'descricao'];

  ngOnInit(): void {
  }

}
