import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../home/home-products/home-products.component';


/**
 * @title Basic use of the tab group
 */

@Component({
  selector: 'app-clinicas-list-group',
  templateUrl: './clinicas-list-group.component.html',
  styleUrls: ['./clinicas-list-group.component.css']
})
export class ClinicasListGroupComponent implements OnInit {
  selectedUsers: any;
  matTabLabels = ['TODAS','CABA', 'GBA-Sur', 'GBA-Norte', 'GBA-Oeste','La Plata'];
  
  displayedColumns: string[] = ['Nombre', 'Barrio/Localidad'];
  
 
  constructor(public dialogRef: MatDialogRef<ClinicasListGroupComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {

}


  ngOnInit() {
    this.selectedUsers = this.data.clinicas;
    console.log(this.data.name),
    console.log(this.data.price),
    console.log(this.data.category),
    console.log(this.data.rating),
    console.log(this.data.clinicas),
    console.log(this.data.producto)
  }

  tabChanged(event: any) {
    console.log(event);
    if (event.index != 0) {
      const filterText = event.tab.textLabel;
      this.selectedUsers = this.data.clinicas.filter((clinicas: any) => {
        return clinicas.ubicacion.region === filterText;
      });
      console.log(this.selectedUsers);
    } else {
      this.selectedUsers = this.data.clinicas;
    }
  }
}
