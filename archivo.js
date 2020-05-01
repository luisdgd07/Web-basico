var nombre1
nombre1 = prompt("Tu nombre");
alert(nombre1);
//alerta en pantalla
// tipos de datos: 
//numerico
//var edad = 17; 
//variable
//string(cadena de texto)
var nombre = "Luis";
var apellido = "Gonzalez";
document.write(nombre + " " + apellido + " ");
 //coloca var nombre y ...
//array(arreglo)
//var numeros = ["uno", "dos", "tres"];
// dice cuanto elementos tienes 
//document.write ( numeros.length + " " )
//numeros[numeros.length]="cuatro"; // agrega un elemento
//numeros.push("cinco", "seis", "siete"); // agrega varios elementos
//var numeros2 = ["ocho", "nueve"]; nueva variable
//var numeros3 = [numeros.concat(numeros2)]; une las variables
//document.write(numeros3);
//document.write(numeros.join(", ")); agrega lo que este en parentesis entre los elementos
//var ordenado = numeros.sort(); ordena alfabeticamente y reverse al reves
//numeros.pop(); elimna el ultimo elemento
//document.write(numeros[0]) escribe el elemento 0 en este caso es uno
// object, boolean, undefined, null, NaN
//var nombre = "Luis", edad= "19";
// > menor que
// < mayor que
// >= mayor o igual
// <= menor o igual
// == igual
// != distinto de
// && y
// || se cumple una u otra condicion
// === revisa si cumple bien los requisitos ejemplo 17 no es igual que "17"
//if( nombre == "Luis" ){ condicion
	//document.write( "Bienvenido" + " " + nombre);
//} else if ( nombre == "Luisa" ) { si no se cumple la primera condicion
	//document.write( "Bienvenido anonimo");
//}
//else{  si no se cumple ninguna condicion
//document.write("Bienvenido");
//}	
// ciclos             i++ aumenta el valor de 1 en 1
// ciclo for
//en la variable i se puede colocar otra variable ya definida
//var dias = ["Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado" , "Domingo"];

//for ( i = 0; i <= dias.length - 1; i++){ 
//document.write( dias[i] + "<br>");
// ciclo while
//var i = 0;
//while ( i <=10 ){
	//document.write( i + "<br>" );
	//i++;
//}
//do{
	// ejecuta el codigo 1 vez
//} while (codicion);
// funciones
//function saludo(nombre){
	//document.write("Hola " + nombre);
//}
//saludo("Luis");
//var suma = function (numero1, numero2){
	//var numero1 = numero1;
	//var numero2 = numero2;
	
	//return numero1 + numero2;
//}
//document.write ( suma(233,456) );
// las funciones se pueden usar varias veces
//function numeromayor(valor1, valor2){
	//if (valor1 > valor2){
		//return valor1;
	//} else {
		//return valor2;
	//}
//}
//document.write("el numero mayor es: " + numeromayor(1,7));
// Scope o tipos de variables
// Global podemos acceder a ella desde cualquier parte del codigo
// Local variables creadas dentro de una funcion, solo pueden ser accedidas desde su funcion o una funcion anidada

//var VariableGlobal = "esta es global";

//var mifuncion = function(){
	//alert(VariableGlobal);

	//VariableGlobal = "esta es una varible global modificada";
	//alert(VariableGlobal);
	// las variables locales solo sirve dentro una funcion - y si elimina la palabra "var" se convierte en global
	// variablelocal = "esta es una variable local";
	// javascript en funciones de una funcion usa siempre el nivel mas bajo para una variable 
	// dentro de una funcion se puede acceder a los elementos que esten mas afuera mas no a los elementos que esten mas adentro
	// para proteger de las variables de modificaciones se usa (function(){aqui va el codigo}) 
//}
//mifuncion();


// .length dice cuantas letras tiene
// .substring (2)empieza la variable en el numero dentro en este caso 2
// .substr(0,5) dice desde donde hasta donde corta la cadena
// .indexOf ("", aqui pones dedes donde va a buscar) dice donde queda lo que esta adentro
// .lastIndexOf busca de atras hacia adelante
// .remplace (texto que se desea reemplazar "texto que lo reemplaza") puede reemplazar letras
// .toUpperCase para mayuscula
// .toLowerCase para minuscula
//var texto = "Luis David";
//var texto2 = texto.indexOf("i") + 1;
//var nuevotexto = texto.indexOf("i", texto2); 
//document.write(nuevotexto);
