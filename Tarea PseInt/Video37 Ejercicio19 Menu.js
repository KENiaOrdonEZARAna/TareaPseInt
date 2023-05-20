// crear un menu, elvar un numero a la potencia x
// entrada: ingresar las variables 
// proceso: calcular las variables 
// salida: respuesta del algoritmo 

const leer=require() ('prompt sync')()
const escribir=console()

class menu{
menu(){
function menu() {
	var opcion, opci�n;
	// definir las variables 
	escribir.log("Menu",'<BR/>');
	escribir.log("1. Elevar un numero a la potencia x",'<BR/>');
	escribir.log("2. sacar la raiz cuadrada de un numero",'<BR/>');
	escribir.log("3.salir",'<BR/>');
	escribir.log("Digite una opci�n",'<BR/>');
	opcion = prompt();
	// Calcular el Algoritmo 
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		escribir.log("Digite un numero",'<BR/>');
		num = Number(prompt());
		escribir.log("Digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		escribir.log("El resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		escribir.log("Digite un numero",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		escribir.log("El resultado es: ",resultado,'<BR/>');
		break;
	default:
		escribir.log("Opci�n incorrecta",'<BR/>');
	}
}
}
}
const ejer=new menu
ejer.menu