import {Component, Input, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';

import {Item} from '../../model/item';
import {ExcelService} from '../../../shared/services/excel.service';

@Component({
  selector: 'app-itens-unimed-list',
  templateUrl: './itens-unimed-list.component.html',
  styleUrls: ['./itens-unimed-list.component.css']
})
export class ItensUnimedListComponent implements OnInit {

  @Input() itens: Item[] = [];

  readonly displayedColumns = ['requisicao', 'guia', 'beneficiario', 'codigo', 'descricao'];

  constructor(private excelService: ExcelService) {
  }

  ngOnInit(): void {
  }

  exportExcel() {
    let header = ['requisicao', 'guia', 'beneficiario', 'codigo', 'descricao'];
    this.excelService.exportExcel(this.itens, header, 'erros-unimed');
  }

}
