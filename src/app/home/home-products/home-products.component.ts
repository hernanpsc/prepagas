import { Component, Input, OnInit, ViewChild,  ElementRef  } from '@angular/core';
import { ModalService } from '../../_modal';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServicioDeCompararService} from '../../services/servicio-de-comparar.service'
import { CartService } from '../../services/cart.service';


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
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})

export class HomeProductsComponent implements OnInit {
  @Input() product: any;
  bodyText: string;
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
  folleto:any;
  searchKey:string ="";

  dialogRef: MatDialogRef<MasDetallesComponent>;
  public comparar:any = 'Comparar';
  public productList : any ;
  public filterCategory : any

  constructor(
    private modalService: ModalService,
    public dialog: MatDialog,
    private ServicioComparar: ServicioDeCompararService,
    private cartService : CartService,
    ) { 

  }

  @ViewChild("compararButon") compararButon: ElementRef; //https://bit.ly/Replacement_ElementRef
   toggleCompare() {
  
    this.product.compare = !this.product.compare;
    // this.compararButon.nativeElement.innerHTML = "REMOVER";
    if(this.product.compare)  
    this.comparar  = "Remover";
  else
    this.comparar = "Comparar";
}
  
agregarcomparar(){
  console.log(this.comparar)
  this.ServicioComparar.servicioComparar.emit({data:this.comparar});
  }

  ngOnInit(): void {
    
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








