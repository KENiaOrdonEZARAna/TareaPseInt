// Conocer la calificacion de los alumnos 
// entrada: ingresar las variables del Algoritmo 
// proceso: calcular las calificaciones del algoritmo 
// salida: resultado del Algoritmo 

const leer=require()('prompt sync')()
const escribir=console()

class califi {
califi() {
function califi() {
	// definir las variables 
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	// calcular las variables
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		escribir.log(i,".Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	// respuestas 
	escribir.log("La clificacion promedio es: ",calificacion_promedio,'<BR/>');
	escribir.log("La calificacion baja es: ",calificacion_baja,'<BR/>');
}
}
}
const ejer=new califi()
ejer.califi