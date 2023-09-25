import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../home/home-products/home-products.component';
import UsersJson from '../../shared/data/users.json';
import { clinicasDB } from '../../shared/data/clinicas';



interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
}



@Component({
  selector: 'app-clinicas-list',
  templateUrl: './clinicas-list.component.html',
  styleUrls: ['./clinicas-list.component.css']
})
export class ClinicasListComponent implements OnInit {


Users: USERS[] = UsersJson;

  constructor(public dialogRef: MatDialogRef<ClinicasListComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
   ) {
console.log(this.Users);
}





  ngOnInit(): void {
  console.log(this.data.name),
    console.log(this.data.price),
    console.log(this.data.category),
    console.log(this.data.rating),
    console.log(this.data.clinicas),
    console.log(this.data.clinicasArrayObjets),
    console.log(this.data.clinicasmap),
    console.log(this.data.entidades),
    console.log(this.data.producto),
  console.log(this.Users)
  }

}

