import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../home/home-products/home-products.component';

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

  constructor(public dialogRef: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit() {
    console.log(this.data.name),
    console.log(this.data.folleto),
    console.log("pdfSrc")
  }
  pdfSrc = this.data.folleto;
}


