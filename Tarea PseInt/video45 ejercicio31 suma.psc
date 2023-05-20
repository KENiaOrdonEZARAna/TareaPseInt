//suma de los elementos 
//entrada:ingresar las variables del algoritmo 
//proceso: calcular las variables
//salida: resultado



Proceso   elementos_suma
	
	//definir las variables
	definir n_elementos como entero
	definir i,suma como enteros
	Escribir "Ingrese la cantidad e los elementos al sumarse "
	Leer n_elementos
	
	//calcular las variables
	i <- 1
	suma <- 0
	Mientras i<=n_elementos Hacer
		suma <- suma+i^2
		i <- i+1
		
		//resultado
		Escribir "La suma es: ",suma
	FinMientras
FinProceso

