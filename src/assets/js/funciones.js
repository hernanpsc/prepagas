function grupoFamiliar(age0, age1, kids) {
	let num_adultos = 1;
	let numhijo1 = '';
	let numhijo2 = '';
	let gen = '';
	let grupoFam = ''; 
	let numhijos = kids;
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
	}
	grupoFam = parseInt(num_adultos) + parseInt(kids);
	numhijo = parseInt(kids);
	if (age0 <= 35 && age1 <= 35) {
		gen = 'GEN'
	} else {
		gen = ''
	}
	return [num_adultos, numhijo1, numhijo2, numhijos, gen, grupoFam];
};
	function tipoAsociado(tipo, grupo, cant) {
	let tipoAsoc = '';
	if (tipo === "M" && grupo == cant) {
		tipoAsoc = "D";
	} else if (tipo === "I") {
		tipoAsoc = "P"
	};
	return tipoAsoc
}


// <!----------------------Funcion PRODUCT ID SANCOR start---------------------------->     
function productID(edad, tipoAsoc, gen, miembro, numHijos) {
	let edadID = '';
	let grupoSigla = '';
	tipo = tipoAsoc + gen;
	let edadID2 = '';
	if (gen == 'GEN' && numHijos > 0) {
		grupoSigla = 'GF'
	};
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
	} else if (70 <= edad) {
		edadID = '9' + tipo;
		hijoId = '1H' + tipo;
		hijo2Id = '2H' + tipo;
	}
	if (miembro === 'titular') {
		edadID1 = edadID + grupoSigla
	} else {
		edadID2 = edadID + grupoSigla
	};
	return [edadID1, edadID2, hijoId, hijo2Id]
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
	if (anios2 >= 18) {
		grupoSiglaGaleno = 'MAT';
		anios2 = anios2;
		anios = anios;
	}
	if (anios <= 25) {
		edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 25 + '+' + numHijos + 'h';
	} else if (anios <= 36) {
		edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 36 + '+' + numHijos + 'h';
	} else if (anios <= 64) {
		edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 64 + '+' + numHijos + 'h';
	} else if (anios <= 65) {
		edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 65 + '+' + numHijos + 'h';
	};
	return edadIdGaleno
};
// // <!----------------------Funcion PRODUCT ID GALENO end---------------------------->
// // <!----------------------Funcion PRODUCT ID PREMEDIC start----------------------------> 
function productIdPremedic(age_1, age_2, tipoAsoc, numHijos) {
	let edadIdPremedic = '';
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
	} else if (age2 == 0) {
		if (age <= 29) {
			edadIdPremedic = tipoAsoc + 'IND' + 29 + '+0h';
		} else if (age <= 39 && age >= 30) {
			edadIdPremedic = tipoAsoc + 'IND' + 39 + '+0h';
		} else if (age <= 49 && age >= 40) {
			edadIdPremedic = tipoAsoc + 'IND' + 49 + '+0h';
		} else if (age <= 59 && age >= 50) {
			edadIdPremedic = tipoAsoc + 'IND' + 59 + '+0h';
		} else {
			edadIdPremedic = '';
		}
	}
	return edadIdPremedic;
}
// <!----------------------Funcion PRODUCT ID PREMEDIC END---------------------------->    
// <!----------------------Funcion PRODUCT ID OMINT start---------------------------->        
function productIdOmint(anios, tipoAsoc, miembro) {
	let edadID = '';
	let tipo = tipoAsoc;
	let agnos = anios;
	let edadID1OMINT = '';
	let edadID2OMINT = '';
	let hijoIdOMINT = tipo + 'H1';
	let hijo2IdOMINT = tipo + 'H2';
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
	if (miembro === 'titular') {
		edadID1OMINT = edadID
	} else {
		edadID2OMINT = edadID
	};
	return [edadID1OMINT, edadID2OMINT, hijoIdOMINT, hijo2IdOMINT]
};
// <!----------------------Funcion PRODUCT ID OMINT end---------------------------->
// <!----------------------Funcion VALOR DEL PLAN SANCOR start----------------------------> 
	 
	function valorSancorSalud(edad2,kids, precio1Hijo,precio2Hijo,precioTitular,preciosConyuge,numhijo2,tipoIngreso,tipoDeDato,sueldo,aportantes,grupoFam,segvida_1,segvida_2,supra,aficheq,bonAfinidadporcentaje,gen ){
		   
	let precio_adultos_Sancor = {};
	let valor_plan_sancor = {};
	let bonifAportSancor ='';
	let bonifAport = '';
	let aportMonSancor = 1482.63;
	let array = [];

		if (edad2 > 17) {
			precio_adultos_Sancor = Object.entries(preciosConyuge).reduce((acc, [key, value]) => // matrimonio
				({
					...acc,
					[key]: parseInt((acc[key]) || 0) + parseInt(value)
				}), {
					...precioTitular
				});
		} else {
			precio_adultos_Sancor = precioTitular
		}
		if (kids == 1) {
			valor_plan_sancor = Object.entries(precio1Hijo).reduce((acc, [key, value]) => ({
				...acc,
				[key]: parseInt((acc[key]) || 0) + parseInt(value)
			}), {
				...precio_adultos_Sancor
			});
		} else if (kids > 1) {
			precio_hijos = Object.entries(precio2Hijo).reduce((acc, [key, value]) => // dis hijos o mas
				({
					...acc,
					[key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2)
				}), {
					...precio1Hijo
				});
			valor_plan_sancor = Object.entries(precio_hijos).reduce((acc, [key, value]) => ({
				...acc,
				[key]: parseInt((acc[key]) || 0) + parseInt(value)
			}), {
				...precio_adultos_Sancor
			});
		} else {
			valor_plan_sancor = precio_adultos_Sancor;
		}

	//	<!-----------------------Calculo de Aportes SANCOR start------------------------->
		
	if (tipoIngreso == "D") {
						if (tipoDeDato.includes('Sueldo')) {
							bonifAportSancor = sueldo * 0.071;
						} else if (tipoDeDato.includes('Aporte')) {
							bonifAportSancor = sueldo * 2.3666666666666666;
						} else if (document.getElementById("monoadic").checked == true) {
							bonifAportSancor = bonifAportSancor + (aportantes * aportMonSancor);
						};
					} else if (tipoIngreso === "M") {
						bonifAport = aportantes * aportMon;
					} else {
						bonifAportSancor = '';
					};
					
	//	<!-----------------------Calculo de Aportes SANCOR end------------------------->

	//	<!-----------------------Bucle SANCOR start------------------------>							

				 for (j in valor_plan_sancor) {
					
					let otrosBenPrecios = [{"col_1": 1,"SSPRO": 125,"SSOD": 283,"SSAC": 67,"SUF": 28,"CS": 600},{"col_1": 2,"SSPRO": 218,"SSOD": 566,"SSAC": 134,"SUF": 56,"CS": 1200},{"col_1": 3,"SSPRO": 333,"SSOD": 566,"SSAC": 201,"SUF": 84,"CS": 1800}, {"col_1": 4,"SSPRO": 442,"SSOD": 566,"SSAC": 268,"SUF": 112,"CS": 2400}, {"col_1": 5,"SSPRO": 553,"SSOD": 566,"SSAC": 335,"SUF": 140,"CS": 3000}, {"col_1": 6,"SSPRO": 661,"SSOD": 566,"SSAC": 402,"SUF": 168,"CS": 3600}];
					let cuotaSocial = grupoFam * 600;
					let segVidaPrecio = [{"col_1": '18 A 45',"col_2": 441},{"col_1": '46 A 54',"col_2": 686},{"col_1": '55 A 59',"col_2": 686}];
					let segVidacheck = segvida_1;
					let segVida2check = segvida_2;					    
					let segVida = 0;
					let segVida1 = 0;						
					let precio_final_a_pagar = 0;
					let segVidaTotal = '';
					let valor_total_plan = 0;
					let descAportes = bonifAport;
					let afiche = aficheq;
					let bonAf = bonAfinidadporcentaje;
					let bonAfinidadMonto = '';
					let precioPlan = 0;						
					var precioString = JSON.stringify(valor_plan_sancor);
					var precioParse = JSON.parse(precioString);
					let supras = supra;
					let arrPlan = [];
					let todosPrecios = [];
					let empresaPlan = [j][0];
					let plan_id = empresaPlan.substring(0, 4);
					let empresa = empresaPlan.substring(5, 11);
					let plan_nombre = empresaPlan.substring(10);
					let plan_gen = empresaPlan.substring(10, 13);
					let bonInscr = parseInt(valor_plan_sancor[j]) * 0.1;
					let otrosBen = 0;
					let bonAfinidad = 0;

					function adPlan(planName, valor_plan_sancor) {
						arrPlan.push(planName);
						todosPrecios.push(valor_plan_sancor);					 
					}
					
				//	<!--------------------Bonificacion Afinidad SANCOR start--------------------------->		

						if (afiche == true) {
							bonAfinidad = parseInt(valor_plan_sancor[j]) * bonAf;
							bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());
						} else {
							bonAf = '';
						}
				//	<!--------------------Bonificacion Afinidad SANCOR end--------------------------->
	
				//	<!--------------------Seguro SANCOR start---------------------------------------->

						cuotaSocial = otrosBenPrecios[grupoFam - 1]['CS'];
				
				//	<!--------------------Seguro SANCOR end------------------------------------------>
						
				//	<!--------------------Supras SANCOR start---------------------------------------->		
						
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
						}
				//	<!--------------------Supras SANCOR end----------------------------------------->		

				//	<!--------------------Seguro SANCOR start--------------------------------------->
	
						if (segVidacheck == true) {
							if (edad1 >= 18 && edad1 <= 45) {
								segVida = segVidaPrecio[0]['col_2']
							} else if (edad1 >= 46 && edad1 <= 54) {
								segVida = segVidaPrecio[1]['col_2']
							} else {
								segVida = segVidaPrecio[2]['col_2']
							};
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
						}
						segVidaTotal = segVida + segVida1;

				//	<!--------------------Seguro SANCOR end--------------------------------------->

						valor_total_plan = parseInt(valor_plan_sancor[j]) + parseInt(cuotaSocial) + parseInt(otrosBen) + parseInt(segVidaTotal) - parseInt(bonAfinidad.toFixed());
						
						precioPlan = parseInt(valor_plan_sancor[j]) + parseInt(cuotaSocial);

				//	<!--------------------Bonificacion Aportes SANCOR start--------------------------->							
						if (tipoIngreso === "M" || tipoIngreso === "D") {
							precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(descAportes);
							bonifAport = '- ' + parseInt(bonifAportSancor);
						} else if (tipoIngreso === "I") {
							precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonInscr);
							bonifAport = bonInscr;
							textoAportesOS = 'Bonif. RI :'
						} else {
							precio_final_a_pagar = valor_total_plan;
						}
				//	<!--------------------Bonificacion Aportes SANCOR end--------------------------->	

				//	<!--------------------Nombre del Plan SANCOR start------------------------------>						
						if (gen === 'GEN' && plan_gen >= 100 && plan_gen <= 450) {
							plan_nombre = 'GEN' + plan_nombre;
						} else {
							plan_nombre = plan_nombre;
						};
				//	<!--------------------Nombre del Plan SANCOR end------------------------------>		

						adPlan('SanCor Plan '+plan_nombre, precio_final_a_pagar);
				//	<!--------------------Crear Objeto SANCOR end------------------------------>																            
					
				
				var plan = new Object();
				             plan.id = plan_id
							if(plan_nombre.includes(5000) || plan_nombre.includes(6000)){
								plan.name = 'Exclusive ' + plan_nombre;
							
							} else {
								plan.name = 'SanCor ' + plan_nombre;
							}
							

													 
                            
							
							plan.precio = precio_final_a_pagar;
							// plan.empresa = empresa;
							// plan.precio = precioPlan;
							// plan.boniafi = bonAfinidadMonto;
							// plan.boniaport = bonifAport;
							array.push(plan);
							let arrayLength = arrPlan.length;
							let precioLength = Object.keys(valor_plan_sancor).length;
	
							function returnArray(array, precio, arrayPlanes) {
								if (array == precio) {
									return (arrayPlanes)
								}
							}
							returnArray(arrayLength, precioLength, array);
						}
			 //	<!-----------------------Bucle SANCOR end------------------------>							
						var precioString = JSON.stringify(array);
						var precioParse = JSON.parse(precioString);
						return array
							
	}
