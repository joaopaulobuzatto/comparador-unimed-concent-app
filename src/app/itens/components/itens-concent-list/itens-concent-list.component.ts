import {Component, Input, OnInit} from '@angular/core';

import {Item} from '../../model/item';
import {ExcelService} from "../../../shared/services/excel.service";

@Component({
  selector: 'app-itens-concent-list',
  templateUrl: './itens-concent-list.component.html',
  styleUrls: ['./itens-concent-list.component.css']
})
export class ItensConcentListComponent implements OnInit {

  @Input() itens: Item[] = [];
  @Input() sistemaComparado: string = '';

  readonly displayedColumns = ['requisicao', 'guia', 'beneficiario', 'codigo', 'descricao', 'quantidade'];

  constructor(private excelService: ExcelService) {
  }

  ngOnInit(): void {
  }

  exportExcel() {
    let header = ['requisicao', 'guia', 'beneficiario', 'codigo', 'descricao', 'quantidade'];
    this.excelService.exportExcel(this.itens, header, `erros-${this.sistemaComparado}`);
  }

}
