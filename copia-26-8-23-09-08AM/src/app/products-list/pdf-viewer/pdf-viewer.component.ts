import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../home/home-products/home-products.component';
import {DialogData1} from '../../products-list/product-land/product-land.component';
import {DialogData2} from '../../products-list/product-card/product-card.component';



@Component({
  selector: 'app-pdf-viewer',
  template: `
  <pdf-viewer [src]= "pdfSrc"
  [render-text]="true"
  [original-size]="false"
  style="width: 100%; height: 100%"
  ></pdf-viewer>
  `,

})
export class PdfViewerComponent implements OnInit {
  public pdfSrc : string;
  constructor(public dialogRef: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef1: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data1: DialogData1,
  public dialogRef2: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data2: DialogData2,) { }
 
  ngOnInit() {
    if(this.data){
      console.log(this.data.name);
    console.log(this.data.folleto);
    console.log("pdfSrc");
    this.pdfSrc = this.data.folleto;
    }else if (this.data1){
      console.log(this.data1.name);
    console.log(this.data1.folleto);
    console.log("pdfSrc");
    this.pdfSrc = this.data1.folleto;
    }else if(this.data2){    
    console.log(this.data2.name);
    console.log(this.data2.folleto);
    console.log("pdfSrc");
    this.pdfSrc = this.data2.folleto;
  }
    
    
  }
  
  
}


