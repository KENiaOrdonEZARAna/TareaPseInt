// cantidad de positivos, negativos y neutros 
// entrada: ingresar las variables 
// proceso:resolver los algoritmos
// salida: respuestas del Algoritmo 

const leer=require()('prompt sync')()
const escribir=console()

class conteos{
conteos(){
function conteos() {
	var conteo_neutros, conteo_positivos, contep_negativos;
	// definir las variables 
	var num = new Number();
	var i = new Number();
	var conteo_positivo = new Number();
	var conteo_negativo = new Number();
	var conteo_neutro = new Number();
	// calcular las variables
	conteo_positivo = 0;
	conteo_negativo = 0;
	conteo_neutros = 0;
	for (i=1;i<=10;i++) {
	}
	escribir.log(i,".Digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num==0) {
		conteo_neutro = conteo_neutro+1;
	} else {
		if (num>0) {
			conteo_positivo = conteo_positivo+1;
		} else {
			conteo_negativo = conteo_negativo+1;
		}
		// Respuestas del Algoritmo 
		escribir.log("La cantidad de positivos es: ",conteo_positivos,'<BR/>');
		escribir.log("La cantidad de negativos es: ",contep_negativos,'<BR/>');
		escribir.log("La cantidad de neutros es: ",conteo_neutros,'<BR/>');
	}
}
}
}
const ejer=new conteos()
ejer.conteos()