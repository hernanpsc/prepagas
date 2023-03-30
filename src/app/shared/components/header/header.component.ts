import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice: boolean;
   public totalItem : number = 0;
  constructor(private breakpointObserver: BreakpointObserver,private cartService : CartService) {}

 
 

 
  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }
}
