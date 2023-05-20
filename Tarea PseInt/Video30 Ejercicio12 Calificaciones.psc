//Definir las calificaciones, alumnos de aprobado y no aprobado
//Entrada: Ingresar las calificaciones
//Proceso: calcular las variables
//Salida: El resultado de las variables

proceso  Calificaciones
	
	//Definir las variables del Algoritmo 
	
	Definir nota1,nota2,nota3 Como Real
	Definir promedio Como Real
	
	Escribir "Ingrese las tres notas"
	Leer nota1,nota2,nota3 
	
	//Procedimiento, calcular 
	
	promedio<-(nota1+nota2+nota3)/3 
	
	
	si promedio>-70 entonces
		Escribir "El alumno está aprobado con: ",promedio 
		
	SiNo
		Escribir "El almno está desaprobado con: ",promedio 
		
	FinSi
	
	
FinProceso

