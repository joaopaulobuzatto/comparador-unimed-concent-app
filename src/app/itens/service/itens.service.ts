import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {first} from 'rxjs';
import {Response} from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = '/api/itens';

  constructor(private httpClient: HttpClient) {
  }

  public comparaUnimedConcent(fileUnimed: File, fileConcent: File) {
    const formData: FormData = new FormData();
    formData.append("fileUnimed", fileUnimed);
    formData.append("fileConcent", fileConcent);
    return this.httpClient.post<Response>(`${this.API}/compara-unimed-concent`, formData).pipe(first());
  }

  public comparaUnimedNetRis(fileUnimed: File, fileNetRis: File) {
    const formData: FormData = new FormData();
    formData.append("fileUnimed", fileUnimed);
    formData.append("fileNetRis", fileNetRis);
    return this.httpClient.post<Response>(`${this.API}/compara-unimed-netris`, formData).pipe(first());
  }

}
