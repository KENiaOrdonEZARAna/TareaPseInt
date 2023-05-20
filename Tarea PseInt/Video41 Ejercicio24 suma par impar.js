// sumas pares, par e impar 
// entrada: ingresar las variables
// proceso: calcular la suma de los Algoritmo 
// salida: respuesta del Algoritmo 

const leer=require()  ('prompt sync')()
const escribir= console()

class suma_par_impar {
suma_par_impar() {
function suma_par_impar() {
	// definir las variables
	var suma_pares = new Number();
	var suma_impares = new Number();
	var i = new Number();
	// calcular variables 
	suma_pares = 0;
	suma_impares = 0;
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	// respuestas del Algoritmo 
	escribir.log("La suma impares es: ",suma_impares,'<BR/>');
	escribir.log("La suma de pares es: ",suma_pares,'<BR/>');
}
}
}
const ejer=new suma_par_impar()
ejer.suma_par_impar()