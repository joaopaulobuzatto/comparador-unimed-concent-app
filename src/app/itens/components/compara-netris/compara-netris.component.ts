import {Component} from '@angular/core';
import {Item} from "../../model/item";
import {ItensService} from "../../service/itens.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-compara-netris',
  templateUrl: './compara-netris.component.html',
  styleUrls: ['./compara-netris.component.css']
})
export class ComparaNetrisComponent {

  fileName = '';
  fileNameUnimed = '';
  fileNameNetRis = '';

  private fileUnimed: any;
  private fileNetRis: any;

  finishProccess: boolean = false;

  totalItensUnimedProcessados: number = 0;
  totalItensUnimedComSucesso: number = 0;
  totalItensUnimedComDivergencia: number = 0;
  itensDivergenteOrigemUnimed: Item[] = [];
  totalItensNetRisProcessados: number = 0;
  totalItensNetRisComSucesso: number = 0;
  totalItensNetRisComDivergencia: number = 0;
  itensDivergenteOrigemNetRis: Item[] = [];

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

  onFileNetRisSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.fileNameNetRis = file.name;
      this.fileNetRis = file;
    }
  }

  onSubmit() {
    console.log('onSubmit');
    this.service.comparaUnimedNetRis(this.fileUnimed, this.fileNetRis)
      .subscribe(
        result => {
          this.totalItensUnimedProcessados = result.totalItensUnimedProcessados;
          this.totalItensUnimedComSucesso = result.totalItensUnimedComSucesso;
          this.totalItensUnimedComDivergencia = result.totalItensUnimedComDivergencia;
          this.itensDivergenteOrigemUnimed = result.itensDivergenteOrigemUnimed;
          this.totalItensNetRisProcessados = result.totalItensNetRisProcessados;
          this.totalItensNetRisComSucesso = result.totalItensNetRisComSucesso;
          this.totalItensNetRisComDivergencia = result.totalItensNetRisComDivergencia;
          this.itensDivergenteOrigemNetRis = result.itensDivergenteOrigemNetRis;
          this.finishProccess = true;
          this.onSuccess();
        }, error => {
          this.finishProccess = true;
          this.onError();
        });
  }

  onCancel() {
    console.log('onCancel');
    this.fileUnimed = null;
    this.fileNetRis = null;
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
