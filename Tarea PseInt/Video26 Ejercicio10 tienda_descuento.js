// Una tienda ofrece un 15 MOD  de descuento sobre rl total de la compra
// Entrada: ingresar los valores para el descuento del algoritmo
// Proceso: calcular el descuento del algoritmo
// Salida: resultado del Algoritmo 

const leer=require() ('prompt sync')()
const escribir=console()

class tienda_descuento {
tienda_descuento(){
function tienda_descuento() {
	// Ingresar la variables
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	escribir.log("Digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	// Calcular las variables
	descuento = precio*0.15;
	precio_final = precio-descuento;
	// Resultado de las variables
	escribir.log("El precio a pagar es: ",precio_final,'<BR/>');
}
}
}
const ejer= new tienda_descuento()
ejer.tienda_descuento()