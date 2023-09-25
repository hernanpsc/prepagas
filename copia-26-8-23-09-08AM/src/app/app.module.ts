import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { MasDetallesModule } from './mas-detalles/mas-detalles.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './home/home-routing.module';
import {HomeModule} from './home/home.module';
import {ReactiveFormsModule} from "@angular/forms";
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {MarkdownModule} from 'ngx-markdown';
import {environment} from '../environments/environment';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {CommonModule} from '@angular/common';
import { FilterPipe } from './shared/filter.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import { FilterPipe } from './shared/filter.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltroClinica } from './products-list/pipes/clinica.pipe'
import { ProductsListModule } from './products-list/products-list.module';



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
    NgxWhastappButtonModule,
    HomeRoutingModule,
    CommonModule,
    MarkdownModule,  
    NgxSliderModule    
    


  ],
  providers: [{
    provide: {
      NG_ENTITY_SERVICE_CONFIG,STEPPER_GLOBAL_OPTIONS
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

