//Ejercicio3
//Entrada: encontrar el valor de a y b 
//proceso: calcular el valor de ambos valores
//salida: respuesta


proceso Intercambio_valor
	Definir a,b,aux Como Enteros; 
	//Ingresar las variables 
	Escribir "Ingrese el valor de a: "; 
	Leer a; 
	Escribir "Ingrese el valor de b: "; 
	Leer b; 
	//resolver 
	aux<- a; 
	a<- b; 
	b<- aux; 
	//resultado 
	Escribir "El nuevo valor de a es: ",a; 
	Escribir "El nuevo valor de b es: ",b; 
FinProceso

