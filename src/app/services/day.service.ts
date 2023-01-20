import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class DayService {
  
  

  constructor(private http: HttpClient) { }

  generatePhotoNew(formattedString: string) {
    return this.http.get(`${environment.baseUrl}&date=${formattedString}`);
  }
  

}
