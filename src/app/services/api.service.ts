import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>('../assets/data/products.json')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  productService(){
    return [
      {
        id: 1,
        price: 1000
      },
      {
        id: 2,
        price: 2000
      },
      {
        id:3,
        price:3000
      },
      {
        id:4,
        price:4000
      }
    ];
  }
}






 

 

