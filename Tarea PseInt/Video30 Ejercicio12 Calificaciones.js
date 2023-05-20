// Definir las calificaciones, alumnos de aprobado y no aprobado
// Entrada: Ingresar las calificaciones
// Proceso: calcular las variables
// Salida: El resultado de las variables

const leer=require() ('prompt sync')()
const escribir=console()

class calificaciones {
calificaciones(){

	function calificaciones() {
	// Definir las variables del Algoritmo 
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	escribir.log("Ingrese las tres notas",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	// Procedimiento, calcular 
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>-70) {
		escribir.log("El alumno est� aprobado con: ",promedio,'<BR/>');
	} else {
		escribir.log("El almno est� desaprobado con: ",promedio,'<BR/>');
	}
}
}
}
const ejer=new calificaciones()
ejer.calificaciones()