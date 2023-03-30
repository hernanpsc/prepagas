import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compara-item',
  templateUrl: './compara-item.component.html',
  styleUrls: ['./compara-item.component.css']
})
export class ComparaItemComponent implements OnInit {
  @Input() compareList: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
