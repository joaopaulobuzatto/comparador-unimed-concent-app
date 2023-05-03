import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ItensService} from '../../service/itens.service';
import {Item} from '../../model/item';
import {Response} from "../../model/response";

@Component({
  selector: 'app-compara-concent',
  templateUrl: './compara-concent.component.html',
  styleUrls: ['./compara-concent.component.css']
})
export class ComparaConcentComponent implements OnInit {

  fileName = '';
  fileNameUnimed = '';
  fileNameConcent = '';

  private fileUnimed: any;
  private fileConcent: any;

  startRequestSubmit: boolean = false;
  finishRequestSubmit: boolean = false;

  totalItensUnimedProcessados: number = 0;
  totalItensUnimedComSucesso: number = 0;
  totalItensUnimedComDivergencia: number = 0;
  itensDivergenteOrigemUnimed: Item[] = [];
  totalItensConcentProcessados: number = 0;
  totalItensConcentComSucesso: number = 0;
  totalItensConcentComDivergencia: number = 0;
  itensDivergenteOrigemConcent: Item[] = [];

  constructor(private service: ItensService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onFileUnimedSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.fileNameUnimed = file.name;
      this.fileUnimed = file;
    }
  }

  onFileConcentSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.fileNameConcent = file.name;
      this.fileConcent = file;
    }
  }

  onSubmit() {
    console.log('onSubmit');
    this.startRequestSubmit = true;
    this.service.comparaUnimedConcent(this.fileUnimed, this.fileConcent)
      .subscribe(
        result => {
          this.totalItensUnimedProcessados = result.totalItensUnimedProcessados;
          this.totalItensUnimedComSucesso = result.totalItensUnimedComSucesso;
          this.totalItensUnimedComDivergencia = result.totalItensUnimedComDivergencia;
          this.itensDivergenteOrigemUnimed = result.itensDivergenteOrigemUnimed;
          this.totalItensConcentProcessados = result.totalItensConcentProcessados;
          this.totalItensConcentComSucesso = result.totalItensConcentComSucesso;
          this.totalItensConcentComDivergencia = result.totalItensConcentComDivergencia;
          this.itensDivergenteOrigemConcent = result.itensDivergenteOrigemConcent;
          this.startRequestSubmit = false;
          this.finishRequestSubmit = true;
          this.onSuccess();
        }, error => {
          this.startRequestSubmit = false;
          this.finishRequestSubmit = true;
          this.onError();
        });
  }

  onCancel() {
    console.log('onCancel');
    this.fileUnimed = null;
    this.fileConcent = null;
  }

  onSuccess() {
    this.snackBar.open('Relatórios processados com sucesso!', '', {
      duration: 3000
    });
    this.onCancel();
  }

  onError() {
    this.snackBar.open('Erro ao processar relatórios.', '', {
      duration: 3000
    });
  }
}
