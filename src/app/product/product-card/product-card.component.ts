import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../_modal';
import { productsDB } from '../../shared/data/products';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;

  clinicas: any;

}

@Component({
  selector: 'll-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  bodyText: string;
  products = [];

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

  constructor(private modalService: ModalService, public dialog: MatDialog) { 
    this.products = productsDB.Product;
  }

  ngOnInit(): void {
     }

  openDialog(product?) : void {
    
      const dialogRef = this.dialog.open(MasDetallesComponent, {
      data: { name: product ? product.name : '',
  
      clinicas : product ? product.clinicas : '', 

      producto: product,
      
      },panelClass: ['full-screen-modal']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }
  

}
