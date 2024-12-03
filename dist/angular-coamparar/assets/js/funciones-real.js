// const { Http2ServerRequest } = require("http2");

var edad1 = 0;
var edad2 = 0;
var num_adultos = 1;

let numhijo1 = 0;
let numhijo2 = 0;
let edadID1 = '';
let edadID2 = '';
let hijoId = '';
let hijo2Id = '';
let edadID1OMINT = '';
let edadID2OMINT = '';
let hijoIdOMINT = '';
let hijo2IdOMINT = '';

// let edadID = 0;
let compania_prepaga = 0;
let prepaga_empresa = 0;
let bonifAportGaleno = 0;
let bonifAportSancor = 0;
let tipoAsoc = '';

let tipoIngreso = '';
// let bonifAportes = 0;
let gen = '';
let grupoFam = 1;
// let hijos_ID = '';
let numHijos = 0;
// let numhijo = 0;
let planesSeleccionados = '';
let seleccionados = new Array();
let Tipo_de_Dato = '';
let pasarGet = '';






// $("#tipo").change(function() {
//   if ($(this).val() == "M") {
//     $('#monotributoDiv').show();

//     $('#cantAport').attr('required', '');
//     $('#cantAport').attr('data-error', 'This field is required.');
//     $('#desreguladoDiv').hide();
//     $('#sueldo').removeAttr('required');
//     $('#sueldo').removeAttr('data-error');
// 	$('#monoadicDiv').hide();
//   } else if ($(this).val() == "D"){
//     $('#desreguladoDiv').show();

//     $('#sueldo').removeAttr('required', '')
//     $('#sueldo').removeAttr('data-error', 'Este espacio no pude quedar vacío. Ingres seu seuldo bruto');
//     $('#monotributoDiv').hide();
//     $('#cantAport').removeAttr('required');
//     $('#cantAport').removeAttr('data-error');
//     $('#monoadicDiv').show();
//   } else {
//     $('#monotributoDiv').hide();

//     $('#cantAport').removeAttr('required');
//     $('#cantAport').removeAttr('data-error');
//     $('#desreguladoDiv').hide();
//     $('#sueldo').removeAttr('required');
//     $('#sueldo').removeAttr('data-error');
//     $('#monoadicDiv').hide();
//   }
// });
// $("#tipo").trigger("change");


// 	$("#edad_2").change(function() {
// 	  if ($(this).val() !== "0") {
// 		$('#segVidaConyuge').removeAttr('disabled');
// 	  } else {
// 		$('#segVidaConyuge').attr('disabled', '');
// 		uncheckSeg();

// 	  }
// 	});
// 	$("#tipo").trigger("change");


// 	$("#monoadic").change(function() {
// 	  if (document.getElementById("monoadic").checked == true) {
// 		$('#monotributoDiv').show();
// 	  } else if (document.getElementById("monoadic").checked == false && document.getElementById("tipo").value == "D" )
// 	   {
// 		$('#monotributoDiv').hide();	
// 	  }
// 	});
// 	$("#tipo").trigger("change");


// function uncheckSeg() { if ( document.getElementById("segVidaConyuge").checked == true )
//   document.getElementById("segVidaConyuge").checked = false;
// } 




function finalizar( results,tipo_de_socio,edad_1,edad_2,numkids,empresa_prepaga,bonAfinidad,mono_adicionales,haberes,cant_Aport,supra,segVida1_ch,segVida2_ch,mAdic_ch,afinida_ch,sueldo_o_aporteos) {

        // if (cant_Aport > grupoFam) {
        //     alert("El n&uacute;mero de aportantes no puede ser mayor a los integrantes del grupo familiar")
        // }

        tipoAsoc = tipo_de_socio;
        tipoIngreso = tipo_de_socio;
        edad1 = edad_1;
        edad2 = edad_2;
        numHijos = numkids;
        
       
        prepaga_empresa = empresa_prepaga;
        Tipo_de_Dato = sueldo_o_aporteos;
        bonifAf = bonAfinidad;
        mAdic = mono_adicionales;
        let sueldo = haberes;
        let cantAport = cant_Aport;

        // inputmin = $('#input-min').val();
        // inputmax = $('#input-max').val();
        grupoFam = 0;
        
        tipoAsociado(tipoAsoc, grupoFam, cantAport);
        supras = supra;
        segVida1 = segVida1_ch;
        segVida2 = segVida2_ch;
        monoAdicional = mAdic_ch;
        afinidadCheck = afinida_ch;
        tabla_precios = 'precios_' + prepaga_empresa;


        if (tipoIngreso == "M" || tipoIngreso == "D" && monoAdicional == true) {
            if (cantAport > grupoFam) {
                alert("El número de aportantes no puede ser mayor a los integrantes del grupo familiar. Calcularemos con la cantidad máxima");
                cantAport = grupoFam
            };
        }

        productID(edad1, tipoAsoc, gen, 'titular', numHijos);
        productID(edad2, tipoAsoc, gen, 'conyuge', numHijos);
        productIdGaleno(edad1, edad2, tipoAsoc, numHijos);

        productIdPremedic(edad1, edad2, tipoAsoc, numHijos);

        productIdOmint(edad_1, tipoAsoc, 'titular');
        productIdOmint(edad_2, tipoAsoc, 'conyuge');



        console.log("edad_1" + edadID1);
        console.log("edad_2" + edadID2);
        console.log("hijo_1" + hijoId);
        console.log("hijo_2" + hijo2Id);

        console.log(edadIdGaleno);
        console.log("edadIdGaleno" + edadIdGaleno);
        
        console.log("edadIdPremedic" + edadIdPremedic);
        console.log("hijoIdmenor1preme" + hijoIdmenor1preme);
        console.log("hijoIdmenor25preme" + hijoIdmenor25preme);
        console.log("edad_1_Omint" + edadID1OMINT);
        console.log("edad_2_Omint" + edadID2OMINT);
        console.log("hijo_1_Omint" + hijoIdOMINT);
        console.log("hijo_2_Omint" + hijo2IdOMINT);
        console.log("hijo_2_Omint" + hijo2IdOMINT);

        hijoIdmenor1preme = tipoAsoc + 'AD-1anio';
        hijoIdmenor25preme = tipoAsoc + 'AD-25';



        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }

        console.log('input-min :' + inputmin);
        console.log('Check Afinidad:' + bonifAf);

        console.log('Edad Titular:' + edad1);

        console.log('Edad Conyuge:' + edad2);
        console.log('Es GEN 18-35:' + gen)
        console.log('ID edad Titular:' + edadID1);
        console.log('ID edad Conyuge:' + edadID2);

        console.log('ID edad primer hijo:' + hijoId);
        console.log('ID edad segundo hijo:' + hijo2Id);
        console.log('Seg Vida Tit Check:' + segVidacheck);
        console.log('Seg Vida Cony Check:' + segVida2check);

        console.log('Primer hijo en # números:' + numhijo1);
        console.log('Siguientes hijos en # números:' + numhijo2);
        console.log('Grupo Familiar:' + grupoFam);
        console.log('Cantidad Aportantes al Monotributo:' + cantAport);
        console.log('Cantidad de adultos:' + num_adultos);

        console.log('Cantidad de hijos:' + numHijos);
        console.log(tipoAsoc);

        console.log('Sueldo Bruto:' + sueldo);
        console.log('Supra salud: ' + supras);
        
        console.log('Chequear afinidad: ' + afinidadCheck);
        console.log('ID Galeno :' + edadIdGaleno);



       
            valorPlan(results, tipoIngreso, sueldo, cantAport, segVida1, segVida2, bonifAf, Tipo_de_Dato, afinidadCheck, edadIdPremedic);

            form.reset();
        }
        
        console.log('Edad Titular PREMEDIC :' + edadIdPremedic);
        console.log('Edad hijo 1 PREMEDIC:' + hijoIdmenor1preme);
        console.log('Edad hijo 25 PREMEDIC:' + hijoIdmenor25preme);


    




