
//Entrada: Define las cantidades de las variables
//proceso: calcular las variables
//Salida: El resultado de las variables 



     Proceso   calcular_tiempo
		 
	//define las variables
    Definir cantidadA,cantidadB,cantidadC Como Entero;
	Escribir "Digite la cantidad de cuestionarioA: ";
	Leer cantidadA
	Escribir "Digite la cantidad de cuestionarioB: ";
	Leer cantidadB
	Escribir "Digite la cantidad de cuestionarioC: ";
	Leer cantidadC
	
	//Calcular las variables
	
	tiempoA<-cantidadA*5;
	tiempoB<-cantidadB*8;
	tiempoC<-cantidadC*6;
	
	tiempo_total<-tiempoA+tiempoB+tiempoC;
	
	horas<- trunc(tiempo_total/60);
	minutos<-tiempo_total mod 60;
	
	
//Resultado del algotirmo 	
	
	Escribir "Se tardara",horas,"horas y ",minutos, "minutos"
	
FinProceso

	

