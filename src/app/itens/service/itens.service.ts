import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {first} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = '/api/proccess-files';

  constructor(private httpClient: HttpClient) {
  }

  public proccessFiles(fileUnimed: File, fileConcent: File) {
    const formData: FormData = new FormData();
    formData.append("fileUnimed", fileUnimed);
    formData.append("fileConcent", fileConcent);
    return this.httpClient.post<any>(this.API, formData).pipe(first());
  }

}
