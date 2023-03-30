import { Component, Input, OnInit,  ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../_modal';
import { productsDB } from '../../shared/data/products';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductPlant } from '../state';


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
}

@Component({
  selector: 'll-product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

  

export class ProductCardComponent implements OnInit {
  @Input()
  product: any;
  bodyText: string;
  // products = [];
  products: ProductPlant[];
  name: string;
  price: Number;
  id:Number;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
  dialogRef: MatDialogRef<MasDetallesComponent>;
  @Output()
  add = new EventEmitter<ProductPlant>();
  @Output()
  subtract = new EventEmitter<ProductPlant>();

  constructor(private modalService: ModalService, public dialog: MatDialog) { 
    // this.products = productsDB.Product;
  }

  ngOnInit(): void {
     }

  openDialog(product?) : void {
    
      const dialogRef = this.dialog.open(MasDetallesComponent, {
      data: { name: product ? product.name : '',
      id : product ? product.id : '', 
      price : product ? product.price : '',
      category : product ? product.category : '',
      rating : product ? product.rating : '',
      clinicas : product ? product.clinicas : '', 
      clinicasArrayObjets : product ? product.clinicasArrayObjets : '',
      clinicasmap: product ? product.clinicasmap : '', 
      entidades: product ? product.entidades : '',
      producto: product,
      
      },panelClass: ['full-screen-modal']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }
  

}
