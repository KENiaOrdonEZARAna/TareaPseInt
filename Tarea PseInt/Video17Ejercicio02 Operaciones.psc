//Ejercicio2
//Entrada: ingresar los valores de a y b 
//proceso: calcular los valores de a y b ((3+5*8)<3) y((-6/3*4)+2<2) o(a>b)
//salida: obtener los resultado de a y b 

proceso Principal 
	Definir a,b Como Reales; 
	Definir resultado Como Logico;
	
	Escribir "Ingrese el valor de a: ";
	Leer a; 
	Escribir "Ingrese el valor de b: "; 
	Leer b; 
	
	resultado<-((3+5*8)<3) y((-6/3*4)+2<2) o(a>b);
	
	Escribir "El resultado es: ", resultado 
	
FinProceso

		
