import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../../_modal';





@Component({
  selector: 'll-product-hero',
  templateUrl: './product-hero.component.html',
  styleUrls: ['./product-hero.component.scss']
})
export class ProductHeroComponent implements OnInit {
  bodyText: string;
 

  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open('custom-modal-1');
  }

  closeModal(id: string) {
    this.modalService.close('custom-modal-1');
  }

  openForm(id: string) {
    this.modalService.open('custom-modal-5');
  }

  closeForm(id: string) {
    this.modalService.close('custom-modal-5');
  }
  ngOnInit(): void {

    this.bodyText = 'This text can be updated in modal 1';
  }

  onClick1() {
    // alert("?ok?");
    // alert("Hola");
  
    // funcion1(this.form.get('name').value);
  }






}


