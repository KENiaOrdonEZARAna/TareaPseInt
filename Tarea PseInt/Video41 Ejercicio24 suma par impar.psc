// sumas pares, par e impar 
// entrada: ingresar las variables
// proceso: calcular la suma de los Algoritmo 
// salida: respuesta del Algoritmo 

proceso  suma_par_impar
	
	//definir las variables
	definir suma_pares,suma_impares, i como entero
	
	//calcular variables 
	suma_pares <- 0
	suma_impares <- 0
	
	Para i<-2 Hasta 49 Hacer
		Si i MOD 2=0 Entonces
			suma_pares <- suma_pares+i
		SiNo
			suma_impares <- suma_impares+i
		FinSi
	FinPara
	
	//respuestas del Algoritmo 
	Escribir "La suma impares es: ",suma_impares
	Escribir "La suma de pares es: ",suma_pares
	
FinProceso

