import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output,ViewChild,ElementRef } from '@angular/core';
import { ProductPlant } from '../state';
import { ModalService } from '../../_modal';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServicioDeCompararService} from '../../services/servicio-de-comparar.service';


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
  selector: 'app-product-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./product-filters.component.html`,
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent {
  @Input() products: ProductPlant[];
  @Input() product: any;
  @Output() add = new EventEmitter<ProductPlant>();
  @Output() subtract = new EventEmitter<ProductPlant>();


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


  dialogReferene: MatDialogRef<MasDetallesComponent>;
  public comparar:any = 'Comparar';

  constructor(
    private modalService: ModalService,
    public dialog: MatDialog,
    private ServicioComparar: ServicioDeCompararService) { 

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
      const dialogReference = this.dialog.open(MasDetallesComponent, {
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
    dialogReference.afterClosed().subscribe(result => {
      console.log('El dialogo se destruyó');
  
    });
  }

}
