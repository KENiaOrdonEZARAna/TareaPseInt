//suma_pares,suma_impares,suma
//entrada: ingresar las variable del Algoritmo 
//proceso: calcular las variables del Algoritmo 
//salir:  resultado de las variables



proceso  solosuma
	
	//definr las variables
	Definir n_elementos Como Entero;
	Definir suma_pares, conteo_pares Como Entero;
	Definir sumas_impares, conteo_impares Como Entero
		Definir promedio como real  
		Escribir "Digite la cantida de elementos a ingresar ";
	Leer n_elementos
	
	
	//calcular las variables
	i<-1;
	suma_pares<-0
	conteo_pares<-0;
	sumas_impares<-0
	conteo_impares<-0
	
	Mientras i<=n_elementos Hacer
		Escribir i,".Digite un numero";
		Leer num;
		i<-i+1;
		si num mod 2=0 Entonces
			
			suma_pares<-suma_pares+num
			
			conteo_pares<-conteo_pares+1;
		SiNo
			sumas_impares<-sumas_impares+num;
			conteo_impares<-conteo_impares+1
		FinSi
	FinMientras
	
	//resultados
	si conteo_pares=0 Entonces
		Escribir "No se han digitado numeros pares"
	SiNo
		Escribir "La suma de los numeros pares es: ",suma_pares;
		Escribir "El conteo de los conteo pares es: ", conteo_pares
	FinSi
	si conteo_impares=0 Entonces
		Escribir "No se han digitado impares: "
	SiNo
		promedio_impar<-suma_impares/conteo_impares;
		Escribir "El promedio impar es: ", promedio_impar;
	FinSi
FinProceso

