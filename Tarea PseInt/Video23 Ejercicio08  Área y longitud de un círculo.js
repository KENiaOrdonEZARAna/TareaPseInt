// Hacer un programa para ingresar el radio  de un circulo y se reporte su �rea y la longitud de la circunferencia
// area=pi*radio^2
// longitud=2*pi*radio
// Entrada: Ingresar el radio de un circulo, circunferencia y la longuitud
// Proceso: calcular las variables
// Salida: resultado del algoritmo 

const leer= require() ('prompt sync')()
const escribir= console()
class calcular{
calcular() {

	function calcular() {
	var pi;
	// Definir las variables
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	escribir.log("Digite el valor del radio: ",'<BR/>');
	radio = Number(prompt());
	// Variables
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	// Resultado
	escribir.log("El area de la circunferencia es: ",area,'<BR/>');
	escribir.log("La longitud es: ",lon,'<BR/>');
}
}
}
const ejer= new calcular()
ejer.calcular()