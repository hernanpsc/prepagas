import { Component, OnInit } from '@angular/core';
import {ProductPlant, ProductsFiltersQuery, ProductsFiltersService} from '../state';
import {Observable} from 'rxjs';
import { productsDB } from '../../shared/data/products';
// import * as planes from '../../../../public/products-copy.json';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../_modal';
import {ServcioRetronoPrecioService} from '../../services/servcio-retrono-precio.service';
import {ServicioDeCompararService} from '../../services/servicio-de-comparar.service';

declare var addProp:any;
declare var desectItem:any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  filtersForm = new FormGroup({
    search: new FormControl(),
    sortControl: new FormControl('+title'),
    empresaControl: new FormControl(),
    rating: new FormControl(),
    hijosSoloControl: new FormControl()
  });


  public productList : any ;
  public filterCategory : any
  products$: Observable<ProductPlant[]>;
  searchKey:string ="";
  bodyText: string;
  loading$: Observable<boolean>;
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  // articulos: any = (planes as any).default;
  compareList: [];
  compareLength: any;3
  planes : any = [];
  view = 'grid';
  constructor(
    private api : ApiService, 
    private productsService: ProductsFiltersService,
    private productsQuery: ProductsFiltersQuery,
    private modalService: ModalService,
    private retornarService: ServcioRetronoPrecioService,
    private deselctComparar: ServcioRetronoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    private cartService : CartService
    ) {}

    private setInitialFilters() {
      this.filtersForm.setValue({
        search: this.productsService.getFilterValue('search'),
        sortControl: this.productsService.getSortValue(),
        empresaControl: this.productsService.getFilterValue('empresa'),
        rating: this.productsService.getFilterValue('rating'),
        hijosSoloControl: this.productsService.getFilterValue('hijosSolo')
      }, { emitEvent: false });
    }
    // compareProdList() {
    //   this.compareLength = this.articulos.filter(p => p.compare).length;
    //   this.compareList = this.articulos.filter(p => p.compare);
    //   return this.articulos.filter(p => p.compare);
    // }
    addtocart(item: any){
      this.cartService.addtoCart(item);
    }
    filter(category:string){
      this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
    }
    removeFilter( id: any ) {
      this.productsService.removeFilter(id);
      this.setInitialFilters();
    }
  ngOnInit(): void {
    setTimeout(() => {
      
    this.productsService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });


      
      console.log(this.productList)
    });
    

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    });
    
      this.productsService.get().subscribe();
      this.loading$ = this.productsQuery.selectLoading();
  
      this.products$ = this.productsService.selectAll();
        // this.articulos = productsDB.Product;
        this.isLoaded = true;
      },0);

    this.retornarService.disparadorDePrecio.subscribe(data=>{
      console.log('Recibiendo data en home...',data);
      console.log(data)
//       console.log(this.articulos)
//  var products = addProp(this.articulos,data);
//  console.log(articulos);
 
 });
 this.deselctComparar.disparadorDePrecio.subscribe(deselct=>{
   console.log('Recibiendo data en home...',deselct);
   console.log(deselct);
//    console.log(this.articulos);
//  var compareProdList = desectItem(this.compareProdList,deselct);
//  console.log(compareProdList);
 });
     this.bodyText = 'This text can be updated in modal 1';
   
     
   }
  }




