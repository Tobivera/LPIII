/*Funcion
predeterminadas en js */
//funciones para transformar texto

var numero = 888;
var text1 ="Bienvenidos al curso de javascrip";
var text2= "TEXTO EN MASYUSCULA";

//1-Transformar de nro a string
var nroconvertido = numero.toString();
console.log(nroconvertido);
console.log(typeof(nroconvertido));

//2-Cambiar valores de minisculas a masyuscula
var text1MAYUS = text1.toUpperCase();
console.log(text1MAYUS);

//3-Cambiar valores a minusculas
var text2minu = text2.toLocaleUpperCase();
console.log(text2minu);

//4-Longitud de un string
var Longitud="Tobias Vera";
console.log(Longitud.length);
//concatenar
console.log(text1 + text2);
//6-Array longitud
var Array =["Hola","como","Estas?"];
console.log(Array.length);
//7-Buscar por indice
var busqueda = text1.indexOf("curso");
console.log(busqueda);
//8-Buscar por indice 2
var busqueda2 = text1.lastIndexOf("de");
console.log(busqueda2);
//9-Buscar por indice 2
var busqueda3 = text1.search("javascrip");
console.log(busqueda3);
//10- match
var busqueda4 = text1.match(2);
console.log(busqueda4);
//11 quitar espacios de adelante o de atras
var sustraerespacios = text1.substr(14,6);
console.log(sustraerespacios);
//12 quitar letras
var quitar = text1.charAt("al");
console.log(quitar);
//13 Busqueda con starswith cuando las palabras inician con un valor estos devuelve true
var busqueda5 = text1.startsWith("bienve");
console.log(busqueda5);
//14 includes 
var busqueda6 = text1.includes("javascrip");
console.log(busqueda6);
//15 reemplazar una palabra por otra
var reemplazar = text1.replace("javascrip", "java");
console.log(reemplazar);
//16 borrar una parte y devolver el valor indicado
var borrarparte = text1.slice(12,20);
console.log(borrarparte);
//17 split convertir texto en arrays
var textarrays = text1.split();
var textarrays = text1.split(" ");
console.log(textarrays);
//18 quitar espacios con trim
var quitarespacios = text1.trim();
console.log(quitarespacios);
//19 usu de plantillas
var nombre = prompt("Ingrese el nombre");
var apellido = prompt("Ingrese el apellido");   
//alt+96``
var plantilla =`
<h1>Hola que tal</h1>
<h3>el nombre es:${nombre}</h3>
<h3>el apellido es: ${apellido}</h3>
`;
document.write(plantilla);
