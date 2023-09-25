import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, NgZone, Input, Output,EventEmitter } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, pairwise, filter, throttleTime } from 'rxjs/operators';
import { ItemsService } from '../../shared/item/items.service';
import { NotifierService } from '../../shared/services/notifier.service';
import { Item } from '../../interfaces/interfaces';
import { SERVER_URL } from '../../constants';
import * as clinicas from '../../shared/data/clinicas.json';
import * as planes from '../../../../public/products.json';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ComparatorComponent implements OnInit, AfterViewInit {
  @ViewChild('scroller') scroller!: CdkVirtualScrollViewport;
  displayedColumns: string[] = ['feature', 'item_1_value_name', 'item_2_value_name'];

  limit = 20;
  offset = 0;
  query = '';
  serverUrl = SERVER_URL;
  items : Item[];
  public clinicas: any = (clinicas as any).default;
  public secureProducts: any = (planes as any).default; 
  public products: any = (planes as any).default;
  constructor(
    private ngZone: NgZone, 
    public itemsService: ItemsService,
    private notifierService: NotifierService,
  
    private api: ApiService,
    private http: HttpClient
    ) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.serverUrl + '/clinicas').subscribe({
      next: (data) => {
        this.clinicas = data; // Asigna los datos de los productos a la variable 'products'
        this.http.get<any>(this.serverUrl + '/planes').subscribe({
          next: (data) => {
            this.products = data; // Asigna los datos de los productos a la variable 'products'
            this.secureProducts = data;
            this.addClinicas();
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
  }

  ngAfterViewInit(): void {

    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.offset += 1;
        this.itemsService.fetchMore(this.query, this.offset, this.limit);
      });
    });
  }

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
    this.itemsService.removeSelection(item);
  }

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
}