function tipoAsociado(tipo, grupo, cant) {
    if (tipo === "M" && grupo == cant) {
        tipoAsoc = "D";
    } else if (tipo === "I") {
        tipoAsoc = "P"
    }
}


function grupoFamiliar(age0, age1, kids) {
    if (age1 == 0 && kids == 0) {
        num_adultos = 1;
        numhijo1 = 0;
        numhijo2 = 0;
        numhijos = 0;
    } else if (age1 > 0 && kids == 0) {
        num_adultos = 2;
        numhijo1 = 0;
        numhijo2 = 0;
        numhijos = 0;
    } else if (age1 == 0 && kids >= 1) {
        num_adultos = 1;
        numhijo1 = 1;
        numhijo2 = kids - 1;
        numhijos = kids;
    } else if (age1 > 0 && kids >= 1) {
        num_adultos = 2;
        numhijo1 = 1;
        numhijo2 = kids - 1;
        numhijos = kids;
    } grupoFam = parseInt(num_adultos) + parseInt(kids);
    numhijo = parseInt(kids);
    if (age0 <= 35 && age1 <= 35) {
        gen = 'GEN'
    } else {
        gen = ''
    }
};


function valorPlan(resultado, tipoIngreso, sueldo, aportantes, segvida1, segvida2, bonA, tipoDeDato, aficheq, edadIdPremedic) {


    let precio_adultos_Sancor = {};
    let precio_precios_grupo_Galeno = {};

    let precio_hijos = {};
    let valor_plan_sancor = {};
    let results = resultado;
    let precio1Hijo = results[0][0];
    let precio2Hijo = results[1][0];
    let precioTitular = results[2][0];
    let preciosConyuge = results[3][0];
    let valor_plan_galeno = results[4][0];
    let valor_plan_premedic = {};
    let valorAdultosPremedic = results[5][0];
    let precioPremedichm1 = results[6][0];
    let precioPremedichm25 = results[7][0];
    const removeEmpty = (obj) => {
        Object.keys(obj).forEach(key =>
            (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
            (obj[key] === undefined || obj[key] === null) && delete obj[key]
        );
        return obj;
    };

    let precio_titular_Omint = removeEmpty(results[8][0]);
    let precio_conyuge_Omint = removeEmpty(results[9][0]);
    let precio_hijo1_Omint = removeEmpty(results[10][0]);
    let precio_hijo2_Omint = removeEmpty(results[11][0]);
    let precio_hijos_Omint = {};
    let precio_adultos_Omint = {};
    let valor_plan_omint = {};

    console.log('precio_titular_Omint' + precio_titular_Omint);
    console.log('precio_conyuge_Omint' + precio_conyuge_Omint);
    console.log('precio_hijo1_Omint' + precio_hijo1_Omint);
    console.log('precio_hijo2_Omint' + precio_hijo2_Omint);


    console.log('funcion valorPremedic precioPremedichm25 : ' + precioPremedichm25);
    let aportMonPremedic = 1579;
    let aportMonGaleno = 1400;
    let aportMonOmint = 1400;
    let aportMonSancor = 1482.63;
    let aportMon = 1482.63;
    let bonifAport = 0;


    let tipo_DeDato = tipoDeDato;
    let sueldobruto = 0;

    // <!----------------------Funcion VALOR DEL PLAN SANCOR start----------------------------> 
    function valorSancorSalud(edad2, preciosConyuge, precioTitular, numHijos, precio1Hijo, precio2Hijo) {
        if (edad2 > 17) {

            precio_adultos_Sancor = Object.entries(preciosConyuge).reduce((acc, [key, value]) => // matrimonio
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precioTitular });
        } else {
            precio_adultos_Sancor = precioTitular
        }

        if (numHijos == 1) {
            valor_plan_sancor = Object.entries(precio1Hijo).reduce((acc, [key, value]) =>
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precio_adultos_Sancor });
        } else if (numHijos > 1) {
            precio_hijos = Object.entries(precio2Hijo).reduce((acc, [key, value]) =>  // dis hijos o mas
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2) })
                , { ...precio1Hijo });
            valor_plan_sancor = Object.entries(precio_hijos).reduce((acc, [key, value]) =>
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precio_adultos_Sancor });
        } else {
            valor_plan_sancor = precio_adultos_Sancor;
        }
    }


    // <!----------------------Funcion VALOR DEL PLAN SANCOR end----------------------------> 




    // <!----------------------Funcion VALOR DEL PLAN PREMEDIC start----------------------------> 
    function valorPremedic(edad2, numHijo, valorAdultosPremedic, preciohm25, preciohm1, edadIdPremedic) {

        console.log('edad2' + edad2);
        console.log('numHijos' + numHijos);
        console.log('valorAdultosPremedic' + valorAdultosPremedic);
        console.log('preciohm25' + preciohm25);
        console.log('preciohm1' + preciohm1);
        console.log('edadIdPremedic' + edadIdPremedic);

        console.log(edadIdPremedic.includes('I'));

        if (edadIdPremedic.includes('I') == true) {
            valor_plan_premedic = Object.entries(preciohm25).reduce((acc, [key, value]) =>  // dis hijos o mas
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numHijo) })
                , { ...valorAdultosPremedic });
        }
        else {
            valor_plan_premedic = valorAdultosPremedic;
        }

    }

    // <!----------------------Funcion VALOR DEL PLAN PREMEDIC end---------------------------->  
    // <!----------------------Funcion VALOR DEL PLAN OMINT start----------------------------> 

    function valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edadID1OMINT) {


        if (edad2 > 17) {

            precio_adultos_Omint = Object.entries(precio_conyuge_Omint).reduce((acc, [key, value]) => // matrimonio
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precio_titular_Omint });
        } else {
            precio_adultos_Omint = precio_titular_Omint
        }

        if (numHijos == 1) {
            valor_plan_omint = Object.entries(precio_hijo1_Omint).reduce((acc, [key, value]) =>
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precio_adultos_Omint });
        } else if (numHijos > 1) {
            precio_hijos_Omint = Object.entries(precio_hijo2_Omint).reduce((acc, [key, value]) =>  // dis hijos o mas
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2) })
                , { ...precio_hijo1_Omint });
            valor_plan_omint = Object.entries(precio_hijos_Omint).reduce((acc, [key, value]) =>
                ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
                , { ...precio_adultos_Omint });
        } else {
            valor_plan_omint = precio_adultos_Omint;
        };
        if (edadID1OMINT.includes('P') == true) {
            valor_plan_omint = valor_plan_omint
        }
    }

    // <!----------------------Funcion VALOR DEL PLAN OMINT end----------------------------> 
    // let  multiplicarAporte = 0;  
    // let porcentajeAporte = 0;

    //     $("#sueldo").on("change keyup paste click", function(){

    //         sueldoaporte = $('#sueldo').val();
    //         if ( empresa_prepaga == 3){  
    //             bonifAportMostrar = bonifAportPremedic;
    //             porcentajeAporte =  0.0765;
    //             multiplicarAporte = 2.55;
    //         } else if (empresa_prepaga == 2 ){
    //             porcentajeAporte =   0.0702;
    //             multiplicarAporte = 2.34;
    //             bonifAportMostrar = bonifAportGaleno
    //         }else if (empresa_prepaga == 1 ){
    //             bonifAportMostrar = bonifAport;

    //         porcentajeAporte =   0.071;
    //         multiplicarAporte = 2.366666666666666667;

    //         }
    //          if  ( Tipo_de_Dato == 'Sueldo Bruto')  { 
    //             bonifAport = sueldoaporte  * porcentajeAporte;
    //             bonifAportGaleno = sueldoaporte   * porcentajeAporte;
    //             bonifAportPremedic = sueldoaporte  * porcentajeAporte;

    //             } else if  ( Tipo_de_Dato == 'Aporte Obra Social'){
    //                  bonifAport = sueldoaporte   * multiplicarAporte;
    //                  sueldobruto = sueldoaporte  * 33.3333333334;
    //                  bonifAportGaleno = sueldoaporte   * multiplicarAporte;
    //                  bonifAportPremedic = sueldoaporte  * multiplicarAporte;
    //               document.getElementById("calculosueldo").innerHTML = 'Sueldo Bruto: ' + sueldobruto.toFixed(2) +' ; Bonificacion por Aportes OS :'  + bonifAportMostrar.toFixed(2);
    //             } 
    //         }
    //      );
    //          // <!----------------------Funcion escribir valores en pantalla end----------------------------> 
    //     // <!----------------------Funcion bonifocacion Aportes start---------------------------->     
    //     function bonificacionaportes ( tipoIngreso,sueldo,aportMon,aportantes,tipoDeDato ){ if (tipoIngreso == "D"){
    //     if  ( tipoDeDato.includes('Sueldo') ) {
    //         bonifAport = sueldo * multiplicarAporte ;
    // ;
    //         bonifAportGaleno = sueldo * porcentajeAporte;
    //         bonifAportPremedic = sueldo * porcentajeAporte;


    //     } else if (tipoDeDato.includes('Aporte')) { 
    //         bonifAport = sueldo  * 2.3666666666666666;
    //         bonifAportGaleno = sueldo  * multiplicarAporte;
    //         bonifAportPremedic = sueldo  * multiplicarAporte;

    //       }  else if ( document.getElementById("monoadic").checked == true ) {
    //             bonifAport  = bonifAport + ( aportantes * aportMon );
    //             bonifAportGaleno  = bonifAportGaleno + ( aportantes * aportMonGaleno );
    //             bonifAportPremedic  = bonifAportPremedic + ( aportantes * aportMonPremedic );
    //       };
    //     } else if (tipoIngreso === "M" ) {
    //     bonifAport  = aportantes * aportMon;
    //     bonifAportGaleno  = aportantes * aportMonGaleno;
    //     bonifAportPremedic  = aportantes * aportMonPremedic;
    //     }else {
    //         bonifAport  = 0;
    //         bonifAportGaleno  = 0;
    //         bonifAportPremedic  = 0;
    //         };
    //     };

    // <!----------------------Funcion escribir valores en pantalla start---------------------------->   

    let multiplicarAporte = 0;
    let multiplicarSueldo = 0;

    $("#empresa_prepaga").on("change keyup paste click", function () {

        compania_prepaga = $('#empresa_prepaga').val();
        if (compania_prepaga == 1) {
            multiplicarAporte = 2.3666666666666667;
            multiplicarSueldo = 0.071;
        } else if (compania_prepaga == 2) {
            multiplicarAporte = 2.34;
            multiplicarSueldo = 0.0702;
        } else if (compania_prepaga == 3) {
            multiplicarAporte = 2.55;
            multiplicarSueldo = 0.0765;
        } else if (compania_prepaga == 4) {
            multiplicarAporte = 2.1266666666666667;
            multiplicarSueldo = 0.0638;
        } else {
            multiplicarAporte = 2.3666666666666667;
            multiplicarSueldo = 0.071;
        }
    }
    );
    $("#sueldo").on("change keyup paste click", function () {
        sueldoaporte = $('#sueldo').val();
        let descuentoAporte = 0;
        let haberesbruto = 0;

        if (Tipo_de_Dato == 'Sueldo Bruto') {
            descuentoAporte = sueldoaporte * multiplicarSueldo;
            document.getElementById("calculosueldo").innerHTML = 'Bonificacion por Aportes OS :' + descuentoAporte.toFixed(2);
        } else if (Tipo_de_Dato == 'Aporte Obra Social') {
            descuentoAporte = sueldoaporte * multiplicarAporte;
            haberesbruto = sueldoaporte * 33.3333333334;

            bonifAportSancor = sueldoaporte * 2.3666666666666667;
            bonifAport = sueldoaporte * 2.3666666666666667;

            bonifAportGaleno = sueldoaporte * 2.34;
            bonifAport = sueldoaporte * 2.34;

            bonifAportPremedic = sueldoaporte * 2.55;
            bonifAport = sueldoaporte * 2.55;

            bonifAportOmint = sueldoaporte * 2.1266666666666667;
            bonifAport = sueldoaporte * 2.1266666666666667;

            document.getElementById("calculosueldo").innerHTML = 'Sueldo Bruto: ' + haberesbruto.toFixed(2) + ' ; Bonificacion por Aportes OS aprox.:' + descuentoAporte.toFixed(2);
        }
    }
    );
    // <!----------------------Funcion escribir valores en pantalla end----------------------------> 
    // <!----------------------Funcion bonificacion Aportes start---------------------------->     
    function bonificacionaportes(tipoIngreso, sueldo, aportMon, aportantes, tipoDeDato) {
        if (tipoIngreso == "D") {
            if (tipoDeDato.includes('Sueldo')) {
                bonifAport = sueldo * 0.071;
                bonifAportSancor = sueldo * 0.071;
                bonifAportGaleno = sueldo * 0.0702;
                bonifAportPremedic = sueldo * 0.0765;
                bonifAportOmint = sueldo * 0.0638;


            } else if (tipoDeDato.includes('Aporte')) {
                bonifAport = sueldo * 2.3666666666666666;
                bonifAportSancor = sueldo * 2.3666666666666666;
                bonifAportGaleno = sueldo * 2.34;
                bonifAportPremedic = sueldo * 2.55;
                bonifAportOmint = sueldo * 2.1266666666666667;

            } else if (document.getElementById("monoadic").checked == true) {
                bonifAport = bonifAport + (aportantes * aportMon);
                bonifAportSancor = bonifAportSancor + (aportantes * aportMonSancor);
                bonifAportGaleno = bonifAportGaleno + (aportantes * aportMonGaleno);
                bonifAportPremedic = bonifAportPremedic + (aportantes * aportMonPremedic);
                bonifAportOmint = bonifAportOmint + (aportantes * aportMonOmint);
            };
        } else if (tipoIngreso === "M") {
            bonifAport = aportantes * aportMon;

            bonifAportSancor = aportantes * aportMonSancor
            bonifAportGaleno = aportantes * aportMonGaleno;
            bonifAportPremedic = aportantes * aportMonPremedic;
            bonifAportOmint = aportantes * aportMonOmint;

        } else {
            bonifAport = '';
            bonifAportSancor = '';
            bonifAportGaleno = '';
            bonifAportPremedic = '';
            bonifAportOmint = '';
        };
    };

    // <!----------------------Funcion bonifocacion Aportes end---------------------------->   
    console.log(results);

    bonificacionaportes(tipoIngreso, sueldo, aportMon, aportantes, tipo_DeDato);

    valorSancorSalud(edad2, preciosConyuge, precioTitular, numHijos, precio1Hijo, precio2Hijo);

    valorPremedic(edad2, numHijos, valorAdultosPremedic, precioPremedichm25, precioPremedichm1, edadIdPremedic);

    valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edadID1OMINT)





    console.log('%cPrecio Titular sancor', 'color:orange');
    console.log(precioTitular);
    console.log('%cPrecio Conyuge Sancor', 'color:orange');
    console.log(preciosConyuge);
    console.log('%cPrecio Primer Hijo Sancor', 'color:orange');
    console.log(precio1Hijo);
    console.log('%cPrecio Segundo Hijo y siguientes Sancor', 'color:orange');
    console.log(precio2Hijo);
    console.log('%cCantidad del segundo y siguientes hijos', 'color:red');
    console.log(numhijo2);
    console.log('%cPrecio Adultos Sancor', 'color:green');
    console.log(precio_adultos_Sancor);

    console.log('%cValor Plan Sancor', 'color:blue');
    console.log('%cPrecio Sancor Salud', 'color:blue');

    console.log(valor_plan_sancor);
    console.log('%cPrecio OMINT', 'color:blue');

    console.log(valor_plan_omint);
    console.log('%cBonificacion por Aportes Sancor Salud', 'color:red');
    console.log(bonifAport);

    console.log('%cPrecio galeno', 'color:green');
    console.log(valor_plan_galeno);

    console.log('%cValor Plan Galeno', 'color:blue');
    console.log('%cPrecio Galeno', 'color:blue');


    console.log(precio_precios_grupo_Galeno);
    console.log('%cBonificacion por Aportes', 'color:red');
    console.log(bonifAportGaleno);

    console.log('%cPrecio omint', 'color:blue');
    console.log(valor_plan_omint);


    let precio = {};


    // <!----------------------Funcion Filtro Prepaga start---------------------------->             
    function precioSeleccionado(prepaga, precio_sancor, precio_galeno, precio_premedic, precio_omint) {

        if (prepaga == 0) {
            precio = Object.assign({}, precio_sancor, precio_galeno, precio_premedic, precio_omint);
        }
        else if (prepaga == 1) {
            precio = precio_sancor
        } else if (prepaga == 2) {
            precio = precio_galeno;
        } else if (prepaga == 3) {
            precio = precio_premedic;
        } else if (prepaga == 4) {
            precio = precio_omint;
        } else { precio = Object.assign({}, precio_sancor, precio_galeno, precio_premedic, precio_omint); }
        console.log(precio);
        console.log(prepaga);
        console.log('Valor plan Sancor : ' + precio_sancor);
        console.log('Valor plan Galeno : ' + precio_galeno);
        console.log('Valor plan Premedic : ' + precio_premedic);
        console.log('Valor plan Omint : ' + precio_omint);
    }


    // precio = Object.assign({}, valor_plan_sancor, valor_plan_galeno,valor_plan_premedic);

    precioSeleccionado(prepaga_empresa, valor_plan_sancor, valor_plan_galeno, valor_plan_premedic, valor_plan_omint)

    //   precio = Object.assign({}, valor_plan_sancor, valor_plan_galeno,valor_plan_premedic);

    // <!---------------------Funcion Filtro Prepaga end---------------------------->     

    //   let empresa_planes = [];
    //   empresa_planes.push = (sancorsalud : (sancor700A;sancor1000Bcc))

    //   console.log('listas de precios: '+ listas_de_precios)




    //           let myObject = {
    //     "mykey1" : "My Value 1",
    //     "mykey2" : "My Value 2"
    // };

    // https://www.delftstack.com/es/howto/javascript/check-if-key-exists-in-javascript/
    // function isKeyExists(obj,key){
    //     if( obj[key] == undefined ){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

    // let result0 = isKeyExists(listas_de_precios,"premedic")
    console.log("Check for the non-existing key, is key exists > "+ result0)

    // let result1 = isKeyExists(listas_de_precios,"sancorsalud")
    console.log("Check for the existing key, is key exists > "+result1)



    parseR(precio, bonifAport, segvida1, segvida2, bonA, aficheq);
}

