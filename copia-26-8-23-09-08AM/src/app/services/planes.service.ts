import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Planes } from '../interfaces/planes';
import { SERVER_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private planes$: Subject<Planes[]> = new Subject();

  private url = SERVER_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }

  constructor(private httpClient: HttpClient) { }

  private refreshPlanes() {
    this.httpClient.get<Planes[]>(`${this.url}/planes`)
      .subscribe(planes => {
        this.planes$.next(planes);
      });
  }

  getPlanes(): Subject<Planes[]> {
    this.refreshPlanes();
    return this.planes$;
  }
  // getPlanes(){
  //   return this.http.get('URL',this.httpOptions).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}