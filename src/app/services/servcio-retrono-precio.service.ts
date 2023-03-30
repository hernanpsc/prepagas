import {  EventEmitter, Injectable,Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServcioRetronoPrecioService {
  @Output() disparadorDePrecio: EventEmitter <any> = new EventEmitter;
  constructor() { }
}
