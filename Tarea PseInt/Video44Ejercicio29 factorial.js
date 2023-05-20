// factorial de un numero 
// Entrada: ingresar la variable
// proceso: calcular las variables del Algoritmo 
// salida: resultado

const leer=require()('prompt sync')()
const escribir=console()

class facto {
facto() {
function facto() {
	// definir las variables 
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	// calcular las variables
	do {
		escribir.log("Digite un numero",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	while (i<=num) {
		factorial = factorial*1;
		i = i+1;
	}
	// resultados 
	escribir.log("El factorial es: ",factorial,'<BR/>');
}
}
}
const ejer=new facto()
ejer.facto()