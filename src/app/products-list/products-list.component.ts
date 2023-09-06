import {Component, ChangeDetectorRef ,OnInit,HostBinding, ViewChild, ChangeDetectionStrategy , Input, ElementRef, NgZone } from '@angular/core';
import {Observable} from 'rxjs';
import {map, pairwise, filter, throttleTime } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as planes from '../../../public/products.json';
import { ModalService } from '../_modal';
import { CartService } from '../services/cart.service';
import {ServcioRetornoPrecioService} from '../services/servcio-retorno-precio.service';
import {ServicioDeCompararService} from '../services/servicio-de-comparar.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as clinicas from '../shared/data/clinicas.json';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../constants';
import { ItemsService } from '../shared/item/items.service';
import { SelectItem } from 'primeng/api'; // Import SelectItem from PrimeNG
import { Empresa } from '../interfaces/empresas'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
declare var addProp:any;
declare var desectItem:any;
declare var showandHide:any;
interface Country {
  name: string;
}

  
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  
 
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductsListComponent implements OnInit {
  @ViewChild('scroller') scroller!: CdkVirtualScrollViewport;
  itemsPerPage = 10; // Número de elementos por página
  totalProducts = 100; // Número total de productos en tu lista (ajusta esto según tus datos reales)
  currentPage = 1; // Página actual, inicializada en 1

  displayedColumns: string[] = ['feature', 'item_1_value_name', 'item_2_value_name'];
  public productList : any ;
  public filterCategory : any;
  [x: string]: any;
  loading$: Observable<boolean>;
  public show:boolean = false;
  public buttonName:any = 'Show';
  serverUrl = SERVER_URL;
  bodyText: string;
  title = 'product-app';
  public secureProducts: any = (planes as any).default; 
  public products: any = (planes as any).default;
  public qPlanes: number = this.products.length;
  hidden = false;
  compareList: [];
  compareLength: any;
  public clinicas: any = (clinicas as any).default;
  offset: number = 0;
  query: string = '';
  limit: number = 10;
  multiDefaultOption: any[] = []; // Declaración de multiDefaultOption como un arreglo vacío
  countries!: Country[];
  selectedCountries!: Country[];
  display: boolean = false;
  layout: string = 'list';
  visibleTopSidebar: boolean = false;
  SortbyParam: string = 'empresa'; // Valor por defecto
selectedRaiting : FormControl = new FormControl('');
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  planes : any = [];
  view = 'grid';
  
  validacionclinica = 'show';
  SearchClinica = '';
  empresa: FormControl = new FormControl('');
  SearchEmpresa = '';
  displayDialog: boolean = false;
  SortDirection = 'asc';
  showFiller = false;
  empresas: any ;
  
      minRaiting: number = 0; // Valor inicial de calificación mínima
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  formFilter: FormGroup;
  planeSelect = this.compareProdList();
  dropdownSettings: {};
  dropdownClinica: SelectItem[] = [];
  selectedClinica: any[] = [];
  selectedClinicaControl = new FormControl([]);
  rowsPerPageOptions = [5, 10, 20];
  tieredItems: MenuItem[] = [];

  constructor(
    private modalService: ModalService,
    private retornarService: ServcioRetornoPrecioService,
    private deselctComparar: ServcioRetornoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    private cartService : CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public itemsService: ItemsService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef

    

    ) {
      this.buildForm();
      this.countries = [
        { name: 'Australia' },
        { name: 'Brazil' },
        { name: 'China' },
        { name: 'Egypt'},
        { name: 'France'},
        { name: 'Germany' },
        { name: 'India' },
        { name: 'Japan' },
        { name: 'Spain'},
        { name: 'United States' }
    ];
    
    }
    
    SortbyParamControl = new FormControl(this.SortbyParam);
    public productosActualizados:Array<any> = []
    private buildForm(){

      this.formFilter =this.formBuilder.group({
        buscaClinica: [''],
        empresa_prepaga: ['0'],
        selectedRaiting:0,
      });
    }
   
    
    compareProdList() {
      // console.log(this.servicioComparar.compareList)
      this.compareLength = this.products.filter((p: { compare: any; }) => p.compare).length;
      this.compareList = this.products.filter(p => p.compare);
      // console.log(this.compareList)
      var planesSel = this.products.filter(p => p.compare);
      this.servicioComparar.compareList = this.products.filter(p => p.compare)
      // console.log(this.servicioComparar.compareList)
      // console.log(this.compareProdClinicas(this.servicioComparar.compareList))
      this.visibleTopSidebar = this.compareList.length >= 1;
console.log(this.visibleTopSidebar)
          return this.servicioComparar.compareList
      
    }
    compareCliListVal() {

      var clinicasGrilla = this.compareProdClinicas(this.compareProdList())
      // console.log(clinicasGrilla)
      return clinicasGrilla
      
    }

  listadoColumna1 (compareProdList){
    let listaCompleta = [];
    
    for ( let i = 0 ; i < compareProdList.length ; i++ ){
    let clinicas = compareProdList[i].clinicas
       clinicas.forEach(element => { if ( listaCompleta.indexOf(element,0) == -1){
        listaCompleta.push(element)
       }
          
         });
        } 
  };





      
 
    compareProdClinicas(products: any[]) {
      var clinicas = [];
      let itemSelected = products;
          // console.log(products)
          // console.log(clinicas)

      itemSelected.forEach((product: { clinicas: any[]; }) => {
        product.clinicas.forEach((clinic) => {
          
          const id = clinic.item_id;
       
          
          const validacion = clinicas.map(producto => producto.item_id).indexOf(id)
          if (validacion === -1 ){
            clinicas.push(clinic)
            }
        });
      });
      var data = [];
      // console.log(clinicas)
for ( let x in clinicas ){
  clinicas[x].valida = [];
  clinicas[x].planesSeleccionados = [];
  clinicas[x].cliPased = [];
  // console.log(clinicas)

  for ( let i = 0 ; i < products.length ; i++){
    var obj = {};
    clinicas[x].planesSeleccionados.push(products[i].name);
    // console.log(products[i].name)
  }
  obj['nombre'] = clinicas[x].entity;
  obj['barrio'] = clinicas[x].ubicacion.barrio;
  for ( let i = 0 ; i < products.length ; i++){
   
      let id = products[i].item_id
     if (clinicas[x].cartillas.includes(id) == true  ){
      // console.log(clinicas[x].cliPased)

      
      
      obj[products[i].item_id] = 'ok';
      clinicas[x].cliPased.push(obj);

      clinicas[x].valida.push('ok');
    }else{clinicas[x].valida.push('no');
     obj[products[i].item_id] = 'no';
  };
  }clinicas[x].cliPased = obj


  data.push(obj);
  // console.log(data)
}  
var planesElegidos =[]
for ( let  n in clinicas ){
       clinicas[n].valida.unshift(clinicas[n]['entity']);
       clinicas[n].planesSeleccionados.unshift('Nombre de Entidad');
       planesElegidos = clinicas[n].planesSeleccionados
} 
const clCaba = clinicas.filter(function(clinica){ return clinica.ubicacion.region === 'CABA'});
const clNorte = clinicas.filter(function(clinica){ return clinica.ubicacion.region === 'GBA-Norte'});
const clOeste = clinicas.filter(function(clinica){ return clinica.ubicacion.region === 'GBA-Oeste'});
const clSur = clinicas.filter(function(clinica){ return clinica.ubicacion.region === 'GBA-Sur'});
const clLaPlata = clinicas.filter(function(clinica){ return clinica.ubicacion.region === 'La Plata'});
// let clinicasHeader = clinicas[0]['planesSeleccionados'];
let clinicasCaba = clCaba.map(planes => planes.valida);
let clinicasMorte = clNorte.map(planes => planes.valida);
let clinicasOeste = clOeste.map(planes => planes.valida);
let clinicasSur = clSur.map(planes => planes.valida);
let clinicasLaPlata = clLaPlata.map(planes => planes.valida);

let clinicasCabaPased = clCaba.map(planes => planes.cliPased);
let clinicasNortePased = clNorte.map(planes => planes.cliPased);
let clinicasOestePased = clOeste.map(planes => planes.cliPased);
let clinicasSurPased = clSur.map(planes => planes.cliPased);
let clinicasLaPlataPased = clLaPlata.map(planes => planes.cliPased);

// console.log(clinicasCabaPased);
// console.log(clinicasNortePased);
// console.log(clinicasOestePased);
// console.log(clinicasSurPased);
// console.log(clinicasLaPlataPased);


// console.log(clinicasCaba); 
return [clinicasCabaPased,clinicasNortePased,clinicasOestePased,clinicasSurPased,clinicasLaPlataPased, planesElegidos,clinicasCaba,clinicasMorte,clinicasOeste,clinicasSur,clinicasLaPlata];
    }
   
 

    toggleCompare(product: any) {
      product.compare = !product.compare;
    }
removeFilter( id: any ) {
        this.productsService.removeFilter(id);
        this.setInitialFilters();
} 

toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
tempArrayShow:any=[];
tempArrayHide:any=[];
// addClinicas(clinicas,products)


addClinicas(){
//  console.log(this.products)
//  console.log(this.clinicas)

 let products = this.products;

 for ( let i = 0; i<products.length;i++){
  // console.log(this.products[i].id)
  let clinicPlan = []

  for ( let x in this.clinicas ){
    var incluyeid = this.clinicas[x].cartillas.includes(this.products[i].item_id);

    if ( incluyeid == true ){
      clinicPlan.push(this.clinicas[x])
    } 
    this.products[i].clinicas = clinicPlan;
  }
} 

this.itemsService.setItems(this.products);


}

showButton() {
  const container = document.querySelector('.center-button');
  container.classList.add('show');
  container.classList.remove('hide');
}

hideButton() {
  const container = document.querySelector('.center-button');
  container.classList.remove('show');
  container.classList.add('hide');
}

onItemSelect(selectedClinica: any){
  console.log('onItemSelect', selectedClinica);
  //  console.log(this.tempArrayShow);
  //  console.log(this.tempArrayHide);
  
  

  let newArray = [];
  

  this.products = this.secureProducts;

// console.log(this.products)
  var seleccion = this.selectedClinica
  for( let i=0;i<seleccion.length;i++){
    // console.log(seleccion[i])
  }
  var planes = this.products;
  this.showandHide = this.products;
// planes = this.tempArrayHide.concat(this.tempArrayShow);
  var clinicas_seleccionadas = seleccion.map(function (selectas, _index, _array) {
    return selectas.nombre; 
});
if ( seleccion.length === 0 ){
  for (let j in planes  ){
    this.products[j].validacionclinica = 'show'
  }
 

} else {
for (let j in planes  ) {
  var clinicas = planes[j].clinicas 
var clinicas_del_plan = clinicas.map(function (clinicas_list: { nombre: any; }, _index: any, _array: any) {
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

// console.log(planes)
this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
// console.log(this.tempArrayShow)
// console.log(this.tempArrayHide)
this.products = this.tempArrayShow
this.newArray = this.tempArrayShow.concat(this.tempArrayHide);


}   

onItemDeSelect(_item: any){
  // console.log('onItemSelect', item);
  //  console.log(this.tempArrayShow);
  //  console.log(this.tempArrayHide);
  
 

  let newArray = [];
  

  this.products = this.secureProducts;

// console.log(this.products)
  var seleccion = this.selectedClinica
  for( let i=0;i<seleccion.length;i++){
    // console.log(seleccion[i])
  }
  var planes = this.products;
  this.showandHide = this.products;
// planes = this.tempArrayHide.concat(this.tempArrayShow);
  var clinicas_seleccionadas = seleccion.map(function (selectas, _index, _array) {
    return selectas.nombre; 
});
if ( seleccion.length = 0 ){
  for (let j in planes  ){
    this.products[j].validacionclinica = 'show'
  }
 

} else {
for (let j in planes  ) {
  var clinicas = planes[j].clinicas 
var clinicas_del_plan = clinicas.map(function (clinicas_list, _index, _array) {
  return clinicas_list.entity; 
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


}   

  openModal(_id: string) {

    this.modalService.open('custom-modal-2');
   
  }
  onPrint() {
    window.print();    
  }
  closeModal(_id: string) {
 
    this.modalService.close('custom-modal-2');
  }
  openModa(_id: string) {
    this.modalService.open('custom-modal-3');

  }

  closeModa(_id: string) {
    this.modalService.close('custom-modal-3');

  }

closeButon() {
 alert(this.compareList.length);

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
 
   filterRaiting( raiting: number ) {
    this.productsService.setFilter({
      id: 'raiting',
      name: `${raiting} raiting`,
      value: raiting,
      predicate: entity => entity.raiting === raiting
    });
    
  }

  // filterClinicas( raiting: number ) {

  //   this.productsService.setFilter({
  //     id: 'raiting',
  //     name: `${raiting} raiting`,
  //     value: raiting,
  //     predicate: entity => entity.raiting === raiting
  //   });
    
  // }
    
  ngOnInit(): void {
    
    this.http.get<any>(this.serverUrl + '/clinicas').subscribe({
      next: (data) => {
        this.clinicas = data; // Asigna los datos de los productos a la variable 'products'
        this.dropdownClinica = this.clinicas
        this.selectedClinica = [];
        this.http.get<any>(this.serverUrl + '/planes').subscribe({
          next: (data) => {
            this.products = data; // Asigna los datos de los productos a la variable 'products'
            this.secureProducts = data;
            this.addClinicas();
            console.log(this.products )
          },
          error: (error) => {
            console.log(error); // Maneja el error si la solicitud no se realiza correctamente
          }
        });
      },
      error: (error) => {
        console.log(error); // Maneja el error si la solicitud no se realiza correctamente
      }
    });

    this.http.get<any>(this.serverUrl + '/empresas').subscribe({
      next: (data) => {
        this.empresas = data;
 
      },
      error: (error) => {
        console.log(error); 
      }
    });
    this.SortbyParamControl.valueChanges.subscribe((selectedValue: string) => {
      // Realiza acciones basadas en el valor seleccionado
      console.log('Nuevo valor seleccionado:', selectedValue);
    });
    this.empresa.valueChanges.subscribe((selectedValue: string) => {
      // Realiza accioNuevones basadas en el valor seleccionado de la empresa
      console.log(' valor seleccionado de la empresa:', selectedValue);
      // Puedes agregar aquí la lógica para filtrar o realizar otras acciones
    });
    this.selectedRaiting.valueChanges.subscribe((selectedValue: number) => {
      console.log('Valor seleccionado de la calificación:', selectedValue);
      this.filterProductsByRating(selectedValue);
    });
    this.compareProdList();
        this.onItemSelect(this.selectedClinica);
    
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
      console.log('Recibiendo data en product.list.component.ts...',data);
     
 
})


    
  }
  onEmpresaFilter() {
    // Obtener el valor del FormControl y asignarlo a SearchEmpresa
    this.SearchEmpresa = this.empresa.value;
  }

  onEmpresaFilterClear() {
    // Limpiar el valor de SearchEmpresa y restablecer el valor del FormControl
    this.SearchEmpresa = '';
    this.empresa.setValue('Empresa');
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






productArray:any = [];
arrays: any = [];
getProductos(){
  this.products= this.api.getProduct();
}
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
// console.log(this.newArray)
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

// ngAfterViewInit(): void {

//   this.scroller.elementScrolled().pipe(
//     map(() => this.scroller.measureScrollOffset('bottom')),
//     pairwise(),
//     filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
//     throttleTime(200)
//   ).subscribe(() => {
//     this.ngZone.run(() => {
//       this.offset += 1;
//       this.itemsService.fetchMore(this.query, this.offset, this.limit);
//     });
//   });
// }

onTextChange(query:string) {
  this.itemsService.items.length = 0;
  this.query = query;
  this.itemsService.searchClinicas(query)
  // this.itemsService.fetchMore(query);
}

onTextClear() {
  this.itemsService.items.length = 0;
  this.query = ''; 
  this.itemsService.fetchMore(this.query);
}

selectToCompare(item: any) {
  // Verifica si el elemento ya está seleccionado por su item_id
  if (this.itemsService.itemsSelected.findIndex(elem => elem.item_id === item.item_id) !== -1) {
    this.notifierService.showNotification("¡Este elemento ya está seleccionado!", "Descartar");
    return;
  }

  // Si el elemento no está seleccionado, agrégalo a la lista de elementos seleccionados
  this.itemsService.addSelection(item);

  if (this.itemsService.itemsSelected.length > 1) {
    this.itemsService.buildComparisonReport();
  }
}


removeSelectedItem(item:any) {
  this.itemsService.removeSelection(item);{
    console.log('ok')
  }
}

removeSelection(item: any) {
  const index = this.selectedClinica.indexOf(item);
  if (index !== -1) {
    this.selectedClinica.splice(index, 1);
  }
  this.onItemSelect(this.selectedClinica);
}



load(index: number) {
  this.loading[index] = true;
  setTimeout(() => this.loading[index] = false, 1000);
}


checkIfCompareListHasItems() {
  if (this.compareProdList().length >= 1) {
    this.visibleTopSidebar = true;
  }
}

openDialog() {
  this.displayDialog = true;
}

closeDialog() {
  this.displayDialog = false;
} 
filterProductsByRaiting(selectedRaiting: number) {
  // Filtra los productos según la calificación seleccionada
  this.filteredProducts = this.products.filter(product => {
    return product.rating >= selectedRaiting;
  });
}




}