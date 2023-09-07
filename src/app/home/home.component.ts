import { Component, OnInit, Input } from '@angular/core';
import * as planes from '../../../public/products-copy.json';

import { ModalService } from '../_modal';
import {ServcioRetornoPrecioService} from '../services/servcio-retorno-precio.service';
import {ServicioDeCompararService} from '../services/servicio-de-comparar.service';

declare var addProp:any;
declare var desectItem:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  bodyText: string;
  title = 'product-app';
  articulos: any = (planes as any).default;


  hidden = false;
  compareList: [];

  
  compareLength: any;


   constructor(
    private modalService: ModalService,
    private retornarService: ServcioRetornoPrecioService,
    private deselctComparar: ServcioRetornoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    ) {} 

  public productosActualizados:Array<any> = []
 
  compareProdList() {
    this.compareLength = this.articulos.filter(p => p.compare).length;
    this.compareList = this.articulos.filter(p => p.compare);
    return this.articulos.filter(p => p.compare);
  }

  compareProdClinicas(articulos){
    var clinicas = [];
    let itemSelected = articulos; 
    // console.log('seleccionados' + itemSelected )
for ( let x = 0 ; x < itemSelected.length ; x++ ) {
    let item = itemSelected[x].clinicas;
    for( let i = 0 ; i < item.length ; i++ ){
        let name = item[i].nombre;
        if (clinicas.indexOf(name)==-1) clinicas.push(name) 
       }}
      //  console.log(clinicas)
       return clinicas
      }
    


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  openModal(id: string) {

    this.modalService.open('custom-modal-2');
   
  }

  closeModal(id: string) {
 
    this.modalService.close('custom-modal-2');
  }
  openModa(id: string) {
    this.modalService.open('custom-modal-3');

  }

  closeModa(id: string) {
    this.modalService.close('custom-modal-3');

  }

closeButon() {
 alert(this.compareList.length);

  }
 
  ngOnInit(): void {
   this.retornarService.disparadorDePrecio.subscribe(data=>{
     console.log('Recibiendo data en home...',data);
     console.log(data)
     console.log(this.articulos)
var products = addProp(this.articulos,data);
console.log(products);

});
this.deselctComparar.disparadorDePrecio.subscribe(deselct=>{
  console.log('Recibiendo data en home...',deselct);
  console.log(deselct);
  console.log(this.articulos);
var compareProdList = desectItem(this.compareProdList,deselct);
console.log(compareProdList);
});
    this.bodyText = 'This text can be updated in modal 1';
  
    
  }
  
  toggle() {
    this.show = !this.show;

    if(this.show)  
    this.buttonName = "Hide";
  else
    this.buttonName = "Show";
}
deleteMsg(i) {
  
}
}
