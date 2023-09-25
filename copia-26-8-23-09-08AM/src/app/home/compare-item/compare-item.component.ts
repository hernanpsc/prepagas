import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compare-item',
  templateUrl: './compare-item.component.html',
  styleUrls: ['./compare-item.component.css']
})
export class CompareItemComponent implements OnInit {
  @Input() compareList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
