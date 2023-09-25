import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinicas-list',
  templateUrl: './clinicas-list.component.html',
  styleUrls: ['./clinicas-list.component.scss']
})
export class ClinicasListComponent implements OnInit {
  active_status = 1;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() { }

  ngOnInit(): void {
  }
}