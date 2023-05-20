// suma de los elementos 
// entrada:ingresar las variables del algoritmo 
// proceso: calcular las variables
// salida: resultado

const leer=require()('prompt sync')()
const escribir=console()

class elementos_suma {
elementos_suma() {
function elementos_suma() {
	// definir las variables
	var n_elementos = new Number();
	var i = new Number();
	var suma = new Number();
	escribir.log("Ingrese la cantidad e los elementos al sumarse ",'<BR/>');
	n_elementos = Number(prompt());
	// calcular las variables
	i = 1;
	suma = 0;
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2);
		i = i+1;
		// resultado
		escribir.log("La suma es: ",suma,'<BR/>');
	}
}
}
}
const ejer=new elementos_suma()
ejer.elementos_suma()