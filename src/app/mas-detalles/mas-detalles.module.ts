import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasDetallesComponent } from './mas-detalles.component';
// import { HttpClient } from '@angular/common/http';
import { ClinicasListComponent } from './clinicas-list/clinicas-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import {TableModule} from 'primeng/table';
import {MDCDataTable} from '@material/data-table';
import {MatTabsModule} from '@angular/material/tabs';
import {ClinicasListGroupComponent} from './clinicas-list-group/clinicas-list-group.component';
import {MatCardModule} from '@angular/material/card';
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSliderModule } from '@angular-slider/ngx-slider';








@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        TableModule,
        MatTabsModule,
        MatCardModule,
        PdfViewerModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxSkeletonLoaderModule,
        SharedModule,
        NgxSliderModule
    ],
    declarations: [
        MasDetallesComponent,
        ClinicasListComponent,
        ClinicasListGroupComponent,
        PdfViewerComponent,
        ContactFormComponent        
    ],
    providers: [MDCDataTable],
    entryComponents: [ClinicasListGroupComponent],
    bootstrap: [ClinicasListGroupComponent]
})

export class MasDetallesModule {
   
}





