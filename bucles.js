// COMPARACIONES
// OPERADOR    DESCRIPCIÓN
// ==          Igual a ... 
// !=          Diferente a ... 
// >           Mayor a ... 
// <           Menor a ... 
// >=          Mayor o igual ...
// <=          Manor o igual ... 
// ===         Igual a ... y mismo tipo de dato ...

// CONCATENACIÓN DE COMPARACIONES (mediante operadores lógicos)
// OPERADOR    DESCRIPCIÓN
// &&          AND: Devuelve un TRUE si se cumplen TODAS las condiciones
// ||          OR: Devuelve un TRUE si se cumple ALGUNA de las condiciones 
// !           NOT: INVIERTE el valor Booleano

// -----------------------------------------------------------
// WHILE 
// sintaxis:
// while (condition) {
    //  instrucciones en bucle   
// }
// Imprimir los numeros del 1 al 5
// console.log(1);
// console.log(2);
// . 
// . 
// . 
// console.log(5);
// Necesitamos un bucle para ejecutar "n veces" el console.log

// Ejemplo: Imprimir los numeros del 1 al 5
var i = 1; //INICIALIZACIÓN DE LA VARIABLE CONTADORA (i)
while (i <= 5) { //COMPARACIÓN DE LA VARIABLE CONTADORA (i)
    console.log(i);
    i++; //ACTUALIZACION DE LA VARIABLE CONTADORA (i)
}

// -----------------------------------------------------------
// DO-WHILE: Se diferencia con el WHILE, que primero ejecuta y luego compara (al revés que el WHILE)
// sintaxis:
// do {
    //  instrucciones en bucle   
// } while (condition);

// -----------------------------------------------------------
// FOR: Se utiliza mayoritariamente para recorrer variables tipo array
// sintaxis:
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// Ejemplo1: Imprimir los numeros del 1 al 5
for(var i = 1; i <= 5; i++){
    console.log(i);
}

// Ejemplo2: Imprimir los datos de un ARRAY
var leng_prog = ["JS","Python","PHP","C++","JAVA","SQL","R"];
// Existe una propiedad (length) que nos devuelve la cantidad (longitud) de 
// elementos de un array
console.log(leng_prog.length); // 6
// Podemos seleccionar (apuntar) a un deyterminado dato del Array, con el nombre 
// del array y entre corchetes la posición (numérica) empezando por 0
console.log(leng_prog[2]);
// recorremos el array con un FOR 
for (var i = 0; i < leng_prog.length; i++){
    console.log(leng_prog[i]);
}









