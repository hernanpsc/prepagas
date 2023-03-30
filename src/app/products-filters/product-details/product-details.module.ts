import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from '../../shared/shared.module';
import { SortPipe } from '../pipes/sort.pipe';
// import { ClinicasPipe } from '../pipes/clinicas.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    
    // ,
    // ClinicasPipe
  ],
  imports: [
    CommonModule,

    SharedModule
  ]
})
export class ProductDetailsModule {}