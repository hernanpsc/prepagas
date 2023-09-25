import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-product-fliter',
  templateUrl: './product-fliter.component.html',
  styleUrls: ['./product-fliter.component.css']
})

export class ProductFliterComponent implements OnInit {
price$;
@Input('price') price;

  constructor(priceService : PriceService) {
    this.price$ = priceService.getPrice();
   }

  ngOnInit(): void {
  }

}
