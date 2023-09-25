import {ChangeDetectionStrategy,ViewEncapsulation, Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, map, Observable} from 'rxjs';
import { Clinicas } from 'src/app/interfaces/clinicas';

@Component({
  selector: 'app-compara-por-region',
  templateUrl: './compara-por-region.component.html',
  styleUrls: ['./compara-por-region.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparaPorRegionComponent implements OnInit {
  @Input() clinicasVal: any;

  readonly regiones: Observable<string[]>;
  readonly clinicas: Observable<Clinicas[]>
  

  constructor(
    ) { }

  ngOnInit(): void {

  }


}
