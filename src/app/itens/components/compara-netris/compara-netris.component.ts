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

  itensDivergenteOrigemUnimed: Item[] = [];
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
          this.itensDivergenteOrigemUnimed = result.itensDivergenteOrigemUnimed;
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
