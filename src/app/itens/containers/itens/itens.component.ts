import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ItensService} from '../../service/itens.service';
import {Item} from '../../model/item';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {

  fileName = '';
  fileNameUnimed = '';
  fileNameConcent = '';

  private fileUnimed: any;
  private fileConcent: any;

  itensDivergenteOrigemUnimed: Item[] = [];
  itensDivergenteOrigemConcent: Item[] = [];

  constructor(private service: ItensService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();
      formData.append("thumbnail", file);

      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      // upload$.subscribe();
    }
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
    this.service.proccessFiles(this.fileUnimed, this.fileConcent)
      .subscribe(
        result => {
          this.itensDivergenteOrigemUnimed = result.itensDivergenteOrigemUnimed;
          this.itensDivergenteOrigemConcent = result.itensDivergenteOrigemConcent;
          this.onSuccess();
        }, error => {
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
