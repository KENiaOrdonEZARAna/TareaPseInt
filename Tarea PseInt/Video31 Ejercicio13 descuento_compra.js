// Si la compra es mayor a 100 entonces si hay descuento
// Entrada: Ingresar las variables del Algoritmo 
// Proceso: Calcular las para saber si hay descuento en la compra 
// Salida: El resultado del Algoritmo 

const leer=require() ('prompt sync')()
const escribir=console()

class comprar_descuento {
comprar_descuento(){
function comprar_descuento() {
	var precio_final;
	// Definir las variables
	var compra = new Number();
	var descuento = new Number();
	var compra_final = new Number();
	escribir.log("Ingrese la cantidad a pagar",'<BR/>');
	compra = Number(prompt());
	// Calcular la variable del algoritmo 
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	// Resultado 
	escribir.log("El precio a pagar es de: ",precio_final,'<BR/>');
}
}
}
const ejer=new comprar_descuento()
ejer.comprar_descuento()