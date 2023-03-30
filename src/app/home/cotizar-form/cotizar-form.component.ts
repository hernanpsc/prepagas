import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as sancor from '../../shared/data/sancor.json';
import * as premedic from '../../shared/data/premedic.json';
import * as galeno from '../../shared/data/galeno.json';
import * as omint from '../../shared/data/omint.json';
import {ServcioRetronoPrecioService} from '../../services/servcio-retrono-precio.service';
import * as planes from '../../../../public/products.json';


declare var agregarPrecio:any;
declare var valorOmint:any;
declare var conyuge:any;
declare var valorSancorSalud:any;
declare var valorPremedic:any;
declare var tipoAsociado: any;
declare var grupoFamiliar: any;
declare var productID: any;
declare var productIdGaleno: any;
declare var productIdPremedic: any;
declare var productIdOmint: any;
declare var productIdOmint: any;




  @Component({
    selector: 'app-cotizar-form',
    templateUrl: './cotizar-form.component.html',
    styleUrls: ['./cotizar-form.component.scss']
})
export class CotizarFormComponent implements OnInit {
   
  // preciosToHome:[];


  checkedmon: boolean;
  checkedaf: boolean;
  checkedsupras: boolean;
  checkedseg: boolean;
  checkedseg1: boolean;
  checkedagree: boolean;

  showDiv : boolean;
  showDiv2 : boolean;
  formCotizar: FormGroup;
  cotizar: FormGroup;

  
options: Options = {
  floor: 0,
  ceil: 100
};
  
preciosToHome=[];



 constructor(
  private formBuilder: FormBuilder,
  private retornarService: ServcioRetronoPrecioService
  ) { 
    this.buildForm();

  } 


private buildForm(){
  this.formCotizar =this.formBuilder.group({
    grupo: [''],
    empresa_prepaga: ['0'],
    // edad_1: ['18', [Validators.required, Validators.min(18), Validators.max(64)]],
    // edad_2: ['0', [Validators.min(18), Validators.max(64)]],
    // numkids: ['0', [Validators.min(0), Validators.max(5)]],
    
    edad_1: ['18'],
    edad_2: ['0'],
    numkids: ['0'],
    
    
    
    tipo: [''],
    agree: [''],
    aporteOS: [''],
    sueldo: [''],
    aporte: [''],
    monoadic: [''],
    cantAport: [''],
    afinidad: [''],
    bonAfinidad: [''],
    supras: [false],
    segvida: [false],
    segvida1: [false],
    region: ['']
    // personalData: this.formBuilder.group({
      // name: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      // email: ['',[Validators.required,Validators.email]],
      // phone: ['',Validators.required],
      // region: [''],
      // name: [''],
      // email: [''],
      // phone: [''],
      // region: [''],
    // })
    
  });

}




  


save(event){
  if(this.formCotizar.valid){
    console.log(this.formCotizar.value);
  } else {
    this.formCotizar.markAllAsTouched();
  };

  let edad1 = this.formCotizar.value.edad_1;
  let edad2 = this.formCotizar.value.edad_2;
  let kids =  this.formCotizar.value.numkids; 
  // funcion1();

 let grupo = grupoFamiliar(edad1, edad2, kids);
 let num_adultos = grupo[0]; //checked
 
 let numhijo1 = grupo[1]; //checked

 let numhijo2 = grupo[2]; //checked
 
 let numHijos = grupo[3]; //checked

 let numhijos = grupo[3]; //checked

 let gen = grupo[4]; //checked

 let grupoFam = grupo[5];

 let tipoAsoc = this.formCotizar.value.tipo;

 let tipoIngreso = this.formCotizar.value.tipo;
 let monoAdicional = this.formCotizar.value.monoadic;
 let cantAport = this.formCotizar.value.cantAport;
 let sueldo = this.formCotizar.value.sueldo;
 let segVida1 = this.formCotizar.value.segvida;
 let segVida2 = this.formCotizar.value.segvida1;
 let supras = this.formCotizar.value.supras;
 let Tipo_de_Dato = this.formCotizar.value.aporteOS;
 let afinidadCheck = this.formCotizar.value.afinidad;
 let bonifAf = this.formCotizar.value.bonAfinidad;
 let prepaga = this.formCotizar.value.empresa_prepaga;
 let tipoAsociadoSanCor = tipoAsociado (tipoIngreso,grupoFam,cantAport);
 
 if (tipoIngreso == "M" || tipoIngreso == "D" && monoAdicional == true) {
  if (cantAport > grupoFam) {
      alert("El número de aportantes no puede ser mayor a los integrantes del grupo familiar. Calcularemos con la cantidad máxima");
      cantAport = grupoFam
  };
}

let idSancor = productID(edad1, tipoAsoc, gen, 'titular', numHijos);
let edadID1 = 'sancor'+ idSancor[0]; 
let edadID2 = 'sancor'+ productID(edad2, tipoAsoc, gen, 'conyuge', numHijos)[1]; 

let hijoId = 'sancor'+ idSancor[2];
let hijo2Id = 'sancor'+ idSancor[3];
let edadIdGaleno = 'galeno'+productIdGaleno(edad1, edad2, tipoAsoc, numHijos);
let edadIdPremedic = 'premedic'+productIdPremedic(edad1, edad2, tipoAsoc, numHijos);

let hijoIdmenor1preme = 'premedic'+tipoAsoc + 'AD-1anio';
let hijoIdmenor25preme = 'premedic'+tipoAsoc + 'AD-25';
let idOmint = productIdOmint(edad1, tipoAsoc, 'titular');
let edadID1OMINT = 'omint'+ idOmint[0];
let edadID2OMINT = 'omint'+productIdOmint(edad2, tipoAsoc, 'conyuge')[1];
let hijoIdOMINT = 'omint'+ idOmint[2];
let hijo2IdOMINT = 'omint'+ idOmint[3];
let precios_omint = omint;
let precios_sancor = sancor;
let precios_galeno = galeno;



// <! -----------------------------VALOR PRECIO SANCOR START---------------------------------------------------->
let precio1Hijo = precios_sancor[hijoId]
let precio2Hijo = precios_sancor[hijo2Id];    
let precioTitular = precios_sancor[edadID1];
let preciosConyuge = conyuge(edad2);
let valorSanCor = valorSancorSalud(edad2,kids, precio1Hijo,precio2Hijo,precioTitular,preciosConyuge,numhijo2,tipoAsociadoSanCor,Tipo_de_Dato,sueldo,cantAport,grupoFam,segVida1,segVida2,supras,afinidadCheck,bonifAf,gen );
console.log(valorSanCor);
function conyuge(edad){
  if (edad>17){ precios_sancor[edadID2];
  } else {''}
};
// <! -----------------------------VALOR PRECIO SANCOR END-------------------------------------------------------->

// <! -----------------------------VALOR PRECIO PREMEDIC START---------------------------------------------------->
let precios_premedic = premedic;
let valorAdultosPremedic = precios_premedic[edadIdPremedic];
let preciohm1 = precios_premedic[hijoIdmenor1preme];
let preciohm25 = precios_premedic[hijoIdmenor25preme];
let valor_Premedic = valorPremedic(edad2, kids, valorAdultosPremedic, preciohm25, preciohm1, edadIdPremedic,afinidadCheck,bonifAf,tipoIngreso);
console.log(valor_Premedic);
// <! -----------------------------VALOR PRECIO PREMEDIC END----------------------------------------------------->
let preciosDetodos =  [valorSanCor,valor_Premedic];
// <! -----------------------------VALOR PRECIO GALENO START----------------------------------------------------->
let valorGaleno = precios_galeno[edadIdGaleno];

// <! -----------------------------VALOR PRECIO GALENO END----------------------------------------------------->

// <! -----------------------------VALOR PRECIO OMINT START------------------------------------------------------>

let precio_titular_Omint= precios_omint[edadID1OMINT];
let precio_conyuge_Omint = precios_omint[edadID2OMINT];
let precio_hijo1_Omint = precios_omint[hijoIdOMINT];
let precio_hijo2_Omint = precios_omint[hijo2IdOMINT] ;
let valor_Omint = valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edadID1OMINT);

// let precio_titular_Omint = removeEmpty(precios_omint[edadID1OMINT]);
// let precio_conyuge_Omint = removeEmpty(precios_omint[edadID2OMINT]);
// let precio_hijo1_Omint = removeEmpty(precios_omint[hijoIdOMINT]);
// let precio_hijo2_Omint = removeEmpty(rprecios_omint[hijo2IdOMINT]);

// <! -----------------------------VALOR PRECIO OMINT END---------------------------------------------------->





this.preciosToHome.push(valorSanCor);

// this.preciosToHome.push(valor_Premedic);

let pre = JSON.stringify(planes);
let prec = JSON.parse(pre);
const preciosTodos = valorSanCor.concat(valor_Premedic);
 
console.log(preciosTodos);

// agregarPrecio(this.preciosToHome,planes);
// const preciosPlanes = JSON.stringify(valorSanCor)

this.retornarService.disparadorDePrecio.emit(preciosTodos);
console.log('Enviando datos...',preciosTodos);

}



 
  