// <!----------------------Funcion VALOR DEL PLAN SANCOR end----------------------------> 

// <!----------------------Funcion VALOR DEL PLAN PREMEDIC start----------------------------> 
	function valorPremedic(edad2, numHijo, valorAdultosPremedic, preciohm25, preciohm1, edadIdPremedic,afiche,bonAf,tipoIngreso) {
		  let valor_plan_premedic = {};
		let valor_total_plan = 0;
		let bonifAportPremedic ='';
		let bonifAport = '';

		let bonAfinidadMonto = '';
		let precioPlan = 0;						
		var precioString = JSON.stringify(valor_plan_premedic);
		var precioParse = JSON.parse(precioString);
		let arrPlan = [];
		let todosPrecios = [];
		let empresaPlan = [j][0];
		let aportMonPremedic = 1579;
		
		let array = [];
		if (edadIdPremedic.includes('I') == true) {
			valor_plan_premedic = Object.entries(preciohm25).reduce((acc, [key, value]) => // dis hijos o mas
				({
					...acc,
					[key]: parseInt((acc[key]) || 0) + parseInt(value * numHijo)
				}), {
					...valorAdultosPremedic
				});
		} else {
			valor_plan_premedic = valorAdultosPremedic;
		}
				//	<!-----------------------Calculo de Aportes PREMEDIC start------------------------->
				if (tipoIngreso == "D") {
					if (tipoDeDato.includes('Sueldo')) {
						bonifAportPremedic = sueldo * 0.0765;
					} else if (tipoDeDato.includes('Aporte')) {
						bonifAportPremedic = sueldo * 2.55;
					} else if (document.getElementById("monoadic").checked == true) {
						bonifAportPremedic = bonifAportPremedic + (aportantes * aportMonPremedic);
					};
				} else if (tipoIngreso === "M") {
					bonifAportPremedic = aportantes * aportMonPremedic;
				} else {
					bonifAportPremedic = '';
				};
		//	<!-----------------------Calculo de Aportes PREMEDIC end------------------------->

		//	<!-----------------------Bucle PREMEDIC start------------------------>

	
		for (j in valor_plan_premedic) {
			let precioPlan = parseInt(valor_plan_premedic[j]*1.1134);
			
			let empresaPlan = [j][0];
			let plan_id = empresaPlan.substring(0, 4);
			let empresa = empresaPlan.substring(4, 10);
			let plan_nombre = empresaPlan.substring(10);
			let bonAfinidad = 0;

			function adPlan(planName, valor_plan_sancor) {
				arrPlan.push(planName);
				todosPrecios.push(valor_plan_sancor);					 
			}

		//	<!--------------------Bonificacion Afinidad PREMEDIC start--------------------------->
					
			if (afiche == true) {
				bonAfinidad = parseInt(valor_plan_premedic[j]) * bonAf;
				bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());
				valor_total_plan = parseInt(valor_plan_premedic[j]*1.1134) - parseInt(bonAfinidad.toFixed());
				} else {
				bonAf = '';
			}

		//	<!--------------------Bonificacion Afinidad PREMEDIC end--------------------------->

		//	<!--------------------Bonificacion Aportes PREMEDIC start--------------------------->			

		if (tipoIngreso === "M" || tipoIngreso === "D") {
			bonAfinidad = '';
			bonifAport = '-' + parseInt(bonifAportPremedic);
			precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportPremedic);
		} else {
			precio_final_a_pagar = valor_total_plan;
		}

		//	<!--------------------Bonificacion Aportes PREMEDIC end--------------------------->		

				
		precioPlan = parseInt(valor_plan_premedic[j]*1.1134);
		valor_total_plan = parseInt(valor_plan_premedic[j]*1.1134);

		adPlan('Premedic Plan '+plan_nombre, precio_final_a_pagar);

		var plan = new Object();
		                    plan.id = plan_id;
		                    plan.name = 'Premedic ' + plan_nombre;
							plan.precio = precio_final_a_pagar;
							// plan.empresa = empresa;
							// plan.precio = precioPlan;
							// plan.boniafi = bonAfinidadMonto;
							// plan.boniaport = bonifAport;
							array.push(plan);
							let arrayLength = arrPlan.length;
							let precioLength = Object.keys(valor_plan_premedic).length;
				
							function returnArray(array, precio, arrayPlanes) {
								if (array == precio) {
									return (arrayPlanes)
								}
							}
							returnArray(arrayLength, precioLength, array);
						}
		//	<!-----------------------Bucle PREMEDIC end------------------------>								
		   
				return array
	}				

