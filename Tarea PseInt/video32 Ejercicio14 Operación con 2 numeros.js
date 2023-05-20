// La resta o suma de los numeros
// Entrada: Ingresa las variables del Algoritmo 
// Proceso: calcular las variables del Algoritmo 
// Salida:resultado del algoritmo 

const leer=require() ('prompt sync')()
const escribir=console()

class suma_resta {
suma_resta(){
function suma_resta() {
	var resultado;
	// Definir las variables 
	var num1 = new Number();
	var num2 = new Number();
	escribir.log("digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	// Proceso del Algoritmo 
	if (num1==num2) {
		resultado = num1-num2;
	} else {
		resultado = num1*num2;
		if (num1>num2) {
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	// resultado
	escribir.log("El resultado es: ",resultado,'<BR/>');
}
}
}
const ejer=new suma_resta()
ejer.suma_resta()