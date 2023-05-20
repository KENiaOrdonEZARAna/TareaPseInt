//Conocer la calificacion de los alumnos 
//entrada: ingresar las variables del Algoritmo 
//proceso: calcular las calificaciones del algoritmo 
//salida: resultado del Algoritmo 


  Proceso   califi 
	  
	  //definir las variables 
	  Definir calificacion_promedio,calificacion_baja Como Real; 
	Definir calificacion,suma Como Real;
	Definir i Como Entero;
	
	
	//calcular las variables
	suma<-0;
	calificacion_baja<-99999
	
	para i<-1 hasta 10 con paso 1 hacer 
	
	Escribir i,".Digite una calificacion: ";
	Leer calificacion 
	
	suma<-suma+calificacion;
	si calificacion<calificacion_baja Entonces
		calificacion_baja<-calificacion;
	FinSi
FinPara

calificacion_promedio<-suma/10;


//respuestas 
Escribir "La clificacion promedio es: ", calificacion_promedio
Escribir "La calificacion baja es: ", calificacion_baja
FinProceso

