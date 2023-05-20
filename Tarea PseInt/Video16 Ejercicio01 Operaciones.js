// Ejercicio1
// entrada: ingresar los valores de a,b,c 
// proceso: calcular las variables del algoritmo -b+rc (b^2-4*a*c))/(2*a)
// salida: resultado

const leer=require () ('prompt sync')()
const escribir= console()
class operaciones {
operaciones()  {

	function operaciones() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
	escribir.log("Ingrese el valorde A: ",'<BR/>');
	a = Number(prompt());
	escribir.log("Ingrese el valor de B: ",'<BR/>');
	b = Number(prompt());
    escribir.log("Ingrese el valor de C: ",'<BR/>');
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	escribir.log("El resultado es: ",resultado,'<BR/>');
}

}
}
const ejer= new operaciones ()
ejer.operaciones