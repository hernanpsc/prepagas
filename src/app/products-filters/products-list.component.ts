import {Component, OnInit,HostBinding, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { productsDB } from '../shared/data/products';
import { PlanesService } from '../services/planes.service';
import { Plans } from '../models/Plans';
import { ActivatedRoute, Router } from '@angular/router'
import * as planes from '../../../public/products.json';
import { ModalService } from '../_modal';
import { CartService } from '../services/cart.service';
import {ServcioRetronoPrecioService} from '../services/servcio-retrono-precio.service';
import {ServicioDeCompararService} from '../services/servicio-de-comparar.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as clinicas from '../shared/data/clinicas.json';
import { ApiService } from '../services/api.service'


declare var addProp:any;
declare var desectItem:any;
declare var showandHide:any;

  
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productList : any ;
  public filterCategory : any;
  [x: string]: any;
  loading$: Observable<boolean>;
  public show:boolean = false;
  public buttonName:any = 'Show';

  bodyText: string;
  title = 'product-app';
  public secureProducts: any = (planes as any).default; 
  public products: any = (planes as any).default;
  hidden = false;
  compareList: [];
  compareLength: any;
  public clinicas: any = (clinicas as any).default;

  
  @HostBinding('class') classes = 'row';
  plan: Plans = {
    id:0 ,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };

  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  planes : any = [];
  view = 'grid';
  
  validacionclinica = 'show';
  SearchClinica = '';
  empresa = '';
  SearchEmpresa = '';
  SortbyParam = '';
  SortDirection = 'asc';
  showFiller = false;
  product = [{"empresa": "SanCor Salud",},{"empresa": "OMINT"},{"empresa": "Galeno"},{"empresa": "Avalian"},{"empresa": "Swiss Medical"},{"empresa": "Premedic"},{"empresa":"Medife"}]

  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  formFilter: FormGroup;
  
  dropdownSettings: {};
  dropdownClinica = [];
  clinicaSettings:IDropdownSettings = {};
  selectedClinica = [];
  constructor(
    private modalService: ModalService,
    private retornarService: ServcioRetronoPrecioService,
    private deselctComparar: ServcioRetronoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    private cartService : CartService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    ) {
      this.buildForm();
    }
    public productosActualizados:Array<any> = []
    private buildForm(){

      this.formFilter =this.formBuilder.group({
        buscaClinica: [''],
        empresa_prepaga: ['0'],

      });
    }
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
      removeFilter( id: any ) {
        this.productsService.removeFilter(id);
        this.setInitialFilters();
      } 

      changeDisplay(mode: number): void {
        this.display = mode;
      }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
tempArrayShow:any=[];
tempArrayHide:any=[];


onItemSelect(item: any){
  console.log('onItemSelect', item);
   console.log(this.tempArrayShow);
   console.log(this.tempArrayHide);
  
 

  let newArray = [];
  

  this.products = this.secureProducts;

console.log(this.products)
  var seleccion = this.selectedClinica
  for( let i=0;i<seleccion.length;i++){
    console.log(seleccion[i])
  }
  var planes = this.products;
  this.showandHide = this.products;
// planes = this.tempArrayHide.concat(this.tempArrayShow);
  var clinicas_seleccionadas = seleccion.map(function (selectas, index, array) {
    return selectas.item_text; 
});
if ( seleccion.length = 0 ){
  for (let j in planes  ){
    this.products[j].validacionclinica = 'show'
  }
 

} else {
for (let j in planes  ) {
  var clinicas = planes[j].clinicas 
var clinicas_del_plan = clinicas.map(function (clinicas_list, index, array) {
  return clinicas_list.nombre; 
});
var validation = 0
clinicas_seleccionadas.forEach( item => { 
  if (clinicas_del_plan.includes(item) == true){
    validation = validation + 1 ;
  }
})
if ( validation == clinicas_seleccionadas.length){
  planes[j].validacionclinica = 'show'
}else {
  planes[j].validacionclinica = 'hide'
}};
}

console.log(planes)
this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
console.log(this.tempArrayShow)
console.log(this.tempArrayHide)
this.products = this.tempArrayShow
this.newArray = this.tempArrayShow.concat(this.tempArrayHide);


}   

onItemDeSelect(item: any){
  console.log('onItemSelect', item);
   console.log(this.tempArrayShow);
   console.log(this.tempArrayHide);
  
 

  let newArray = [];
  

  this.products = this.secureProducts;

console.log(this.products)
  var seleccion = this.selectedClinica
  for( let i=0;i<seleccion.length;i++){
    console.log(seleccion[i])
  }
  var planes = this.products;
  this.showandHide = this.products;
// planes = this.tempArrayHide.concat(this.tempArrayShow);
  var clinicas_seleccionadas = seleccion.map(function (selectas, index, array) {
    return selectas.item_text; 
});
if ( seleccion.length = 0 ){
  for (let j in planes  ){
    this.products[j].validacionclinica = 'show'
  }
 

} else {
for (let j in planes  ) {
  var clinicas = planes[j].clinicas 
var clinicas_del_plan = clinicas.map(function (clinicas_list, index, array) {
  return clinicas_list.nombre; 
});
var validation = 0
clinicas_seleccionadas.forEach( item => { 
  if (clinicas_del_plan.includes(item) == true){
    validation = validation + 1 ;
  }
})
if ( validation == clinicas_seleccionadas.length){
  planes[j].validacionclinica = 'show'
}else {
  planes[j].validacionclinica = 'hide'
}};
}

console.log(planes)
this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
console.log(this.tempArrayShow)
console.log(this.tempArrayHide)
this.products = this.tempArrayShow
this.newArray = this.tempArrayShow.concat(this.tempArrayHide);


}   

  openModal(id: string) {

    this.modalService.open('custom-modal-2');
   
  }
  onPrint() {
    window.print();    
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
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
 
   filterRating( rating: number ) {
    this.productsService.setFilter({
      id: 'rating',
      name: `${rating} rating`,
      value: rating,
      predicate: entity => entity.rating === rating
    });
    
  }

  filterClinicas( rating: number ) {
    this.productsService.setFilter({
      id: 'rating',
      name: `${rating} rating`,
      value: rating,
      predicate: entity => entity.rating === rating
    });
    
  }
    
  ngOnInit(): void {
    this.getProduct()
    this.onItemSelect(event);
    // setTimeout(() => {
      // this.productsService.getProduct()
      // .subscribe(res=>{
      //   this.productList = res;
      //   this.filterCategory = res;
      //   this.productList.forEach((a:any) => {
      //     if(a.category ==="women's clothing" || a.category ==="men's clothing"){
      //       a.category ="fashion"
      //     }
      //     Object.assign(a,{quantity:1,total:a.price});
      //   });
      // });
      
        this.isLoaded = true;
      // },0);
    this.retornarService.disparadorDePrecio.subscribe(data=>{
      console.log('Recibiendo data en home...',data);
      console.log(data)
      console.log(this.products)
 var products = addProp(this.products,data);
 console.log(products);
 
 });this.retornarService.disparadorDePrecio.subscribe(data=>{
  console.log('Recibiendo data en home...',data);
  console.log(data)
  console.log(this.secureProducts)
var procuctosSeguros = addProp(this.secureProducts,data);
console.log(procuctosSeguros);

});

 this.deselctComparar.disparadorDePrecio.subscribe(deselct=>{
   console.log('Recibiendo data en home...',deselct);
   console.log(deselct);
   console.log(this.products);
 var compareProdList = desectItem(this.compareProdList,deselct);
 console.log(compareProdList);
 });

  this.dropdownClinica = this.clinicas
    this.selectedClinica = [];
    this.clinicaSettings = {
      singleSelection: false,
      closeDropDownOnSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true,
      searchPlaceholderText: 'Type here to search',
      limitSelection	:3
    };     
  }


onSelectAll(items: any) {
    console.log('onSelectAll', items);
}
toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
}

handleLimitSelection() {
    if (this.limitSelection) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
}
  onEmpresaFilter() {
    this.SearchEmpresa = this.empresa;
  }

  onEmpresaFilterClear() {
    this.SearchEmpresa = '';
    this.empresa = 'Empresa';
  }
  onClinicaFilter() {
    this.SearchClinica = 'show';
  }

  onClincaFilterClear() {
    this.SearchClinica = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  };
  getPlanes(){
    this.data.getPlanes().subscribe((response: { [x: string]: any; })=> {
    this.planes = response["data"];
    });
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

checkboxArray: any = [
  {
    id: 1,
    type: "checkbox",
    price: 1000
  },
  {
    id: 2,
    type: "checkbox",
    price: 2000
  },
  {
    id: 3,
    type: "checkbox",
    price: 3000
  },
  {
    id: 4,
    type: "checkbox",
    price: 4000
  },
  
]



productArray:any = [];
arrays: any = [];
getProduct(){
  this.arrays = this.api.productService();
}

tempArray:any=[];
newArray:any=[];
onChange(event: any){
  if(event.target.checked){
this.tempArray  = this.arrays.filter((e:any)=> e.id == event.target.value);

this.productArray = [];
this.newArray.push(this.tempArray);
console.log(this.newArray)
for(let i=0;i<this.newArray.length;i++){
  var firstArray = this.newArray[i]; 
  for(let i=0;i<firstArray.length;i++){
    var obj = firstArray[i];
    this.productArray.push(obj);
    // console.log(this.productArray); 
}
  }
  
  }else{
    this.tempArray  = this.productArray.filter((e:any)=> e.id != event.target.value);
    this.newArray  = [];
    this.productArray = [];
    this.newArray.push(this.tempArray)
    for(let i=0;i<this.newArray.length;i++){
      var firstArray = this.newArray[i];  // console.log(firstArray);
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.productArray.push(obj);
        // console.log(this.productArray); 
    }

  }
}
}

}
