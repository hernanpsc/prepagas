import { Component, Inject, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../home/home-products/home-products.component';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';




@Component({
  selector: 'app-mas-detalles',
  templateUrl: './mas-detalles.component.html',
  styleUrls: ['./mas-detalles.component.css'],
  
})
export class MasDetallesComponent implements OnInit, OnDestroy {
  selectedIndex;
  matTabLabels = ['Clinicas y Sanatorios','Folleto'];
 

  navLinks = [];

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
    console.log('this is selected index: ', val);
  }

  isViewInitialized = false;
    myObject = {
    'key1': 'value1',
    'key2': 'value2'
  };

  title: any;
 
  
  constructor(public dialogRef: MatDialogRef<MasDetallesComponent>,private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
       @Inject(MAT_DIALOG_DATA) public data: DialogData,
   ) { 
   }


  mySortingFunction = (a, b) => {
    return a.key > b.key ? -1 : 1;
  }

  map = new Map([['mapKey1', 'mapValue1'], ['mapKey2', 'mapValue2']]);
  
    openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {
    console.log(this.data.id),
    console.log(this.data.name),
    console.log(this.data.price),
    console.log(this.data.category),
    console.log(this.data.rating),
    console.log(this.data.clinicas),
    console.log(this.data.producto),
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );
    console.warn('----nav links founded: ', this.navLinks);
  };

    onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    // this.router.navigate(['']);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }
}
