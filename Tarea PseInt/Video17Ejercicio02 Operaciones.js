// Ejercicio2
//Entrada: ingresar los valores de a y b 
//proceso: calcular los valores de a y b ((3+5*8)<3) y((-6/3*4)+2<2) o(a>b)
//salida: obtener los resultado de a y b 

const leer=requiere ('prompt sync')()
const write=console

class principal {
principal() {

	//Variables

	var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
//ingresar variables
	escribir.log("Ingrese el valor de a: ",'<BR/>');
	a = Number(prompt());

	escribir.log("Ingrese el valor de b: ",'<BR/>');
	b = Number(prompt());
	
	//Calcular
	resultado = ((3+5*8)<3) && ((-6/3*4)+2<2) || (a>b);

	escribir.log ("El resultado es: ",resultado,'<BR/>');
}
}

const ejer=new principal()
ejer.principal()