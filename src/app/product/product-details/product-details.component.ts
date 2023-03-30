import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productsDB } from '../../shared/data/products';
// import { ProductService } from '../../showcase/service/productservice';


@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  loading: boolean = true;
  sub: any;
  product: any;
  id: any;
  products: productsDB[];
  detalles = [
    {
      id: 1,
      detalle: 'Industria',
      pro: 'Cuadrado'
    },
    {
      id: 2,
      detalle: 'Farmacia',
      pro: 'Rectangulo'
    },
    {
      id: 3,
      detalle: 'Taller',
      pro: 'Triángulo'
    },
    {
      id: 4,
      detalle: 'Comercio',
      pro: 'Cono'
    },
    {
      id: 5,
      detalle: 'Transporte',
      pro: 'Cilindro'
    },
    {
      id: 6,
      detalle: 'Rural',
      pro: 'Esfera'
    },
    {
      id: 7,
      detalle: 'Hacienda',
      pro: 'Pirámide'
    },
    {
      id: 8,
      detalle: 'Servicios',
      pro: 'Romboide'
    },
    {
      id: 9,
      detalle: 'Salud',
      pro: 'Cubico'
    }];
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,) { }


 
    ngOnInit(): void {
      this.sub=this.activatedroute.paramMap.subscribe({next:params => { 
        
      this.id = params.get('id'); 
        
      this.product=this.detalles.find(p => p.id==this.id);    
     }});
    }
    Volver(): void {
      this.router.navigate(['/products']);
   }
  
  }