import { Component, OnInit, Input } from '@angular/core';
import {ServcioRetronoPrecioService} from '../../services/servcio-retrono-precio.service';


@Component({
  selector: 'app-compara-select',
  templateUrl: './compara-select.component.html',
  styleUrls: ['./compara-select.component.css']
})
export class ComparaSelectComponent implements OnInit {
  @Input() comparar:any;

  constructor() { }

  ngOnInit(): void {
  }

}
