import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'll-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
