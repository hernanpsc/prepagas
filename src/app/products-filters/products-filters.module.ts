import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductFiltersComponent} from './product/product-filters.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FiltersFormComponent} from './filters-form/filters-form.component';
import { ProductRoutingModule } from './products-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ClinicasPipe } from './pipes/clinicas.pipe';
import { ClinicasListComponent } from './product-details/clinicas-list/clinicas-list.component';
import { ListaFiltroComponent } from './product-details/clinicas-list/lista-filtro/lista-filtro.component';
import { ModalModule } from '../_modal';
import { HomeModule } from '../home/home.module';
import { ComparaComponent } from './compara/compara.component';
import { ComparaItemComponent } from './compara-item/compara-item.component';
import { ComparaSelectComponent } from './compara-select/compara-select.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';

import { BusinessComponent } from './business/business.component';
// import { HeroFormComponent } from '../hero-form/hero-form.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FiltroClinica } from './pipes/clinica.pipe'

const publicApi = [ProductsListComponent, ProductFiltersComponent, FiltersFormComponent];

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
  declarations: [
    publicApi,
    ProductsListComponent,
    ProductHeroComponent,
    ProductCardComponent,
    ListingCardComponent,
    ProductDetailsComponent,
    ClinicasListComponent,
    ListaFiltroComponent,
    FilterPipe,
    SortPipe,
    ClinicasPipe,
    ProductListComponent,
    ComparaComponent,
    ComparaItemComponent,
    ComparaSelectComponent,
    ProductosComponent,
    BusinessComponent,
    FiltroPipe,
    FiltroClinica
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    ModalModule,
    ReactiveFormsModule,
    HomeModule,
    MatTabsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes)],

    exports: [publicApi]
  })
export class ProductsFiltersModule {
  
}


 