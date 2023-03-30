import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrepagasComponent } from './prepagas/prepagas.component';
import { CotizarFormComponent } from './cotizar-form/cotizar-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'prepagas',
    component: PrepagasComponent
  },
  {
    path: 'cotizar',
    component: CotizarFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
