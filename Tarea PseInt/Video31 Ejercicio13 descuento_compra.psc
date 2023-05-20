// Si la compra es mayor a 100 entonces si hay descuento
// Entrada: Ingresar las variables del Algoritmo 
// Proceso: Calcular las para saber si hay descuento en la compra 
// Salida: El resultado del Algoritmo 


Proceso  comprar_descuento
	// Definir las variables
	
	Definir compra Como Real
	Definir descuento,compra_final Como Real
	Escribir 'Ingrese la cantidad a pagar'
	Leer compra
	
	
	// Calcular la variable del algoritmo 
	Si compra>100 Entonces
		descuento <- compra*0.2
	SiNo
		descuento <- 0
	FinSi
	precio_final <- compra-descuento
	
	//Resultado 
	Escribir 'El precio a pagar es de: ',precio_final
FinProceso

