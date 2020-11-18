// En los lenguajes de prog. existen funciones 
// de entrada y salida que nos permiten introducir o imprimir 
// datos en el programa respectivamente

// En JS una función de salida muy utilizada en el desarrollo 
// es la de imprimir en consola: "console.log()"
// Para ejecutar archivos JS en el terminal (mac) ó cmd(windows), tenemos 
// que tener instalado el programa Node.js (https://nodejs.org/es/)

console.log("Hola mundo!");

// para ejecutar este "console.log", en el terminal tenemos que poner: 
// "node funciones_E-S.js"

// CONCATENACIÓN
// def: utilizamos la concatenación cuando queremos imprimir el valor de
// un texto y contenidos de variables. En JS se utiliza el símbolo "+"
// Ejemplo:
var dia = 18;
var mes = "Noviembre";
var any = 2020;

console.log("18 de Noviembre de 2020");
console.log(dia + " de " + mes + " de " + any);