import { Component, OnInit, Input} from '@angular/core';


var  check: any;

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
 
  @Input() productos: any;
  @Input() items: any;
 closeModal: any;




  
 constructor() { 


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

  let clinicas = product['clinicas'];
  let checkeos = []
  var  checkeo = clinicas.some( e => e.nombre === nombre);
  checkeos.push(checkeos);
  
  return  checkeo 
  
    }

 
  
};

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgModule,
  Optional,
} from '@angular/core';

@Directive({
  selector: '[stickyTable]',
})
export class StickyTableDirective {
  constructor(private el: ElementRef) {}

  get x() {
    return (this.el.nativeElement as HTMLElement)?.getBoundingClientRect()?.x;
  }
}

@Directive({
  selector: '[sticky]',
})
export class StickyDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Optional() private table: StickyTableDirective
  ) {}

  ngAfterViewInit() {
    const el = this.el.nativeElement as HTMLElement;
    const { x } = el.getBoundingClientRect();
    el.style.position = 'sticky';
    el.style.left = this.table ? `${x - this.table.x}px` : '0px';
  }
}

@NgModule({
  declarations: [StickyDirective, StickyTableDirective],
  imports: [CommonModule],
  exports: [StickyDirective, StickyTableDirective],
})
export class StickyDirectiveModule {}
