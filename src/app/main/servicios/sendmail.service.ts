import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';

const BASE_URL = environment.apiProd;

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http: HttpClient) { 

  }

  sendMail(data: any){
    return this.http.post(`${BASE_URL}/sendmail`,data);
  }



}