ngOnInit()
  {
    // this.nameField.valueChanges
    // .subscribe(value => {
    //   console.log(value);

    // }      )
    // this.formCotizar.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
    this.onChanges();
  }
  onChanges(): void {
    this.formCotizar.get('grupo').valueChanges.subscribe(val => {
  // this.formattedMessage = `My name is ${val}.`;
});
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get grupoField (){
    return this.formCotizar.get('grupo');
  }
  get prepagaField(){
    return this.formCotizar.get('empresa_prepaga');
  }

  get age1Field(){
    return this.formCotizar.get('edad_1');
  }
  get age2Field(){
    return this.formCotizar.get('edad_2');
  }

get hijosField(){
  return this.formCotizar.get('numkids');
}
get tipoField(){
  return this.formCotizar.get('tipo');
}
get ingresoField(){
  return this.formCotizar.get('sueldo');
}

get aporteosField(){
  return this.formCotizar.get('aporteOS');
}

get sueldoField(){
  return this.formCotizar.get('sueldo');
}
get aporteField(){
  return this.formCotizar.get('sueldo');
}
get regionField(){
  return this.formCotizar.get('region');
}
get monoadicField (){
  return this.formCotizar.get('monoadic');
}
get cantAport(){
  return this.formCotizar.get('cantAport');
}
get afinidadField (){
  return this.formCotizar.get('afinidad');
}
get bonAfinidadField (){
  return this.formCotizar.get('bonAfinidad');
}
get segvida(){
  return this.formCotizar.get('segvida');
}
get segvida1(){
  return this.formCotizar.get('segvida1');
}

get nameField(){
  return this.formCotizar.get('personalData.name');
  }

get emailField(){
  return this.formCotizar.get('personalData.email');
}
get phoneField(){
  return this.formCotizar.get('personalData.phone');
}

get agreeField(){
  return this.formCotizar.get('agree');
}
  get isNameFieldValid(){
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid(){
    return this.nameField.touched && this.nameField.invalid;
  }

}


