/*VARIABLE*/
/*'use strict'//Esto es para que el lenguaje sea mas sensible*/
//Variable de tipo caneda
var pais ="<h1>Paraguay</h1>";
var continente='<h1>America</h1>';

//concatenar
var p_c= pais + '-'+continente;
console.log(p_c)
document.write(pais+"<hr>");
document.write(continente);

//modo estricto
//use strict
//let permite definir variable limitando su alcance
// var permite  definir variable y utilizarlas globalmente

let varlet ="Esto es una variable let";
document.write("<br>"+varlet);

//Constante es una variable que no se puede cambiar de valor y
//se define con la pabras const 

var web="https://www.utic.edu.py";
console.log(web);
const contsweb="https://open.spotify.com/intl-es";
console.log(contsweb);