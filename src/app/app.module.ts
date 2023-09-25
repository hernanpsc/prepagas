import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { MasDetallesModule } from './mas-detalles/mas-detalles.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './home/home-routing.module';
import {HomeModule} from './home/home.module';
import {MarkdownModule} from 'ngx-markdown';
import {environment} from '../environments/environment';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {CommonModule} from '@angular/common';
import { FilterPipe } from './shared/filter.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ButtonModule } from 'primeng/button';
import { ProductsListModule } from './products-list/products-list.module'
import { TooltipModule } from 'primeng/tooltip';
// import { LoadingButtonComponent } from './loading-button/loading-button.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent,
    FilterPipe,
    FiltroPipe,
    
    // FiltroClinica
    // ,
    // FilterPipe
        // LoadingButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MasDetallesModule,
    ReactiveFormsModule,
    HomeModule,
    HomeRoutingModule,
    CommonModule,
    MarkdownModule,
    ButtonModule,
    ProductsListModule,
    TooltipModule
  ],
  providers: [{
    provide: {
      STEPPER_GLOBAL_OPTIONS
    },
    
    useValue: {
      baseUrl: 'https://jsonplaceholder.typicode.com',
      displayDefaultIndicatorType: false
    },
  }],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

