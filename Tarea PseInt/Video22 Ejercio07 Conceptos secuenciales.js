

// Calcular la cantidad de seg que estan incluidos en el num de hrs, min y seg ingresados por el usuario
// Entrada: saber la cantidad de num,horas y seg 
// Proceso: calcular los num,horas y seg
// Salida: Resultado 

const leer=require() ('prompt sync')()
const escribir= console()

class conceptos_secuenciales {
	conceptos_secuenciales () {

function conceptos_secuenciales() {
	var segu, total_seg;
	// Definir las variables
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	document.write("Digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("Digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	escribir.log("Digite los segundos: ",'<BR/>');
	segu = prompt();
	// Variables
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	// Resultado
	escribir.log("Los segundos equivalentes son: ",total_seg,'<BR/>');
}
	}
}
const ejer=new conceptos_secuenciales()
ejer.conceptos_secuenciales()