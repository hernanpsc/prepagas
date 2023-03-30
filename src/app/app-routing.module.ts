import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout/base-layout.component';
import { ContactFormComponent } from './mas-detalles/contact-form/contact-form.component';
import { CotizarFormComponent } from './home/cotizar-form/cotizar-form.component';
import { CartComponent } from './cart/cart.component';
import { ProductosComponent } from './productos/productos.component';

import { AppComponent }  from './app.component';

const baseLayoutRouting: Routes = [
  {path: 'products',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'filtros',loadChildren: () => import('./products-filters/products-filters.module').then(m => m.ProductsFiltersModule)},
  {path: '', pathMatch: 'full',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},

];

const routes: Routes = [
  {path: '',component: BaseLayoutComponent,children: baseLayoutRouting},
  {path: 'filtros', loadChildren: () => import('./products-filters/products-filters.module').then(m => m.ProductsFiltersModule)},
  {path: 'contact-form',component: ContactFormComponent},
  {path: 'cotizar',component: CotizarFormComponent},
  {path: 'cart',component: CartComponent},
  {path: 'productos',component: ProductosComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
