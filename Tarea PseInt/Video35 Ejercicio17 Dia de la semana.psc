//Elabora un programa que muestre los dia de la semana
//Entrada: ingresar las variables para saber el dia de la semana 
//proceso: RESOLVER EL ALGORITMO 
//Salida:Resultado 

proceso  dia_semana
	
	//definir las variables 
	Definir num Como Entero
	
	Escribir "Digite un numero del dia de la semana(1-7): ";
	Leer num;
	
	//calcular las variables 
	
	Segun num Hacer
		1:escribir "Lunes";
		2:escribir "Martes";
		3:escribir "Miércoles";
		4:escribir "Jueves";
		5:escribir "Viernes";
		6:escribir "Sabado";
		7:escribir "Domingo";
			
		De Otro Modo:
			Escribir "Error, no existe dia";
			
			
	FinSegun
	
	
	
FinProceso


