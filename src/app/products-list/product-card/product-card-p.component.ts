import { Component, Input, OnInit } from '@angular/core';
import { MasDetallesPrimengComponent } from '../../mas-detalles/mas-detalles-primeng.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-card-p',
  templateUrl: './product-card-p.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardPrimengComponent implements OnInit {
  @Input() product: any;

  constructor(private dialogService: DialogService) {}
  openDialog(product: any): void {
    console.log('Opening dialog with product data:', product);
  
    const ref = this.dialogService.open(MasDetallesPrimengComponent, {
      data: {
        product: product
      },
      styleClass: 'full-screen-modal',
      closable: true,
      width: '80vw',
      height: '90vh'
    });
  
    ref.onClose.subscribe(result => {
      console.log('The dialog was closed with result:', result);
    });
  
  
  }
  ngOnInit(): void {
    
  }
  toggleCompare() {
    this.product.compare = !this.product.compare;
}






}
