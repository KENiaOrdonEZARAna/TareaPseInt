//cantidad de positivos, negativos y neutros 
//entrada: ingresar las variables 
//proceso:resolver los algoritmos
//salida: respuestas del Algoritmo 

	proceso conteos
		
	//definir las variables	
	definir num,i como entera
	definir conteo_positivo,conteo_negativo,conteo_neutro como entero
	
	
	//calcular las variables
	conteo_positivo <- 0
	conteo_negativo <- 0
	conteo_neutros <- 0
	Para i<-1 Hasta 10 Hacer
	
	FinPara
	Escribir i,".Digite un numero: "
	Leer num
	Si num=0 Entonces
		conteo_neutro <- conteo_neutro+1
	SiNo
		Si num>0 Entonces
			conteo_positivo <- conteo_positivo+1
		SiNo
			conteo_negativo <- conteo_negativo+1
		FinSi
		
		//Respuestas del Algoritmo 
		Escribir "La cantidad de positivos es: ", conteo_positivos
		Escribir "La cantidad de negativos es: ",contep_negativos
		Escribir "La cantidad de neutros es: ", conteo_neutros
	FinSi
FinProceso