// <!----------------------Funcion VALOR DEL PLAN PREMEDIC end---------------------------->  	

   // <!----------------------Funcion VALOR DEL PLAN OMINT start----------------------------> 
	function valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edad_ID1OMINT) {
		let edadID1OMINT = edad_ID1OMINT;
		let valor_plan_omint = {};
		if (edad2 > 17) {
			precio_adultos_Omint = Object.entries(precio_conyuge_Omint).reduce((acc, [key, value]) => // matrimonio
				({
					...acc,
					[key]: parseInt((acc[key]) || 0) + parseInt(value)
				}), {
					...precio_titular_Omint
				});
		} else {
			precio_adultos_Omint = precio_titular_Omint
		}
		if (numHijos == 1) {
			valor_plan_omint = Object.entries(precio_hijo1_Omint).reduce((acc, [key, value]) => ({
				...acc,
				[key]: parseInt((acc[key]) || 0) + parseInt(value)
			}), {
				...precio_adultos_Omint
			});
		} else if (numHijos > 1) {
			precio_hijos_Omint = Object.entries(precio_hijo2_Omint).reduce((acc, [key, value]) => // dis hijos o mas
				({
					...acc,
					[key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2)
				}), {
					...precio_hijo1_Omint
				});
			valor_plan_omint = Object.entries(precio_hijos_Omint).reduce((acc, [key, value]) => ({
				...acc,
				[key]: parseInt((acc[key]) || 0) + parseInt(value)
			}), {
				...precio_adultos_Omint
			});
		} else {
			valor_plan_omint = precio_adultos_Omint;
		};
		if (edadID1OMINT.includes('P') == true) {
			valor_plan_omint = valor_plan_omint
		}
		//	<!-----------------------Bucle PREMEDIC end------------------------>
		
		return valor_plan_omint

	}
// <!----------------------Funcion VALOR DEL PLAN OMINT end----------------------------> 


 
// function combinePlansWithPrices(planes, precios) {
// 	const combinedArray = [];

// 	planes.forEach((plan) => {
// 		console.log(plan)

// 	  const matchingPrecio = precios.find((precio) => precio.item_id === plan.item_id);
// 	  if (matchingPrecio) {
// 		// Combina todas las propiedades de planes y precios en un nuevo objeto
// 		const combinedPlan = {
// 		  ...plan,
// 		  ...matchingPrecio,
// 		};
// 		console.log(combinedPlan)

// 		// Agrega el objeto combinado al array resultado
// 		combinedArray.push(combinedPlan);
// 	  }
// 	});
  
// 	return combinedArray;
//   }
  
  
// export {combinePlansWithPrices}

  
  
 

							

							
				
					
							
					