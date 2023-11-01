import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private url = SERVER_URL;

  constructor(private http: HttpClient) { }

  getPrecios(formCotizar: any) {
    const url = `${this.url}/cotizacion`; 
    console.log('en el servicio',url);
    console.log('en el servicio',formCotizar)
    return this.http.post(url, formCotizar);
  }




}