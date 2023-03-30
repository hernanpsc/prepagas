import {Component, OnInit,HostBinding } from '@angular/core';
import {ProductPlant, ProductsFiltersQuery, ProductsFiltersService} from './state';
import {Observable} from 'rxjs';
import { productsDB } from '../shared/data/products';
import { PlanesService } from '../services/planes.service';
import { Plans } from '../models/Plans';
import { ActivatedRoute, Router } from '@angular/router'


  
@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  [x: string]: any;
  products$: Observable<ProductPlant[]>;
  loading$: Observable<boolean>;

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
  products = [];
  empresa = '';
  SearchEmpresa = '';
  SortbyParam = '';
  SortDirection = 'asc';
  showFiller = false;

  constructor(private productsService: ProductsFiltersService, private productsQuery: ProductsFiltersQuery,private planesService: PlanesService, private router: Router, private activedRoute: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.productsService.get().subscribe();
  //   this.loading$ = this.productsQuery.selectLoading();

  //   this.products$ = this.productsService.selectAll();
  // }


// ngOnInit() {
  //   this.planes=this.planesService.getPlanes();
  // }
  ngOnInit(): void {
    this.productsService.get().subscribe();
    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.productsService.selectAll();
    // setTimeout(() => {
    // this.productsService.get().subscribe();
    // this.loading$ = this.productsQuery.selectLoading();

    // this.products$ = this.productsService.selectAll();
    //   this.products = productsDB.Product;
    //   this.isLoaded = true;
    // },0);
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
  getPlanes(){
    this.data.getPlanes().subscribe((response: { [x: string]: any; })=> {
    this.planes = response["data"];
    });
  }
}
