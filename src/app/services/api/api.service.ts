import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly API_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getInfo(endPoint: string) {
    return this.http.get(this.API_URL + endPoint);
  }

  public getEndpoint(endPoint: string) {
    return this.http.get(endPoint);
  }
}
