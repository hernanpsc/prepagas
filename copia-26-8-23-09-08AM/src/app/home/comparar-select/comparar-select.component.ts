import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comparar-select',
  templateUrl: './comparar-select.component.html',
  styleUrls: ['./comparar-select.component.css']
})
export class CompararSelectComponent implements OnInit {
@Input() comparar:any;




  constructor() { }

  

  ngOnInit(): void {
   
  }

}
