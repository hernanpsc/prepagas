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
  selectedClinicas: any;
  matTabLabels: string[] = [];
   SortbyParam = '';
  SortDirection = 'asc';
  displayedColumns: string[] = ['Nombre', 'Barrio/Localidad'];
  searchText: string = '';
  filteredProducts: any[] = [];
 
  constructor(public dialogRef: MatDialogRef<ClinicasListGroupComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
  
  ) {  

}


  ngOnInit() {
    this.selectedClinicas = this.data.clinicas;
    this.filterProducts();
    console.log(this.data.clinicas)
  this.populateMatTabLabels();
  }
  

  tabChanged(event: any) {
    console.log(event);
    if (event.index != 0) {
      const filterText = event.tab.textLabel;
      this.selectedClinicas = this.data.clinicas.filter((clinicas: any) => {
        return clinicas.ubicacion.region === filterText;
      });
      console.log(this.selectedClinicas);
    } else {
      this.selectedClinicas = this.data.clinicas;
    }
  }

  populateMatTabLabels(): void {
    const regions: string[] = this.data.clinicas.map((clinica: any) => clinica.ubicacion.region);
    const uniqueRegions: string[] = Array.from(new Set(regions));
    this.matTabLabels = ['TODAS', ...uniqueRegions];
  }
  
  filterProducts() {
    this.filteredProducts = this.selectedClinicas.filter((clinica: { nombre: string; }) =>
      clinica.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
