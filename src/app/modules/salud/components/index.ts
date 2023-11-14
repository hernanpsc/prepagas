// atoms
import { 
    CotizarFormComponent,
    FormQueplanComponent,
    FormLeadComponent,
    FormQuoteComponent
} from './atoms';
// molecules
import { 
    FiltersProductsComponent,
    ProductCardComponent,
    ProductLandComponent,
    ResultComponent,
    IncrementorComponent
} from './molecules';

// organisms
import {
	HeroSectionComponent
} from './organisms';

// templates
import {
	ComparaItemModule,
    MasDetallesComponent,
    ClinicasListComponent,
    ClinicasListPrimengComponent,
    ClinicasListGroupComponent,
    ClinicasListGroupPrimengComponent,
    PdfViewerComponent
} from './templates';

export const modules = [
    ComparaItemModule
]

export const components = [
	CotizarFormComponent,
    FiltersProductsComponent,
    ProductCardComponent,
    ProductLandComponent,
	HeroSectionComponent,
    MasDetallesComponent,
    ClinicasListComponent,
    ClinicasListPrimengComponent,
    ClinicasListGroupComponent,
    ClinicasListGroupPrimengComponent,
    PdfViewerComponent,
    ResultComponent,
    FormQueplanComponent,
    FormLeadComponent,
    FormQuoteComponent,
    IncrementorComponent
];