// <!----------------------Funcion PRODUCT ID SANCOR start---------------------------->     
function productID(edad, tipoAsoc, gen, miembro, numHijos) {
    let edadID = '';
    let grupoSigla = '';
    tipo = tipoAsoc + gen;
    if (gen == 'GEN' && numHijos > 0) { grupoSigla = 'GF' };
    if (18 <= edad && edad <= 25) {
        edadID = '1' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (26 <= edad && edad <= 29) {
        edadID = '2' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (30 <= edad && edad <= 35) {
        edadID = '3' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (36 <= edad && edad <= 39) {
        edadID = '4' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (40 <= edad && edad <= 45) {
        edadID = '5' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (46 <= edad && edad <= 49) {
        edadID = '6' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (50 <= edad && edad <= 59) {
        edadID = '7' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    } else if (60 <= edad && edad <= 69) {
        edadID = '8' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    }
    else if (70 <= edad) {
        edadID = '9' + tipo;
        hijoId = '1H' + tipo;
        hijo2Id = '2H' + tipo;
    }
    if (miembro === 'titular') { edadID1 = edadID + grupoSigla } else { edadID2 = edadID + grupoSigla };
};
// <!----------------------Funcion PRODUCT ID SANCOR end---------------------------->     
// <!----------------------Funcion PRODUCT ID GALENO start---------------------------->        
function productIdGaleno(anios_1, anios_2, tipoAsoc, numHijos) {
    let tipoGaleno = tipoAsoc + 'S';
    let grupoSiglaGaleno = 'IND';
    edadIdGaleno = '';
    let anios2 = anios_2;
    let anios = anios_1;

    if (anios2 > anios) {
        anios2 = anios_1;
        anios = anios_2
    };
    if (anios2 >= 18) { grupoSiglaGaleno = 'MAT'; anios2 = anios2; anios = anios; }

    if (anios <= 25) {

        edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 25 + '+' + numHijos + 'h';

    } else if (anios <= 36) {

        edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 36 + '+' + numHijos + 'h';
    }
    else if (anios <= 64) {

        edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 64 + '+' + numHijos + 'h';

    } else if (anios <= 65) {

        edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 65 + '+' + numHijos + 'h';
    }

};
// <!----------------------Funcion PRODUCT ID GALENO end---------------------------->

// <!----------------------Funcion PRODUCT ID PREMEDIC start----------------------------> 
function productIdPremedic(age_1, age_2, tipoAsoc, numHijos) {


    edadIdPremedic = '';


    age2 = age_2;
    age = age_1;



    if (age2 > age) {
        age2 = age_1;
        age = age_2
    };

    if (age2 >= 18) {

        if (age <= 29) {

            edadIdPremedic = tipoAsoc + 'MAT' + 29 + '+' + numHijos + 'h';

        } else if (age <= 39 && age >= 30) {

            edadIdPremedic = tipoAsoc + 'MAT' + 39 + '+' + numHijos + 'h';

        } else if (age <= 49 && age >= 40) {

            edadIdPremedic = tipoAsoc + 'MAT' + 49 + '+' + numHijos + 'h';

        } else if (age <= 59 && age >= 50) {

            edadIdPremedic = tipoAsoc + 'MAT' + 59 + '+' + numHijos + 'h';


        }
    }

    else if (age2 == 0) {
        if (age <= 29) {

            edadIdPremedic = tipoAsoc + 'IND' + 29 + '+0h';

        } else if (age <= 39 && age >= 30) {

            edadIdPremedic = tipoAsoc + 'IND' + 39 + '+0h';

        } else if (age <= 49 && age >= 40) {

            edadIdPremedic = tipoAsoc + 'IND' + 49 + '+0h';

        } else if (age <= 59 && age >= 50) {

            edadIdPremedic = tipoAsoc + 'IND' + 59 + '+0h';

        } else { edadIdPremedic = ''; }

    }
}

// <!----------------------Funcion PRODUCT ID GALENO END---------------------------->           
// <!----------------------Funcion PRODUCT ID OMINT start---------------------------->        

function productIdOmint(anios, tipoAsoc, miembro) {
    let edadID = '';
    let tipo = tipoAsoc;
    let agnos = anios;
    hijoIdOMINT = tipo + 'H1';
    hijo2IdOMINT = tipo + 'H2';


    if (agnos >= 18 && agnos <= 25) {
        edadID = tipo + 25;
    } else if (agnos >= 26 && agnos <= 35) {
        edadID = tipo + 35;
    } else if (agnos >= 36 && agnos <= 54) {
        edadID = tipo + 54;
    } else if (agnos >= 55 && agnos <= 59) {
        edadID = tipo + 59;
    } else {
        edadID = tipo + 60;
    }
    if (miembro === 'titular') { edadID1OMINT = edadID } else { edadID2OMINT = edadID };


};

// <!----------------------Funcion PRODUCT ID OMINT end---------------------------->

// <!----------------------Funcion PARSE R start---------------------------->    

function parseR(precio, bonifAport, segvida1, segvida2, bonA, aficheq) {
    resultsReady = true;
    parseResult(precio, bonifAport, segvida1, segvida2, bonA, aficheq);
 
}
// <!----------------------Funcion PARSE R end---------------------------->     

// <!----------------------Funcion PARSE RESULT start----------------------------> 
pasados = new Array();
function parseResult(precio, bonifAport, segvida1, segvida2, bonA, aficheq) {
    // let rowCount = 0;
    // let rowCountPmo = 0;
    // let rowCountBas = 0;
    // let rowCountIni = 0;
    // let rowCountSup = 0;
    // let rowCountPre = 0;
    let resHTML = '';
    let resHTML_mobile = '';
    // let arrCount = -1;
    let tmpHTML = ''; // declaro letiable filas con resultados individuales de escritorio, sin asignar valor

    // let id_res = '';
    // let id_res_mobile = '';
    let arrPlan = [];
    // let promoHTML = '';
    // let promoGIF = '';
    let row_pos = '';
    let colorPlan = '';
    let segVidacheck = segvida1;
    let segVida2check = segvida2;
    let afiche = aficheq;
    let segVida = 0;
    let segVida1 = 0;

    let empresaPlan = '';
    let empresa = '';
    let plan_nombre = '';
    let bonInscr = 0;
    let bonAf = '';
    let logoprepaga = '';
    let precio_final_a_pagar = 0;
    let textoOtrosBen = '';
    let textoSegVida = '';
    let textoBonAfinidad = '';
    let segVidaTotal = '';
    let textoAportesOS = '';
    let valor_total_plan = 0;
    let nivelCobertura = 0;
    let stars_rating = 3;
    let descAportes = bonifAport;
    let bonAfinidadMonto = '';
    let precioPlan = 0;
    let precioMax = 0;
    let precioMin = 0;
    let todosPrecios = [];
    let ajustePrecios = '';
    let empresaFantasia = '';

    console.log('%cDescuento por Aportes', 'color:red');
    console.log(descAportes);
    console.log('%cSeguros de Vida solicitados', 'color:red');
    console.log(segVidacheck);
    console.log(segVida2check);
    console.log('%cBonificacion Afinidad %', 'color:orange')
    console.log(bonA);


    for (j in precio) {
        let otrosBenPrecios = [{col_1: 1, SSPRO: 125, SSOD: 283, SSAC:67, SUF: 28, CS: 600}, {col_1: 2, SSPRO: 218, SSOD: 566, SSAC:134, SUF: 56, CS: 1200}, {col_1: 3, SSPRO: 333, SSOD: 566, SSAC:201, SUF: 84, CS: 1800}, {col_1: 4, SSPRO: 442, SSOD: 566, SSAC:268, SUF: 112, CS: 2400}, {col_1: 5, SSPRO: 553, SSOD: 566, SSAC:335, SUF: 140, CS: 3000}, {col_1: 6, SSPRO: 661, SSOD: 566, SSAC:402, SUF: 168, CS: 3600}];
        let cuotaSocial = grupoFam * 600;
        let segVidaPrecio = [{col_1: '18 A 45', col_2: 441},{col_1: '46 A 54', col_2: 686},{col_1: '55 A 59', col_2: 686}];
        let x = j.length;
        empresaPlan = [j][0];
        empresa = empresaPlan.substring(0, 6);
        plan_nombre = empresaPlan.substring(6);
        plan_gen = empresaPlan.substring(6, 9);
        bonInscr = parseInt(precio[j]) * 0.1;
        bonAf = bonA;



        let pos = '';



        console.log('empresaPlan' + empresaPlan);
        console.log('empresa' + empresa);
        console.log('plan_nombre' + plan_nombre);

        if (empresa == 'sancor') {
            logoprepaga = 'sancorsalud.png';
            otrosBen = 0;
            empresaFantasia = 'SanCor Salud';
            let bonAfinidad = 0;
            if (afiche == true) {
                textoBonAfinidad = 'Bonif. Afinidad';
                bonAfinidad = parseInt(precio[j]) * bonAf;
                bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());

            } else { bonAf = ''; }

            console.log('%cBonificacion Afinidad', 'color:orange');


            cuotaSocial = otrosBenPrecios[grupoFam - 1]['CS'];
            if (supras === true && gen === '') {
                otrosBen = 0;


                if (plan_nombre.includes('B')) {
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSPRO'];
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSOD'];


                } else {
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSPRO'];
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSOD'];
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSAC'];
                    otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SUF'];
                };

                textoOtrosBen = '<tr><td>Otros Beneficios</td><td>$ ' + otrosBen + '</td></tr>';
            }

            if (segVidacheck == true) {


                if (edad1 >= 18 && edad1 <= 45) {
                    segVida = segVidaPrecio[0]['col_2']
                } else if (edad1 >= 46 && edad1 <= 54) {
                    segVida = segVidaPrecio[1]['col_2']
                } else {
                    segVida = segVidaPrecio[2]['col_2']
                };
                textoSegVida = '<tr><td> Seguro de Vida: </td><td>$ ' + segVida + '</td>';
            }
            if (segVida2check == true) {
                if (edad2 < 18) {
                    segVida1 = 0;
                } else if (edad2 >= 18 && edad2 <= 45) {
                    segVida1 = segVidaPrecio[0]['col_2']
                } else if (edad1 >= 46 && edad1 <= 54) {
                    segVida1 = segVidaPrecio[1]['col_2']
                } else {
                    segVida1 = segVidaPrecio[2]['col_2']
                };
                segVidaTotal = segVida + segVida1;
                textoSegVida = '<tr><td> Seguro de Vida: </td><td>$ ' + segVidaTotal + '</td>';
            }

            segVidaTotal = segVida + segVida1;
            console.log('Precio del PLan ' + empresa + ': ' + plan_nombre);
            console.log(precio[j]);
            console.log('Otros beneficios para Plan ' + empresa + ': ' + plan_nombre);

            console.log('Seguro de Vida Titular:');
            console.log(segVida);
            console.log('Seguro de Vida Conyuge:');
            console.log(segVida1);
            console.log('Seguro de Vida Ambos:');
            console.log(segVidaTotal);
            console.log('Valor Final ' + empresa + ': ' + plan_nombre);
            console.log
            valor_total_plan = parseInt(precio[j]) + parseInt(cuotaSocial) + parseInt(otrosBen) + parseInt(segVidaTotal) - parseInt(bonAfinidad.toFixed());
            precioPlan = parseInt(precio[j]) + parseInt(cuotaSocial);
            console.log(valor_total_plan);

            if (tipoIngreso === "M" || tipoIngreso === "D") {
                precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(descAportes);
                textoAportesOS = 'Aportes OS'
                bonifAport = '- ' + parseInt(bonifAportSancor);
            } else if (tipoIngreso === "I") {
                precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonInscr);
                bonifAport = bonInscr;
                textoAportesOS = 'Bonif. RI :'
            } else {
                precio_final_a_pagar = valor_total_plan;
            }
            // if ( precio_final_a_pagar < segVidaTotal) {
            //     precio_final_a_pagar = 0 + parseInt(segVidaTotal);
            // }

            console.log('precio_final_a_pagar:');
            console.log(precio_final_a_pagar);
            console.log('valor_total_plan:');
            console.log(valor_total_plan);
            console.log('descAportes:');
            console.log(descAportes);

            if (plan_nombre === "1000B") {
                colorPlan = '#df9000';
            } else if (plan_nombre === "1000Bcc") {
                colorPlan = '#df9000';
            } else if (plan_nombre === "1500B") {
                colorPlan = '#368969';
            } else if (plan_nombre === "1500Bcc") {
                colorPlan = '#368969';
            } else if (plan_nombre === "3000B") {
                colorPlan = '#0c37b3';
            } else if (plan_nombre === "3500") {
                colorPlan = '#2897d7';
            } else if (plan_nombre === "4000") {
                colorPlan = '#0846f7';
            } else if (plan_nombre === "4500") {
                colorPlan = '#12009f';
            } else if (plan_nombre === "5000") {
                colorPlan = '#202020';
            } else if (plan_nombre === "6000") {
                colorPlan = '#202020';
            } else if (plan_nombre === "700A") {
                colorPlan = '#bfd807';
            } else if (plan_nombre === "800V") {
                colorPlan = '#22b30c';

            } else {
                colorPlan = '';
            };
            if (gen === 'GEN' && plan_gen >= 100 && plan_gen <= 450) {
                plan_nombre = gen + plan_nombre

            } else {
                plan_nombre = plan_nombre;
            }
        } else if (empresa == 'galeno') {
            precioPlan = parseInt(precio[j]);
            logoprepaga = 'galeno.png';
            empresaFantasia = 'Galeno';
            textoSegVida = '';
            if (plan_nombre == 'Plan_220') {
                plan_nombre = '220 AZUL'
            } else if (plan_nombre == 'Plan_330') {
                plan_nombre = '330 PLATA'
            } else if (plan_nombre == 'Plan_440') {
                plan_nombre = '440 ORO'
            } else if (plan_nombre == 'Plan_550') {
                plan_nombre = '550 ORO'
            };
            valor_total_plan = parseInt(precio[j]);
            console.log(valor_total_plan);

            if (tipoIngreso === "M" || tipoIngreso === "D") {
                textoAportesOS = 'Aportes OS';
                bonifAport = '-' + parseInt(bonifAportGaleno);
                precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportGaleno);

            } else {
                precio_final_a_pagar = valor_total_plan;
            }
        } else if (empresa == 'premed') {
            logoprepaga = 'premedic.png';
            precioPlan = parseInt(precio[j]*1.1134);
            valor_total_plan = parseInt(precio[j]*1.1134);
            empresaFantasia = 'Premedic';
            textoSegVida = '';
            console.log(valor_total_plan);
            if (plan_nombre === 'Plan_C100') {
                plan_nombre = 'C100'
            } else if (plan_nombre === 'Plan_200') {
                plan_nombre = '200'
            } else if (plan_nombre === 'Plan_300') {
                plan_nombre = '300'
            } else if (plan_nombre === 'Plan_400') {
                plan_nombre = '400'
            } else if (plan_nombre === 'Plan_500') {
                plan_nombre = '500'
            }
            let bonAfinidad = 0;

            if (afiche == true) {
                textoBonAfinidad = 'Bonif. Afinidad';
                bonAfinidad = parseInt(precio[j]*1.1134) * bonAf;
                bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());
                valor_total_plan = parseInt(precio[j]*1.1134) - parseInt(bonAfinidad.toFixed());
            }
            if (tipoIngreso === "M" || tipoIngreso === "D") {
                textoAportesOS = 'Aportes OS';
                textoBonAfinidad = '';
                bonAfinidad = '';
                bonifAport = '-' + parseInt(bonifAportPremedic);
                precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportPremedic);
                console.log(tipoIngreso);
                console.log(bonifAportPremedic);
            } else {
                precio_final_a_pagar = valor_total_plan;
            }
        } else if (empresa.includes('omint')) {
            precioPlan = parseInt(precio[j]*1.1134);
            logoprepaga = 'omint-1.png';
            empresaFantasia = 'Omint';
            valor_total_plan = parseInt(precio[j]*1.1134);
            textoSegVida = '';
            console.log(valor_total_plan);
            if (plan_nombre === 'Plan_1500_22') {
                plan_nombre = '1500  22'
            } else if (plan_nombre === 'Plan_1500_22S') {
                plan_nombre = '1500  22S'
            } else if (plan_nombre === 'Plan_2500_24') {
                plan_nombre = '2500  24'
            } else if (plan_nombre === 'Plan_2500_24S') {
                plan_nombre = '2500  24S'
            } else if (plan_nombre === 'Plan_4021_22') {
                plan_nombre = '4021  22'
            } else if (plan_nombre === 'Plan_4021_22S') {
                plan_nombre = '4021  22S'
            } else if (plan_nombre === 'Plan_4500_23') {
                plan_nombre = '4500  23'
            } else if (plan_nombre === 'Plan_4500_23S') {
                plan_nombre = '4500  23S'
            } else if (plan_nombre === 'Plan_4500_24') {
                plan_nombre = '4500  24'
            } else if (plan_nombre === 'Plan_4500_24S') {
                plan_nombre = '4500  24S'
            } else if (plan_nombre === 'Plan_6500_21') {
                plan_nombre = '6500  21'
            } else if (plan_nombre === 'Plan_6500_21S') {
                plan_nombre = '6500  21S'
            } else if (plan_nombre === 'Plan_6500_22') {
                plan_nombre = '6500  22'
            } else if (plan_nombre === 'Plan_6500_22S') {
                plan_nombre = '6500  22S'
            } else if (plan_nombre === 'Plan_8500_21') {
                plan_nombre = '8500  21'
            } else if (plan_nombre === 'Plan_8500_21S') {
                plan_nombre = '8500  21S'
            } else if (plan_nombre === 'Plan_8500_22') {
                plan_nombre = '8500  22'
            } else if (plan_nombre === 'Plan_8500_22S') {
                plan_nombre = '8500  22S'
            } else if (plan_nombre === 'Plan_Midoc_10') {
                plan_nombre = 'Midoc  10'
            } else if (plan_nombre === 'Plan_Midoc_10S') {
                plan_nombre = 'Midoc  10S'
            }

            // let bonAfinidad = 0;

            // if (afiche == true) {
            //     textoBonAfinidad = 'Bonif. Afinidad';
            //     bonAfinidad = parseInt(precio[j]) * bonAf;
            //     bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());
            //     valor_total_plan = parseInt(precio[j]) - parseInt(bonAfinidad.toFixed());
            // };

            precio_final_a_pagar = valor_total_plan;
            if (tipoIngreso === "M" || tipoIngreso === "D") {
                textoAportesOS = 'Aportes OS';
                bonifAport = '-' + parseInt(bonifAportOmint);
                precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportOmint);
                console.log(tipoIngreso);
                console.log(bonifAportOmint);
            }
        }



        // inputmin = $('#input-min').val();
        // inputmax = $('#input-max').val();
        console.log(inputmin);
        console.log(inputmax);
        function adPlan(planName, precio) {

            arrPlan.push(planName);
            todosPrecios.push(precio);

        }


        console.log(arrPlan);
        console.log(arrPlan.includes(empresa + ' Plan ' + plan_nombre));
        console.log(todosPrecios);
        console.log(Math.max(...todosPrecios))
        let precioMax = Math.max(...todosPrecios)
        console.log(Math.min(...todosPrecios))
        let precioMin = Math.min(...todosPrecios)

        console.log(arrPlan.length);
        let indiceMax = todosPrecios.indexOf(precioMax);
        console.log(indiceMax);
        let indiceMin = todosPrecios.indexOf(precioMin);
        console.log(indiceMin);
        console.log(arrPlan[indiceMax]);
        console.log(arrPlan[indiceMin]);
        console.log('El total de Planes encontrados es de ' + arrPlan.length)
        console.log('El Plan Más barato es el Plan ' + arrPlan[indiceMin] + ' cuyo precio es ' + precioMin);
        console.log('El Plan Más caro es el Plan ' + arrPlan[indiceMax] + ' cuyo precio es ' + precioMax);



        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if ((maxVal - minVal) < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

        if (precio_final_a_pagar < 0) {
            precio_final_a_pagar = 0;
        };


        // if (precio_final_a_pagar < inputmax && precio_final_a_pagar > inputmin && arrPlan.includes(plan_nombre) == false) {

        adPlan(empresaFantasia + ' Plan ' + plan_nombre, precio_final_a_pagar);
        if (arrPlan.length < 10) {
            pos = '00' + arrPlan.length;
        } else if (arrPlan.length < 2) {
            pos = '0' + arrPlan.length;
        } else {
            pos = arrPlan.length;
        }
        console.log(pos);
        // if(precio[j]['ver_detalles'] != 'no_mostrar'){
        //       arrCount++;
        //       if(precio[j]['id_tipoCobertura'] == 1){
        //         rowCountPmo++;
        //         row_pos = rowCountPmo;
        //       }else if(precio[j]['id_tipoCobertura'] == 2){
        //         rowCountBas++;
        //         row_pos = rowCountBas;
        //       }else if(precio[j]['id_tipoCobertura'] == 3){
        //         rowCountIni++;
        //         row_pos = rowCountIni;
        //       }else if(precio[j]['id_tipoCobertura'] == 4){
        //         rowCountSup++;
        //         row_pos = rowCountSup;
        //       }else {
        //         rowCountPre++;
        //         row_pos = rowCountPre;
        //       }
        //       if(precio[j]['id_tipoCobertura'] == 1){
        //         nivelCobertura = 'PMO';
        //         id_res = 'res_pmo';
        //         id_res_mobile = 'res_pmo_mobile';      // Plan Médico Obligatorio  // elegir letras de acuerdo a algo represntativo 
        //       }else if(precio[j]['id_tipoCobertura'] == 2){        // cada fila sera acomodada en la pestaña correspondiente según tipo de cobertura
        //         nivelCobertura = 'BAS';
        //         id_res = 'res_bas';
        //         id_res_mobile = 'res_bas_mobile';                            // Básica
        //       }else if(precio[j]['id_tipoCobertura'] == 3){        // cada fila tendra un id distinto concatenado esto con la posicion
        //         nivelCobertura = 'INI'
        //         id_res = 'res_ini';
        //         id_res_mobile = 'res_ini_mobile';                              // Inicial
        //       }else if(precio[j]['id_tipoCobertura'] == 4){
        //         nivelCobertura = 'SUP';
        //         id_res = 'res_sup';
        //         id_res_mobile = 'res_sup_mobile';                               // Superior
        //       }else{
        //         nivelCobertura = 'PRE';
        //         id_res = 'res_pre';             // 5      
        //         id_res_mobile = 'res_pre_mobile';          // Premium
        //       }   



        //      if(precio[j]['id_tipoCobertura'] == 1){                // Plan Médico Obligatorio  // elegir letras de acuerdo a algo represntativo 
        //         stars_rating ='<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>';
        //       }else if(precio[j]['id_tipoCobertura'] == 2){        // cada fila sera acomodada en la pestaña correspondiente según tipo de cobertura
        //         stars_rating ='<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>';                           // Básica
        //       }else if(precio[j]['id_tipoCobertura'] == 3){        // cada fila tendra un id distinto concatenado esto con la posicion
        //        stars_rating ='<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>';                            // Inicial
        //       }else if(precio[j]['id_tipoCobertura'] == 4){
        //         stars_rating ='<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:gray"></span>';                             // Superior
        //       }else{
        //         nivelCobertura = 'PRE';
        //        stars_rating ='<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>'
        //                     + '<span class="fa fa-star" style="color:orange"></span>';         // Premium
        //   


        resHTML_left_col = '<div class="left-column col-md-12" style="margin-top:30px;padding:30px;font-size:18px;color: #1f801f;" >'
            + '<div class="container">'
            + '<div class="icon_person">'
            + '<span class="notify-badge"><strong>' + num_adultos + '</strong></span>'
            + '<img src="./assets/img/icons/2x/outlineblack_36dp_tb.png" />'
            + '</div>'
            + '<div class="icon_person">'
            + '<span class="notify-badge">' + numHijos + '</span>'
            + '<img src="assets/img/icons/2x/outlineblack_24dp_tb.png" />'
            + '</div></div>'
            + '<br>'
            + '<br>'
            + '<div>Se encontraron <strong>' + arrPlan.length + '</strong> planes</div>'
            + '<br>'
            + '<div>Entre el de <strong> ' + arrPlan[indiceMin] + '</strong> al precio de <strong>$ ' + precioMin + '</strong></div>'
            + '<br>'
            + '<div>y el de <strong> ' + arrPlan[indiceMax] + '</strong> al precio de <strong>$ ' + precioMax + '</strong></div>'

            + '<div class="column col-md-12">' + ajustePrecios; '</div>'
                + '</div>'
                + '</div>';
        ajustePrecios = '<div class="container col-12" style="margin-top:30px;padding:30px">'
            + '<form>'
            + '<div class="price-input">'

            + '<div class="field">'
            + '<span>Min</span>'
            + '<input type="number" class="input-min" value="' + precioMin + '" id="input-min">'
            + '</div>'
            + '<div class="separator">-</div>'
            + '<div class="field">'
            + '<span>Max</span>'
            + '<input type="number" class="input-max" value="' + precioMax + '" id="input-max">'
            + '</div>'
            + '</div></div>'
            + '<div class="slider" >'
            + '<div class="progress" ></div>'
            + '</div>'
            + '<div class="range-input">'
            + '<input type="range" class="range-min" min="' + precioMin + '" max="' + precioMax + '" value="' + precioMin + '" step="500" id="range-min">'
            + '<input type="range" class="range-max" min="' + precioMin + '" max="' + precioMax + '" value="' + precioMax + '" step="500" id="range-max">'
            + '</div>'
            + '<div style="margin: 25px  25px ;align:center">'
            + '<input class="btn btn-primary"  onclick="pasarvariable(seleccionados[0],seleccionados[1],seleccionados[2]);" value="Comparar" class="button btn btn-primary">'
            + '<form>'

        resHTML_head = '<div class="wrapper gx-4" style="border-style:solid;border-width: 1px;border-color: gray;height: 70px;margin-bottom: 10px;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"\>'
            + '<div class="row">'
            // + '<ul class="nav nav-tabs" id="lista_coberturas">'
            // +'<li id="tabPol1" style="width:15%;">'
            // + '<a onclick="toggle_rp_classic(1);">'
            // + '<h1 class="heading">1</h1>'
            // + '<p id="desde_pmo">11</p>'
            // + '</a>'
            // + '</li>'
            // + '<li id="tabPol2" style="width:15%;"  class="active">'
            // + '<a onclick="toggle_rp_classic(2);">'
            // + '<h1 class="heading"></h1>'
            // + '<p id="desde_bas"></p>'
            // + '</a>'
            // + '</li>'
            // + '<li id="tabPol3" style="width:15%;">'
            // + '<a onclick="toggle_rp_classic(3);">'
            // + '<h1 class="heading"></h1>'
            // + '<p id="desde_ini"></p>'
            // + '</a>'
            // + '</li>'
            // + '<li id="tabPol4" style="width:15%;">'
            // + '<a onclick="toggle_rp_classic(4);">'
            // + '<h1 class="heading"></h1>'
            // + '<p id="desde_sup"></p>'
            // + '</a>'
            // + '</li>'
            // + '<li id="tabPol5" style="display:15%;">'
            // + '<a onclick="toggle_rp_classic(5);">'
            // + '<h1 class="heading"></h1>'
            // + '<p id="desde_pre"></p>'
            // + '</a>'
            // + '</li>'
            // + '</ul>'
            + '<div class="d-grid gap-3" id="selectHTML_comparar"></div>'
            + '</div>'
            + '</div>'
            + '<div class="wrapper gx-4" style="border-style:solid;border-width: 1px;border-color: gray;height: 20px;margin-bottom: 10px;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);display: flex;"\>'
            + '<div class="col" style="width:25%">'
            + '<p>Empresa</p>'
            + '</div>'
            + '<div class="col" style="width:25%">'
            + '<p>Beneficios</p>'
            + '</div>'
            + '<div class="col" style="width:25%">'
            + '<p id="copago_descuento">Clinicas</p>'
            + '</div>'
            + '<div class="col" style="width:25%">'
            + '<p>Precio</p>'
            + '</div>'
            + '</div>';



        tmpHTML = '<div class="row row-1" style="height:200% id="' + nivelCobertura + 'resultRow' + row_pos + '">'
            + '<div class="col-xl-3 col-lg-2 px-0" style="width:25%;padding:10px">'
            // + '<div style="z-index:3;height:30px;padding-top:0.2em;padding-bottom:0.2em;padding-right :10px;color:white;text-indent:10px;font-size:14px;border-top-left-radius: 10px;position:absolute;border-style:none;background-color:' + colorPlan +  ';margin-top: 7px;margin-left: -5px;"><strong> PLAN '+ plan_nombre +  '</strong></div>'
            + '<div style="z-index:3;height:30px;padding-top:0.2em;padding-bottom:0.2em;padding-right :10px;color:white;text-indent:10px;font-size:14px;border-top-left-radius: 10px;position:absolute;border-style:none;background-color:transparen;margin-top: 7px;margin-left: -5px;"><strong> Plan ' + plan_nombre + '</strong></div>'
            + '<img src="assets/img/imagenes/vineta-2.png" style="width:20%;margin-left:-17px;margin-top:-10px;z-index:2;position:absolute" class="img-fluid">'
            // + '<div style="z-index:1;height:8px;;width:5px;border-bottom-left-radius: 5px;position:absolute;bborder-bottom-left-radius: 5px;border-left-style:solid;border-bottom-style:solid;border-width:2px;border-color:' + colorPlan +  ';background-color:gray;margin-top: 37px;margin-left: -5px;"></div>'        
            + '<img style="margin:0px auto;margin-top:60px;margin-left20px;" class="card-img-top" src="assets/img/logo/coberturas-sm/' + logoprepaga + '" alt="Card image cap">'
            + '<div>'
            + '<input class="form-check-input"  type="checkbox"  name="miComparacion" id="comparar" value="' + 'e' + pos + '=' + empresaPlan + '&p' + pos + '=' + precio_final_a_pagar + '&v' + pos + '=' + plan_nombre + '&x' + pos + '=' + logoprepaga + '">'

            + '</div>'
            + '</div>'
            + '<div class="container col-xl-6 col-lg-6 px-0" style="width:50%;">'
            + '<table>'
            + '<div class="caption center block">Cotizaci&oacute;n</div>'
            + '<tr>'
            + '<td > Valor del Plan :</td>'
            + '<td> ' + precioPlan + '</td>'
            + '</tr>' + textoSegVida

            + '</tr>' + textoOtrosBen

            + '<tr>'
            + '<td>' + textoBonAfinidad + '</td>'
            + '<td>' + bonAfinidadMonto + '</td>'
            + '</tr>'
            + '<tr>'
            + '<td >' + textoAportesOS + '</td>'
            + '<td>' + bonifAport + '</td>'
            + '</tr>'
            + '</table>'



            + '<div class="row">'
            + '<div class="col-md-6 col-sm</div>'
            + '<div class="col-md-6 col-sm-6"></div>'
            + '</div>'

            + '<div class="row">'
            + '<div class="col-md-6 col-sm-6"></div>'
            + '<div class="col-md-6 col-sm-6"></div>'
            + '</div>'

            + '<div class="row">'
            + '<div class="col-md-6 col-sm-6"></div>'
            + '<div class="col-md-6 col-sm-6"></div>'
            + '</div>'

            + '<div class="row"></div>'
            + '</div>'
            + '<div class="col-xl-4 center block" style="padding:0px;width:25%;align-items: center;display:flex">'
            + '<div class="container-fluid ">'
            + '<div class="col-12">' + stars_rating + '</div>'
            + '<div class="row justify-content-md-center  justify-content-sm-center">'
            + '<div class="col-md-auto col-sm-auto" style="color: black"><strong style="font-size:28px">' + precio_final_a_pagar + '</strong>/mes</div>'
            + '<br>'
            + '</div>'
            + '<div class="row justify-content-md-center   justify-content-sm-center" >'
            + '<div class="col-md-auto col-sm-auto">'
            + '<button style="width:0 auto"" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cotizar">Cotizar</button>'
            + '</div>'
            + '</div>'
            + '<div class="row justify-content-md-center  justify-content-sm-center" >'
            + '<div class="col-md-auto col-sm-auto">'
            + '<p>ver de talle</p>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';

        tmpHTML_mobile = '<div class="filter-top" style="height: 27%;display:flex;">'
            + '<div style="width:50%;float:left;">'
            + '<div style="z-index:3;height:30px;padding-top:0.1em;padding-bottom:0.2em;padding-right :10px;color:white;text-indent:10px;font-size:14px;position:absolute;border-style:none;margin-top: 0px;margin-left: -5px;"><strong> PLAN ' + plan_nombre + '</strong></div>'
            // + '<div style="z-index:3;height:8px;width:5px;border-bottom-left-radius: 5px;position:absolute;border-bottom-left-radius: 5px;border-left-style:solid;border-bottom-style:solid;border-width:2px;margin-top: 30px;margin-left: -5px;"></div>'        
            + '<img src="assets/img/imagenes/vineta-2.png" style="width:50%;margin-left:-10px;z-index:2;position:absolute">'
            + '<img style="margin:0px auto;align-items:center;margin-left: 10px;margin-top:50px" class="card-img-top" src="assets/img/logo/coberturas-sm/' + logoprepaga + '" alt="Card image cap">'
            + '</div>'

            + '<div style="width:50%;float:right;margin-top:30px">'
            + '<strong style="font-size:28px">' + precio_final_a_pagar + '</strong>/mes</div>'
            + '</div>'
            + '<div style="height: 12%" style="color: #ffff">'
            + '<input class="form-check-input"  type="checkbox"  name="miComparacionMobile" id="compararmobile" value="' + empresa + plan_nombre + '">'
            + '</div>'
            + '<div style="height: 33%">'
            + '<div class="container container-fluid">'
            + '<table>'
            + '<div class="caption center block"  style="color: #ffff; margin:0px;">Cotizaci&oacute;n</div>'
            + '<tr>'
            + '<td > Valor del Plan :</td>'
            + '<td> ' + precioPlan + '</td>'
            + '</tr>' + textoSegVida

            + '</tr>' + textoOtrosBen

            + '<tr>'
            + '<td>' + textoBonAfinidad + '</td>'
            + '<td>' + bonAfinidadMonto + '</td>'
            + '</tr>'
            + '<tr>'
            + '<td >' + textoAportesOS + '</td>'
            + '<td>' + bonifAport + '</td>'
            + '</tr>'
            + '</table>'

            + '</div>'
            + '</div>'
            + '<div style="display:flex">'
            + '<button style="margin: 0 auto;" type="button" class="btn-box-movil" data-bs-toggle="modal" data-bs-target="#cotizar">Cotizar</button>'
            + '</div>'
            + '<div style="height: 10%">'
            + '<a style="color: #ffff"></a>'
            + '</div>';



        resHTML += '<div class=""  style="background-color:white;height:173px;padding:10px;box-shadow: 2px 2px 2px 3px rgba(0, 0, 0.2, 0.2);margin:0px;">' + tmpHTML + '</div><div class="spacer" style="height:20px"></div>';   // asigno un valor a la variable resHTML;

        resHTML_mobile += '<div class="box " id="' + nivelCobertura + 'resultRow' + row_pos + '" style="background-color:white;margin: 5px;padding: 5px;font-size: 12px";>' + tmpHTML_mobile + '</div><div class="spacer" style="height:20px"></div>';


    }

    $('#uno').html(resHTML_left_col);

    $('#filter_left').html(resHTML_left_col);

    $('#_head_table #_headDetails_QuoteResults_classic').html(resHTML_head);

    $('#_results_table #_resultDetails_QuoteResults_classic').html(resHTML);
    $('#results_mobile').html(resHTML_mobile);

    $('#cotizar_grupo_familiar').html('<button  class="btn btn-primary center" data-bs-toggle="modal" data-bs-target="#cotizar" style="position: inherit;">Cotizar Grupo Familiar</button>');

    // }
}