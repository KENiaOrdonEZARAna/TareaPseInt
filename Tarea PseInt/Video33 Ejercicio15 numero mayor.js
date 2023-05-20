// Encontrar el numero mayor de los tres
// Entrar:Digitar la variable del Algoritmo 
// Proceso: calcular las varibles del Algoritmo 
// Salida: Resultado de las variables 

const leer=require() ('prompt sync')()
const escribir= console()

class num_mayor  {
	num_mayor() {

function num_mayor() {
	// Definir las variables
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	escribir.log("Digite tres numeros",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	// Ralcular/resultado 
	if (num1>num2 && num1>num3) {
		document.write("El mayor es: ",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			escribir.log("El mayor es: ",num2,'<BR/>');
		} else {
			escribir.log("El mayor es: ",num3,'<BR/>');
		}
	}
}
	}
}
const ejer=new num_mayor()
ejer.num_mayor()