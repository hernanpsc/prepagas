import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {ProductLandComponent} from './product-land/product-land.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ClinicasPipe } from './pipes/clinicas.pipe';
import { ClinicasListComponent } from './product-details/clinicas-list/clinicas-list.component';
import { ListaFiltroComponent } from './product-details/clinicas-list/lista-filtro/lista-filtro.component';
import { ModalModule } from '../_modal';
import { HomeModule } from '../home/home.module';
import { ComparaItemModule } from './compara-item/compara-item.module';
import { ComparaSelectComponent } from './compara-select/compara-select.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
// import { HeroFormComponent } from '../hero-form/hero-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FiltroClinica } from './pipes/clinica.pipe'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComparatorComponent } from './comparator/comparator.component';
import { InputSearchComponent } from './input-search/input-search.component';
const publicApi = [ProductsListComponent, ProductLandComponent,ProductCardComponent];

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
        ProductCardComponent,
        ProductLandComponent,
        ProductDetailsComponent,
        ClinicasListComponent,
        ListaFiltroComponent,
        FilterPipe,
        SortPipe,
        ClinicasPipe,
        ComparaSelectComponent,
        FiltroClinica,
        PdfViewerComponent,
        ComparatorComponent,
        InputSearchComponent
    ],
    exports: [publicApi],
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
        PdfViewerModule,
        ScrollingModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forChild(routes),
        ComparaItemModule
    ]
})
export class ProductsListModule {
  
}


 