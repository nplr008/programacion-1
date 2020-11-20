// FUNCIONES
// def: Es un bloque código diseñado para realizar una operación 
// determinada. 
// A esta función la podemos llamar desde cualquier punto del programa, podemos 
// enviarle datos (parámetros) y nos puede devolver un dato

// sintaxis 
// function nombre_funcion(parametro1, parametro2, ....){ // parámetros opcionales
//     bloque de código (instrucciones) que se ejecutará en 
//     cada llamada
//     ... 
//     ... 
//     return valor; // opcional
// }

// nombre_funcion(parametro1, parametro2, ....) // llamada a la función

// Ejemplo1: función que suma dos numeros (sin parámetros y sin return)
var n1 = 10;
var n2 = 5;

function suma_dos_numeros_1(){
    var suma = n1 + n2;
    console.log(suma);
}
// llamada a la funcion
suma_dos_numeros_1();

// Ejemplo2: función que suma dos numeros (con parámetros y sin return)
function suma_dos_numeros_2(n1,n2) {
    var suma = n1 + n2;
    console.log(suma);
}
// llamada a la funcion
suma_dos_numeros_2(10,5);

// Ejemplo3: función que suma dos numeros (con parámetros y con return)
function suma_dos_numeros_3(n1, n2) {
    var suma = n1 + n2;
    return suma;
}
// llamada a la funcion
var resultado = suma_dos_numeros_3(10, 5);
console.log(resultado);
// siempre que hay una llamada a una función asignada a una variable, quiere decir
// que la función tiene un "return"