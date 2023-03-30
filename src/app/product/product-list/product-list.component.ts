import { Component, OnInit, HostBinding } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { PlanesService } from '../../services/planes.service';
import { Plans } from '../../models/Plans';
import { ActivatedRoute, Router } from '@angular/router';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServicioDeCompararService} from '../../services/servicio-de-comparar.service'



declare var $: any;
export interface DialogData {
  name: string;
  price: Number;
  id:any;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
  folleto:any;
}
@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  [x: string]: any;

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

  constructor(private planesService: PlanesService, private router: Router, private activedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.planes=this.planesService.getPlanes();
  // }
  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true;
    }, 1000);
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
openDialog(
  // enterAnimationDuration: string, exitAnimationDuration: string,
  product?) : void {
    const dialogRef = this.dialog.open(MasDetallesComponent, {
    // enterAnimationDuration,
    // exitAnimationDuration,
    data: { name: product ? product.name : '',
    id : product ? product.id : '', 
    price : product ? product.price : '',
    category : product ? product.category : '',
    rating : product ? product.rating : '',
    clinicas : product ? product.clinicas : '', 
    clinicasArrayObjets : product ? product.clinicasArrayObjets : '',
    clinicasmap: product ? product.clinicasmap : '', 
    entidades: product ? product.entidades : '',
    users: product ? product.clinicas : '',
    folleto: product ? product.folleto :'',
    producto: product
    },
    maxWidth: '100vw',
    maxHeight: '95vh',
    height: '100%',
    width: '100%',
    panelClass: 'full-screen-modal',
  disableClose: false
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
}


  