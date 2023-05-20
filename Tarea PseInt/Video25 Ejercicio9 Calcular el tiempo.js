// Entrada: Define las cantidades de las variables
// proceso: calcular las variables
// Salida: El resultado de las variables 

const leer=require() ('prompt sync')()
const escribir=console()

class calcular_tiempo {
calcular_tiempo(){
function calcular_tiempo() {
	var horas, minutos, tiempoa, tiempob, tiempoc, tiempo_total;
	// define las variables
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	escribir.log("Digite la cantidad de cuestionarioA: ",'<BR/>');
	cantidada = Number(prompt());
	escribir.log("Digite la cantidad de cuestionarioB: ",'<BR/>');
	cantidadb = Number(prompt());
	escribir.log("Digite la cantidad de cuestionarioC: ",'<BR/>');
	cantidadc = Number(prompt());
	// Calcular las variables
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	tiempo_total = tiempoa+tiempob+tiempoc;
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	// Resultado del algotirmo  
	escribir.log("Se tardara",horas,"horas y ",minutos,"minutos",'<BR/>');
}
}
}
const ejer= new calcular_tiempo()
ejer.calcular_tiempo()