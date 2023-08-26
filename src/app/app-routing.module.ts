import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout/base-layout.component';
import { ContactFormComponent } from './mas-detalles/contact-form/contact-form.component';
import { CotizarFormComponent } from './home/cotizar-form/cotizar-form.component';
import { AppComponent }  from './app.component';

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
