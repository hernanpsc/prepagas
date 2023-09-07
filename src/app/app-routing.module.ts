import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './mas-detalles/contact-form/contact-form.component';
import { CotizarFormComponent } from './home/cotizar-form/cotizar-form.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./products-list/products-list.module').then(m => m.ProductsListModule)}, 
  {path: 'contact-form',component: ContactFormComponent},
  {path: 'cotizar',component: CotizarFormComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
