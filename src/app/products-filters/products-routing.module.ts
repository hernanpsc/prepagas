import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list.component';
import { BusinessComponent } from './business/business.component';


const routes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: ':id', component: ProductDetailsComponent },  
  { path: 'bus', component: BusinessComponent },  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
