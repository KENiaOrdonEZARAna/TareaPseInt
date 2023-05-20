// Cuanto cuesta el kilo de manzanas y cuantos kilos de manzana ha comprado
// entrada: ingresar las variables del Algoritmo 
// proceso: calcular las variables
// salida: el resultado del Algoritmo 



Proceso   Kilos_manzanas
	
	//Variables del algoritmo 
	
	definir preciok,kilos,precioI como reales
	definir descuento,precio_final como reales 
	Escribir "Cuanto cuenta el kilo de manzana? "
	Leer preciok
	Escribir "Cuantos kilos de manzana a comprado?"
	Leer kilos
	
	
	//calcular la variable 
	
	precioI <- preciok*kilos
	Si kilos>=0 y kilos<=2 Entonces
		descuento <- 0
	SiNo
		Si kilos>=2.01 y kilos<=5 Entonces
			descuento <- precioI*0.1
		SiNo
			Si kilos>=5.01 y kilos<=10 Entonces
				descuento <- precioI*0.15
			SiNo
				descuento <- precio*0.2
			FinSi
		FinSi
	FinSi
FinProceso

