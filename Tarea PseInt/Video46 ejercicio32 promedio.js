// suma_pares,suma_impares,suma
// entrada: ingresar las variable del Algoritmo 
// proceso: calcular las variables del Algoritmo 
// salir:  resultado de las variables

const leer=require()('prompt sync')()
const escribir=console()

class solosuma{
	solosuma(){
function solosuma() {
	var i, num, promedio_impar, suma_impares;
	// definr las variables
	var n_elementos = new Number();
	var suma_pares = new Number();
	var conteo_pares = new Number();
	var sumas_impares = new Number();
	var conteo_impares = new Number();
	var promedio = new Number();
	escribir.log("Digite la cantida de elementos a ingresar ",'<BR/>');
	n_elementos = Number(prompt());
	// calcular las variables
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	sumas_impares = 0;
	conteo_impares = 0;
	while (i<=n_elementos) {
		escribir.log(i,".Digite un numero",'<BR/>');
		num = Number(prompt());
		i = i+1;
		if (num%2==0) {
			suma_pares = suma_pares+num;
			conteo_pares = conteo_pares+1;
		} else {
			sumas_impares = sumas_impares+num;
			conteo_impares = conteo_impares+1;
		}
	}
	// resultados
	if (conteo_pares==0) {
		escribir.log("No se han digitado numeros pares",'<BR/>');
	} else {
		escribir.log("La suma de los numeros pares es: ",suma_pares,'<BR/>');
		escribir.log("El conteo de los conteo pares es: ",conteo_pares,'<BR/>');
	}
	if (conteo_impares==0) {
		escribir.log("No se han digitado impares: ",'<BR/>');
	} else {
		promedio_impar = suma_impares/conteo_impares;
		escribir.log("El promedio impar es: ",promedio_impar,'<BR/>');
	}
}
	}
}
const ejer=new solosuma()
ejer.solosuma()