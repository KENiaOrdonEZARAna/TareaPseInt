//Sumarse la cantidad de ccierto digito 
//entrada:ingresar la variable del Algoritmo 
//proceso: calcular las variables
//salida:resultado del algoritmo 


Proceso  sumas 
	
	//ingresar las variables
	
	Definir n,suma,i Como Entero;
	Escribir "digite la cantidad de numeros a sumarse : ";
	Leer n;
	
	//calcular las variables
	
	suma<-0; 
	
	para i<-1 Hasta n Con Paso 1 Hacer
	suma <-suma+i;
FinPara

//resultados

Escribir "La suma es: ",suma;
FinProceso

