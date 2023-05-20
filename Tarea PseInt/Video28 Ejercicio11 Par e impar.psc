// Saber un numero es  Par o impar
//Entrada:Ingresar las variables
//Proceso: procesar las variables del Algoritmo 
//Salida: El resultado del Algoritmo 

Proceso    par_impar
	
	//Ingresar las variables
	
	Definir num Como Entero;
	Escribir "Digite un numero: ";
	Leer num
	
	//Resolver las variables
	
	si num mod 2=0 Entonces
		Escribir "El numero ", num, " es par";
	SiNo
		Escribir "El numero ", num," es impar";
	FinSi
	
FinProceso


