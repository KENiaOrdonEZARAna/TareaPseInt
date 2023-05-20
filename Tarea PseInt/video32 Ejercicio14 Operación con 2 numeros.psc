
//La resta o suma de los numeros
//Entrada: Ingresa las variables del Algoritmo 
//Proceso: calcular las variables del Algoritmo 
//Salida:resultado del algoritmo 


Proceso   Suma_resta
	
	//Definir las variables 
	
	Definir num1,num2 Como Reales;
	
	Escribir "digite dos numeros: ";
	Leer num1,num2; 
	
	//Proceso del Algoritmo 
	
	si num1=num2 Entonces
		
		resultado<-num1-num2;
	SiNo
		resultado<-num1*num2;
	 
		si num1>num2 entonces
			
			resultado<-num1-num2
		SiNo
			resultado<-num1+num2 
		FinSi
		
	FinSi
	
	//resultado
	
	Escribir "El resultado es: ", resultado

FinProceso

