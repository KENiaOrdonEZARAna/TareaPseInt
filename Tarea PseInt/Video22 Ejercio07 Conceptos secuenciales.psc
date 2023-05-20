//Calcular la cantidad de seg que estan incluidos en el num de hrs, min y seg ingresados por el usuario

//Entrada: saber la cantidad de num,horas y seg 
//Proceso: calcular los num,horas y seg
//Salida: Resultado 

Proceso   Conceptos_secuenciales
	
	//Definir las variables
	Definir horas,minutos,seg Como Entero;
	Definir horas_seg,minutos_seg Como Enteros;
	Escribir "Digite las horas: ";
	Leer horas; 
	Escribir "Digite los minutos: ";
	Leer minutos;
	Escribir "Digite los segundos: ";
	Leer segu; 
	
	//Variables
	
	horas_seg<-horas*3600; 
minutos_seg<-minutos*60;	
total_seg<-horas_seg+minutos_seg+seg;

//Resultado
Escribir "Los segundos equivalentes son: ",total_seg;
	
FinProceso



	

