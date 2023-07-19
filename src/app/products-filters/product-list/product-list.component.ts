import { Component, OnInit, HostBinding } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { PlanesService } from '../../services/planes.service';
import {ServcioRetornoPrecioService} from '../../services/servcio-retorno-precio.service';
import * as planes from '../../../../public/products-copy.json';

import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { ModalService } from '../../_modal';
import {ProductPlant, ProductsFiltersQuery, ProductsFiltersService} from '../state';




declare var addProp:any;

declare var $: any;

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductPlant[]>;
loading$: Observable<boolean>;
  [x: string]: any;

  public show:boolean = false;
  public buttonName:any = 'Show';
  bodyText: string;
  title = 'product-app';
  // products: any = (planes as any).default;

  hidden = false;
  compareList: [];
  compareLength: any;
  
  phone = "5491124608689"
  mensaje = "Hola Hernán, necesito más info de los planes, gracias";


  
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  planes : any = [];
  view = 'grid';
 
  empresa = '';
  SearchEmpresa = '';
  SortbyParam = '';
  SortDirection = 'asc';
  showFiller = false;






  constructor(
    private modalService: ModalService,
    private productsService: ProductsFiltersService,
    private productsQuery: ProductsFiltersQuery,
    private retornarService: ServcioRetornoPrecioService) {}

  public productosActualizados:Array<any> = []
  compareProdList() {
    this.compareLength = this.products.filter(p => p.compare).length;
    this.compareList = this.products.filter(p => p.compare);
    return this.products.filter(p => p.compare);
  }

  compareProdClinicas(products){
    var clinicas = [];
    let itemSelected = products; 
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
      openM(id: string) {
    
        this.modalService.open('custom-modal-4');
      }
    
      closeM(id: string) {
     
        this.modalService.close('custom-modal-4');
      }
      openMod(id: string) {
        this.modalService.open('custom-modal-5');
    
      }
    
      closeMod(id: string) {
        this.modalService.close('custom-modal-5');
    
      }
  ngOnInit(): void {
    this.retornarService.disparadorDePrecio.subscribe(data=>{
      console.log('Recibiendo data en product List...',data);
      
  
 
 
 // const preciosPlanes = data[0].concat(this.products);
 
 //       console.log(preciosPlanes);
 // dedupe(preciosTodos)
 
 let concatenados = addProp(this.products,data[0])
 console.log(concatenados);

 
 })

     this.productsService.get().subscribe();
    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.productsService.selectAll();
    // setTimeout(() => {
    //   this.productsService.get().subscribe();
    // this.loading$ = this.productsQuery.selectLoading();

    // this.products$ = this.productsService.selectAll();
    //   this.products = productsDB.Product;
    //   this.isLoaded = true;
    // }, 0);
  }

  onEmpresaFilter() {
    this.SearchEmpresa = this.empresa;
  }

  onEmpresaFilterClear() {
    this.SearchEmpresa = '';
    this.empresa = 'Empresa';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  };
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


  