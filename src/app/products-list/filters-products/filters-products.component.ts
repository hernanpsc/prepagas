import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters-products',
  templateUrl: './filters-products.component.html',
  styleUrls: ['./filters-products.component.css']
})
export class FiltersProductsComponent implements OnInit  {
  @Input() product: any[];

  selectedPriceRange: FormGroup; // Usaremos un FormGroup para el rango de precios
  selectedRaiting : FormControl = new FormControl('');
  formFilter: FormGroup;
  multiDefaultOption: any[] = []; 
  tooltipContent: string = 'Your tooltip content here';
  rangeValues: FormControl = new FormControl(''); 
  slide3Values: FormControl = new FormControl(''); 
  slide4Values: FormControl = new FormControl(''); 
  valueSlide3: FormControl = new FormControl(''); 
  valueSlide4: FormControl = new FormControl(''); 
  checkboxOptions = {
  PMO_Solo_por_Aportes :new FormControl(false),
  Cirugia_Estetica:new FormControl(false),
  Ortodoncia_Adultos:new FormControl(false),
  Habitacion_Individual :new FormControl(false),
  Cobertura_Nacional:new FormControl(false),
  Sin_Copagos:new FormControl(false),
    // Agrega más opciones según sea necesario
  }
  PMO_Solo_por_Aportes  = this.checkboxOptions['PMO_Solo_por_Aportes'].value;
  Cirugia_Estetica = this.checkboxOptions['CIrugia_Estetica'].value;
  Ortodoncia_Adultos = this.checkboxOptions['Ortodoncia_Adultos'].value;
  Habitacion_Individual  = this.checkboxOptions['Habitacion_Individual'].value;
  Cobertura_Nacional = this.checkboxOptions['Cobertura_Nacional'].value;
  Sin_Copagos = this.checkboxOptions['Sin_Copagos'].value;
  val: number;
  val2: number;
  val3: number;
  val4: number;

  priceRange: FormControl = new FormControl('');  
  quote: any;
  Quote : {
    adultos:number;
    menores:number;
    region:string;
  }
  constructor(
    private formBuilder: FormBuilder,

  ){       this.selectedPriceRange = this.formBuilder.group({
    selectedRaiting:0,
    priceRange: [this.rangeValues],
    valueSlide3: [this.slide3Values],
      valueSlide4: [this.slide4Values],
   PMO_Solo_por_Aportes: [this.PMO_Solo_por_Aportes],
  Cirugia_Estetica: [this.Cirugia_Estetica],
  Ortodoncia_Adultos: [this.Ortodoncia_Adultos],
  Habitacion_Individual: [this.Habitacion_Individual],
  Cobertura_Nacional: [this.Cobertura_Nacional],
  Sin_Copagos: [this.Sin_Copagos],

  });

  
  }


  private buildForm(){

    this.formFilter =this.formBuilder.group({
      selectedRaiting:0,
      priceRange: [this.rangeValues],
      valueSlide3: [this.slide3Values],
      valueSlide4: [this.slide4Values]
    });
   
  }
  
  ngOnInit(): void {
    this.quote = {
      adultos: 1,
      menores: 2,
      region: "GBA"
    }
  
    this.selectedRaiting.valueChanges.subscribe((selectedValue: number) => {
      console.log('Valor seleccionado de la calificación:', selectedValue);
    });
  
    this.selectedPriceRange.get('priceRange')?.valueChanges.subscribe((selectedValues: number[]) => {
      this.val = selectedValues[0];
      this.val2 = selectedValues[1];
      console.log('Valor seleccionado para el precio: ', this.val, 'y', this.val2);
    });
    this.selectedPriceRange.get('valueSlide3')?.valueChanges.subscribe((selectedValues: number) => {
      this.val3 = selectedValues;
      console.log('Slide seleccionado N°3: ', this.val3);
    });
    this.selectedPriceRange.get('valueSlide4')?.valueChanges.subscribe((selectedValues: number) => {
      this.val4 = selectedValues;
      console.log('Slide seleccionado N°4: ', this.val4);
    });
  }
  
  

  aplicarFiltro() {
    // Aquí puedes agregar la lógica para aplicar el filtro
    // Por ejemplo, puedes utilizar this.val y this.val2 para filtrar datos
    console.log('Se hizo clic en el botón Aplicar');
    console.log('Valor mínimo del rango de precios: ', this.rangeValues[0]);
    console.log('Valor máximo del rango de precios: ', this.rangeValues[1]);

    // Luego puedes realizar las acciones necesarias para aplicar el filtro a tus datos
    // Por ejemplo, puedes enviar una solicitud de filtro a tu API o actualizar la lista de productos
  }
  onRangeChange(event: any) {
    // Los valores del rango de precios han cambiado, actualiza los valores y muestra en la consola
    this.val = event.values[0];
    this.val2 = event.values[1];
    console.log('Valor seleccionado para el precio: ', this.val, 'y', this.val2);
  }
  onSlide3Change(event: any) {

    this.val3 = event.value;
    console.log('Valor seleccionado para el slide3: ', this.val3);

  }
  onSlide4Change(event: any) {

    this.val4 = event.value;
    console.log('Valor seleccionado para el slide: ', this.val4);

  }
  getCheckboxOptions() {
    return Object.keys(this.checkboxOptions);
  }
}