// crear un menu, elvar un numero a la potencia x
// entrada: ingresar las variables 
// proceso: calcular las variables 
// salida: respuesta del algoritmo 

proceso menu
	// definir las variables 
	
	Escribir "Menu"
	Escribir "1. Elevar un numero a la potencia x"
	Escribir "2. sacar la raiz cuadrada de un numero"
	Escribir "3.salir"
	Escribir "Digite una opción"
	Leer opción
	
	//Calcular el Algoritmo 
	
	Segun opción Hacer
		1:
			definir num,pot,resultado como real 
			Escribir "Digite un numero"
			Leer num
			Escribir "Digite la potencia"
			Leer pot
			resultado <- num^pot
			Escribir "El resultado es: ",resultado
		2:
			definir num,resultado como real
			Escribir "Digite un numero"
			Leer num
			resultado <- rc(num)
			Escribir "El resultado es: ",resultado
		De Otro Modo:
			Escribir "Opción incorrecta"
			
	FinSegun
FinProceso

