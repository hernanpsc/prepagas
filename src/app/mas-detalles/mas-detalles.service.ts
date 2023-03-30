import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class infoplanesService   {
 

    constructor(private http:HttpClient){
       
    }
}