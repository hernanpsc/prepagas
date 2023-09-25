import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureComponent } from './components/feature/feature.component';
import { BaseLayoutComponent } from './components/layouts/base-layout/base-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from "primeng/tabview";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HeadComponent} from "./../head/head.component";







const commonModules = [
  HttpClientModule,
  FormsModule,
  CommonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatBadgeModule,
  MatMenuModule,
  MatStepperModule,
  AccordionModule,
  PanelModule,
  ButtonModule,
  TableModule,
  TabViewModule,
  MatButtonToggleModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeatureComponent,
    BaseLayoutComponent,
    LoaderComponent,
    SidenavComponent,
    HeadComponent
  ],
  imports: [CommonModule, RouterModule, ...commonModules],
  exports: [
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    FeatureComponent,
    LoaderComponent,
    SidenavComponent,
    HeadComponent,
    ...commonModules
  ]
})
export class SharedModule {}