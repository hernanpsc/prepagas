import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../_modal';


var  check: any;
var items:any;
@Component({
  selector: 'app-compara',
  templateUrl: './compara.component.html',
  styleUrls: ['./compara.component.scss']
})
export class ComparaComponent implements OnInit {
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
 

 closeModal(id: string) {
 
  this.modalService.close('custom-modal-2');
}

  
 constructor(

  private modalService: ModalService,
 ) {   }

 showDiv1 = false;
showDiv2 = true;

filter(value: string) {
  if (value === 'basico') {
    this.showDiv1 = true;
    this.showDiv2 = false;
  } else if (value === 'intermedio') {
    this.showDiv1 = false;
    this.showDiv2 = true;
  } else {
    this.showDiv1 = false;
    this.showDiv2 = false;
  }
}

  onPrint() {
    window.print();  
    
    
  }
  ngOnInit() {

    // console.log(this.items);
   
 
  }
//   ckecking (array,name){
//   var found = false;
//   for(var i = 0; i < array.length; i++) {
//       if (array[i].nombre == name) {
//           found = true;
//           break;
//       }
//       return found
//   }
// }

ckeck (items, name){
  var  checkeo =  items.find(element => element == name)
// console.log('Consultado : ' + name)
// console.log('Obtenido con Find : ' + checkeo)
if(name === checkeo ){

  // console.log('true');
  return true
} else {

  // console.log('false');
  return false
}
}


 checker(product,nombre){

  let clinicas = product[0]['clinicas'];
  let checkeos = []
  var  checkeo = clinicas.some( e => e.nombre === nombre);
  checkeos.push(checkeos);
  
  return  checkeo 
  
    }

 
  
};

