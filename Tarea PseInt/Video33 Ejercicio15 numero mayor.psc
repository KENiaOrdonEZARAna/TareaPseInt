
// Encontrar el numero mayor de los tres
// Entrar:Digitar la variable del Algoritmo 
// Proceso: calcular las varibles del Algoritmo 
// Salida: Resultado de las variables 


Proceso   num_mayor
	
	//Definir las variables
	
	Definir num1,num2,num3 Como Real
	Escribir 'Digite tres numeros'
	Leer num1,num2,num3
	
	//Ralcular/resultado 
	
	Si num1>num2 Y num1>num3 Entonces
		Escribir 'El mayor es: ',num1
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "El mayor es: ",num2
		SiNo
			Escribir "El mayor es: ",num3
		FinSi
	FinSi
	
FinProceso

