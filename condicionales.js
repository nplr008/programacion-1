// COMPARACIONES
// OPERADOR    DESCRIPCIÓN
// ==          Igual a ... 
// !=          Diferente a ... 
// >           Mayor a ... 
// <           Menor a ... 
// >=          Mayor o igual ...
// <=          Manor o igual ... 
// ===         Igual a ... y mismo tipo de dato ...

// Toda comparación en programación, devuelve un valor Booleano (true/false)
// Ejemplos
console.log(5 == 5);  // true
console.log(5 == 6);  // false
console.log(5 != 6);  // true
console.log(5 > 6);  // false
console.log(5 >= 5);  // true
console.log("5" == 5);  // true
console.log("5" === 5);  // false

// CONCATENACIÓN DE COMPARACIONES (mediante operadores lógicos)
// OPERADOR    DESCRIPCIÓN
// &&          AND: Devuelve un TRUE si se cumplen TODAS las condiciones
// ||          OR: Devuelve un TRUE si se cumple ALGUNA de las condiciones 
// !           NOT: INVIERTE el valor Booleano

// Ejemplos
console.log(5 == 5 && "Hola" == "Hola"); // true
console.log(5 == 6 && "Hola" == "Hola"); // false
console.log(5 == 5 || "Hola" == "Hola"); // true
console.log(5 == 6 || "Hola" == "Hola"); // true
console.log(!true);

// -----------------------------------------------------------
// IF - ELSE
// sintaxis:
// if (condition) { // si se cumple
//     ejecuta las instrucciones dentro de estas llaves
// } else { // si no se cumple
//     ejecuta las instrucciones dentro de estas llaves
// } 

// Ejemplo1: Comprobar el mayor de dos números
var n1 = 10;
var n2 = 10;

if(n1 > n2){
    console.log("n1 es mayor que n2");
}else if(n2 > n1){
    console.log("n2 es mayor que n1");
}else{
    console.log("los numeros son iguales");
}
// Ejemplo2: Comprobar el email y pass en un login
// simulamos una base de datos
var emailDB = "armand@gmail.com";
var passDB = "a1234a";
// simulamos la entrada de datos del usuario
var emailUSER = "armand@gmail.com";
var passUSER = "a1234a";

// comprobamos login
if (emailUSER === emailDB && passUSER === passDB){
    console.log("LOGIN OK!!!");
}else{
    console.log("DATOS DE LOGIN INCORRECTOS!!!");
}

// -----------------------------------------------------------
// SWITCH: Utilizamos SWICTH SIEMPRE que conozcamos los datos a comparar
// sintaxis:
// switch (data) {
//     case value:
//         ejecuta estas instrucciones
//         break; // sale del switch
//     case value:
//         ejecuta estas instrucciones
//         break;
//         . 
//         .
//         .
//     default:
//         break;
// }

// Ejemplo: Semáforo
var color = "";
switch (color) {
    case "rojo":
        console.log("No pasar!!");
        break;
    case "ambar":
        console.log("Precaución!!");
        break;
    case "verde":
        console.log("Puedes pasar!!");
        break;
    default:
        console.log("No has puesto un color correcto");
        break;
}
