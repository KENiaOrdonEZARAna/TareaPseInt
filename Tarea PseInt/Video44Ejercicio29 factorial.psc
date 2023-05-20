// factorial de un numero 
// Entrada: ingresar la variable
// proceso: calcular las variables del Algoritmo 
// salida: resultado
Proceso   facto
	
	//definir las variables 
	Definir num Como Entero
	definir i, factorial como enteros
	
	//calcular las variables
	Repetir
		Escribir 'Digite un numero'
		Leer num
	Hasta Que num>=0
	i <- 1
	factorial <- 1
	Mientras i<=num Hacer
		factorial <- factorial*1
		i <- i+1
	FinMientras
	
	//resultados 
	Escribir "El factorial es: ",factorial
FinProceso

