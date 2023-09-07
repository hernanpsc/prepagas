import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Planes } from '../interfaces/planes';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './products-sortable.directive';
import { FormGroup } from '@angular/forms';

interface SearchResult {
  planes: Planes[];
  allplanes: Planes[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  ProductFilter: string;
  productStatus: string;
  productPrice: number;
  productRate: number;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
}
const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(planes: Planes[], column: SortColumn, direction: string): Planes[] {
  if (direction === '' || column === '') {
    return planes;
  } else {
    return [...planes].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

// function matches(planes: Planes, term: string, pipe: PipeTransform) {
  // return planes.images.includes(term.toLowerCase())
//     || planes.name.toLowerCase().includes(term.toLowerCase())
//     || planes.type.toLowerCase().includes(term.toLowerCase())
// }

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private filtrosSeleccionadosGroup: FormGroup;
        private filterFormSubject: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _planes$ = new BehaviorSubject<Planes[]>([]);
  private _allPLanes$ = new BehaviorSubject<Planes[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _datas$ = new Subject<void>();
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    ProductFilter: '',
    productStatus: '',
    productRate: 0,
    productPrice: 0,
    sortColumn: '',
    sortDirection: '',
    startIndex: 0,
    endIndex: 9,
    totalRecords: 0
  };
  user = [];
  products: any | undefined;
  Products$: any;
  products$: any;
  productRating: any;


//   constructor(private pipe: DecimalPipe, public ApiService: restApiService) {
//     this._search$.pipe(
//       tap(() => this._loading$.next(true)),
//       debounceTime(200),
//       switchMap(() => this._search()),
//       delay(200),
//       tap(() => this._loading$.next(false))
//     ).subscribe(result => {
//       this._planes$.next(result.planes);
//       this._total$.next(result.total);
//     });
//     this._search$.next();

//     // Api Data
//     this.ApiService.getData().subscribe(
//       data => {
//         const users = JSON.parse(data);
//         this.products = users.data;
//       });
//   }

  get planes$() { return this._planes$.asObservable(); }
  // get allplanes$() { return this._allplanes$.asObservable(); }
  get product() { return this.products; }
  get total$() { return this._total$.asObservable(); }
  get datas$() { return this._datas$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  get ProductFilter() { return this._state.ProductFilter; }
  get productPrice() { return this._state.productPrice; }
  get productRate() { return this._state.productRate; }
  get startIndex() { return this._state.startIndex; }
  get endIndex() { return this._state.endIndex; }
  get totalRecords() { return this._state.totalRecords; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set ProductFilter(ProductFilter: string) { this._set({ ProductFilter }); }
  set productPrice(productPrice: number) { this._set({ productPrice }); }
  set productRate(productRate: number) { this._set({ productRate }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }
  set startIndex(startIndex: number) { this._set({ startIndex }); }
  set endIndex(endIndex: number) { this._set({ endIndex }); }
  set totalRecords(totalRecords: number) { this._set({ totalRecords }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
 // Método para establecer el formulario
 setFilterForm(form: FormGroup) {
    this.filtrosSeleccionadosGroup = form;
    this.filterFormSubject.next(form); // Emitir el formulario a través del BehaviorSubject
  }

  // Obtener un observable que emite el formulario cuando cambia
  getFilterFormObservable(): Observable<FormGroup> {
    return this.filterFormSubject.asObservable();
  }
//   private _search(): Observable<SearchResult> {

//     const datas = (this.product) ?? [];
//     const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

//     // 1. sort
//     let countries = sort(datas, sortColumn, sortDirection);

//     // 2. search
//     if (searchTerm) {
//       countries = countries.filter(country => matches(country, searchTerm, this.pipe));
//     }

//     // 3. filter
//     if (this.ProductFilter) {
//       countries = countries.filter(country => matches(country, this.ProductFilter, this.pipe));
//     }

//     // 4. paginate
//     this.totalRecords = countries.length;
//     this._state.startIndex = (page - 1) * this.pageSize + 1;
//     this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
//     if (this.endIndex > this.totalRecords) {
//       this.endIndex = this.totalRecords;
//     }
//     // 5. Rate Filter       
//     if (this.productRating) {
//       countries = countries.filter(country => country.rating >= this.productRating);
//     }
//     else {
//       countries = countries;
//     }

//     // 6.Price &  rate Filter
//     if (this.productPrice) {
//       countries = countries.filter(country => country.price >= Object.values(this.productPrice)[0] && country.price <= Object.values(this.productPrice)[1]);
//     }
//     else {
//       countries = countries;
//     }

//     // 6 Status Filter
//     // if (this.productStatus) {
//     //   countries = countries.filter(country => country.status == this.productStatus);
//     // // }
//     // else {
//     //   countries = countries;
//     // }

//     const total = countries.length;

//     const allpLanes = countries;
//     countries = countries.slice(this._state.startIndex - 1, this._state.endIndex);
//     // return of({ planes, total, allplanes });

//   }
}
