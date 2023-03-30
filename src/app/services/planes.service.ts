import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }

  constructor( public http: HttpClient) {
  }

  getPlanes(){
    return this.http.get('URL',this.httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}