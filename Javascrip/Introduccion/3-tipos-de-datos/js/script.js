/*3-Tipo de datos*/
//Numerico

var nr1=50;
var nr2=25;
//Operadores
var suma=nr1+nr2;
var resta=nr1-nr2;
var multi=nr1*nr2;
var divi=nr1/nr2;
var porcentaje=nr1%nr2;

var decimal= 25.5;
var verdedero=true;
var falso=false;

var texto="El resultado de la operacion es:";
document.write(texto, suma, "<br>");
document.write(texto, resta, "<br>");
document.write(texto, multi, "<br>");
document.write(texto, divi, "<br>");
document.write(texto, porcentaje, "<br>");
document.write(texto, decimal, "<br>");
document.write(texto, verdedero, "<br>" , falso);

//Funciones para convertir datos
document.write("<hr>");
document.write("<h1>Funciones para convertir datos</h1>");

var Numerico='30';
document.write(Numerico);
var tipodatostring=typeof(Numerico);
document.write(tipodatostring);
//Convertir string a numero 
var numero_convertido=Number(Numerico);
document.write(numero_convertido);
//ver tipo de dato
var tipodato=typeof(numero_convertido);
document.write(tipodato);

//convertir numero a string
var nroentero=40;
var convertirnrostring=String(nroentero,"<br>");
var tipostring=typeof (convertirnrostring);
document.write(convertirnrostring, tipostring);
//parsetint
var nrostring='100';
var parse= parseInt(nrostring);
document.write(parse);
console.log(typeof(parse));


