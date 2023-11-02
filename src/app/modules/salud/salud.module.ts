import { NgModule } from '@angular/core';
import { SaludRoutingModule } from './salud-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ModalModule } from './../../_modal'
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';
// pages 
import { DefaultComponent } from './pages/default/default.component';
import { ResultsOriginalComponent } from './pages/results/results-original.component';

import { ResultsComponent } from './pages/results/results.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModule } from 'primeng/dialog';
import { FilterPipe } from './../../../pipes/filter.pipe';
import { SortPipe } from './../../../pipes/sort.pipe'


import { DividerModule } from 'primeng/divider';


// molecules
import { ProductLandComponent } from './components/molecules/product-land/product-land.component';
import { ProductCardComponent } from './components/molecules/product-card/product-card.component';
// organisms






import { DialogService } from 'primeng/dynamicdialog';
import { ProductsService } from './pages/results/products.service';

import { ReactiveFormsModule } from '@angular/forms';
import { components } from './components';
import { modules } from './components';



import { PdfViewerModule} from 'ng2-pdf-viewer';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { FormQuoteComponent } from './components/atoms/form-quote/form-quote.component';
const publicApi = [
	ResultsComponent,
	ProductLandComponent,
	ProductCardComponent
  ];

@NgModule({
	declarations: [
		publicApi,
		DefaultComponent,
		DetailsComponent,
		ResultsComponent,
		ResultsOriginalComponent,
		CompareComponent,
		FilterPipe,
		SortPipe,
		EmpresasComponent,
		FormQuoteComponent,
		...components,
 
	],
	exports: [
		publicApi
	],
	imports: [
		SharedModule,
		SaludRoutingModule,
		DividerModule,
		ReactiveFormsModule,
		PdfViewerModule,
		// NgxSkeletonLoaderModule,
		ReactiveFormsModule,
		ScrollingModule,
		NgSelectModule ,
		ModalModule,
		MatFormFieldModule,
		DialogModule,
		MatIconModule,
		MatDialogModule,
		MatListModule,
		MatTabsModule,
		TabViewModule,
		ButtonModule,
		TableModule,
		...modules
	],

	providers: [
		DialogService,
		ProductsService
	]

})
export class SaludModule {}
