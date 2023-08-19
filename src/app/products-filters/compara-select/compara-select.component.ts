import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeCompararService } from '../../services/servicio-de-comparar.service';

@Component({
  selector: 'app-compara-select',
  templateUrl: './compara-select.component.html',
  styleUrls: ['./compara-select.component.css']
})
export class ComparaSelectComponent implements OnInit {
  @Input() product: any[];

  constructor(private ServicioComparar: ServicioDeCompararService) {}

  ngOnInit(): void {
  }
  toggleCompare(product: any) {
    product.compare = !product.compare;
  }
  
  }
  

