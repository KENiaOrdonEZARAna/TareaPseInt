// Cuanto cuesta el kilo de manzanas y cuantos kilos de manzana ha comprado
// entrada: ingresar las variables del Algoritmo 
// proceso: calcular las variables
// salida: el resultado del Algoritmo 

const leer=require() ('prompt sync')()
const escribir=console()

class kilos_manzanas {
kilos_manzanas(){

	function kilos_manzanas() {
	var precio;
	// Variables del algoritmo 
	var preciok = new Number();
	var kilos = new Number();
	var precioi = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	escribir.log("Cuanto cuenta el kilo de manzana? ",'<BR/>');
	preciok = Number(prompt());
	escribir.log("Cuantos kilos de manzana a comprado?",'<BR/>');
	kilos = Number(prompt());
	// calcular la variable 
	precioi = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (kilos>=2.01 && kilos<=5) {
			descuento = precioi*0.1;
		} else {
			if (kilos>=5.01 && kilos<=10) {
				descuento = precioi*0.15;
			} else {
				descuento = precio*0.2;
			}
		}
	}
}
}
}