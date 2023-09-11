import { Component, OnInit,Input,ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-filters-products',
  templateUrl: './filters-products.component.html',
  styleUrls: ['./filters-products.component.css']
})
export class FiltersProductsComponent implements OnInit  {
  @Input() product: any[];
  filtrosSeleccionadosGroup: FormGroup | undefined; // Definición inicial
  selectedRaiting : FormControl = new FormControl(0);
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
  Cirugia_Estetica = this.checkboxOptions['Cirugia_Estetica'].value;
  Ortodoncia_Adultos = this.checkboxOptions['Ortodoncia_Adultos'].value;
  Habitacion_Individual  = this.checkboxOptions['Habitacion_Individual'].value;
  Cobertura_Nacional = this.checkboxOptions['Cobertura_Nacional'].value;
  Sin_Copagos = this.checkboxOptions['Sin_Copagos'].value;
  val: number;
  val2: number;
  val3: number;
  val4: number;
  filterKeys: string[]; // Agrega esta variable para almacenar las claves de los filtros
  priceRange: FormControl = new FormControl('');  
  quote: any;
  Quote : {
    adultos:number;
    menores:number;
    region:string;
  }
  constructor(
    private formBuilder: FormBuilder,
    private filterManagerService: ProductsService,
    private cdr: ChangeDetectorRef
    
  ){  
    
    this.filterKeys = Object.keys(this.checkboxOptions);

    this.filtrosSeleccionadosGroup = this.formBuilder.group({
      selectedRaiting:[this.selectedRaiting.value],
      priceRange: this.rangeValues,
        valueSlide3: [this.slide3Values.value],
      valueSlide4: [this.slide4Values.value],
       PMO_Solo_por_Aportes: [this.PMO_Solo_por_Aportes],
      Cirugia_Estetica: [this.Cirugia_Estetica],
      Ortodoncia_Adultos: [this.Ortodoncia_Adultos],
      Habitacion_Individual: [this.Habitacion_Individual],
      Cobertura_Nacional: [this.Cobertura_Nacional],
      Sin_Copagos: [this.Sin_Copagos],
    
      });  
  }


  private buildForm(){

   
  }
  
  ngOnInit(): void {
    this.quote = {
      adultos: 1,
      menores: 2,
      region: "GBA"
    }
    console.log('Filtros seleccionados:', this.filtrosSeleccionadosGroup.value);

  
    
    this.filtrosSeleccionadosGroup.valueChanges.subscribe(() => {
      console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);
      this.applyFilters(this.filtrosSeleccionadosGroup);
    });
  
    
    
    this.selectedRaiting.valueChanges.subscribe((selectedValue: number) => {
      console.log('Valor seleccionado de la calificación:', selectedValue);
      const selectedArray = [0, 1, 2, 3, 4, 5].slice(0, selectedValue + 1);
      // Registra el cambio en el formulario
      this.filtrosSeleccionadosGroup.get('selectedRaiting')?.setValue(selectedArray);
      // Envía el formulario actualizado al servicio
      this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
    });
    
      this.rangeValues.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo del rango de precios:', newValues[0]);
        console.log('Valor máximo del rango de precios:', newValues[1]);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('priceRange')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
      });
       this.slide3Values.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo de valueSlide3:', newValues);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('valueSlide3')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
      });

      this.slide4Values.valueChanges.subscribe((newValues) => {
        console.log('Valor mínimo de valueSlide4:', newValues);
        // Registra los cambios en el formulario
        this.filtrosSeleccionadosGroup.get('valueSlide4')?.setValue(newValues);
        // Envía el formulario actualizado al servicio
        this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
      });
     
       

      
          Object.keys(this.checkboxOptions).forEach((key) => {
            const control = this.checkboxOptions[key];
            control.valueChanges.subscribe((newValue) => {
              console.log(`El valor de ${key} ha cambiado a ${newValue}`);
              // Registra el cambio en el formulario
              this.filtrosSeleccionadosGroup.get(key)?.setValue(newValue);
              // Envía el formulario actualizado al servicio
              this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
              console.log(this.filtrosSeleccionadosGroup.value)
            });
          });
          
     
  
    
  

  }
  
  

  aplicarFiltro() {
    // Aquí puedes agregar la lógica para aplicar el filtro
    // Por ejemplo, puedes utilizar this.val y this.val2 para filtrar datos
    console.log('Se hizo clic en el botón Aplicar');
    console.log('Valor mínimo del rango de precios: ', this.rangeValues.value[0]);
    console.log('Valor máximo del rango de precios: ', this.rangeValues.value[1]);
    console.log('Filtros seleccionados han cambiado:', this.filtrosSeleccionadosGroup.value);


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
  enviarFiltros() {
    // Aquí puedes obtener los filtros seleccionados de filtrosSeleccionadosGroup
    const filtros = this.filtrosSeleccionadosGroup.value;
    
    // Luego, puedes llamar a setFilterForm para actualizar los filtros en el servicio
    this.filterManagerService.setFilterForm(filtros);
  }
  eliminarFiltro(option: string) {
    // Cambia el valor del FormControl correspondiente al hacer clic en la "x"
    const checkboxControl = this.filtrosSeleccionadosGroup.get(option);
    if (checkboxControl) {
      checkboxControl.setValue(false);
      
      // Cambia el estado del checkbox al mismo tiempo
      const checkbox = document.getElementById('subscribe') as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false; // Establecer el checkbox como desmarcado
      }
    }
  
    this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
  }
  
  

  limpiarTodo() {
    // Limpia todos los checkboxes
    this.filterKeys.forEach((key) => {
      this.filtrosSeleccionadosGroup.get(key)?.setValue(false);
    });
    this.filterManagerService.setFilterForm(this.filtrosSeleccionadosGroup.value);
  }
  cambiarEstadoDelCheckbox() {
    const checkbox = document.getElementById('subscribe') as HTMLInputElement | null;

    if (checkbox != null) {
      // ✅ Establecer el checkbox como marcado
      checkbox.checked = true;

      // ✅ Establecer el checkbox como desmarcado
      // checkbox.checked = false;
    }
  }

  applyFilters(form: FormGroup): void {
    // Llama a la función filterProducts del servicio y pasa el formulario de filtros como argumento
    this.filterManagerService.filterProducts(form);
  }
  
}