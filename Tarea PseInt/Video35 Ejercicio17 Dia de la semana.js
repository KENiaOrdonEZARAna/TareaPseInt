// Elabora un programa que muestre los dia de la semana
// Entrada: ingresar las variables para saber el dia de la semana 
// proceso: RESOLVER EL ALGORITMO 
// Salida:Resultado 

const leer=require() ('prompt sync')()
const escribir=console()

class dia_semana {
dia_semana(){

	function dia_semana() {
	// definir las variables 
	var num = new Number();
	escribir.log("Digite un numero del dia de la semana(1-7): ",'<BR/>');
	num = Number(prompt());
	// calcular las variables 
	switch (num) {
	case 1:
		escribir.log("Lunes",'<BR/>');
		break;
	case 2:
		escribir.log("Martes",'<BR/>');
		break;
	case 3:
		escribir.log("Mi�rcoles",'<BR/>');
		break;
	case 4:
		escribir.log("Jueves",'<BR/>');
		break;
	case 5:
		escribir.log("Viernes",'<BR/>');
		break;
	case 6:
		escribir.log("Sabado",'<BR/>');
		break;
	case 7:
		escribir.log("Domingo",'<BR/>');
		break;
	default:
		escribir.log("Error, no existe dia",'<BR/>');
	}
}
}
}
const ejer=new dia_semana()
ejer.dia_semana()