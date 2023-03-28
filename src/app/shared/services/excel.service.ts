import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() {
  }

  public exportExcel(array: any[], header: string[], fileName: string): void {
    const workSheet = XLSX.utils.json_to_sheet(array, {header: header});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, fileName);
    XLSX.writeFile(workBook, `${fileName}.xlsx`);
  }
}
