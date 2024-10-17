/*Ejercicio
Mostrar todos los nro que hay entre dos nros ingresados por el usuario  */

'use sctrict'

var nr1 =parseInt(prompt('Ingrese el nro desde '));
var nr2 =parseInt(prompt('Ingrese el nro hasta '));

document.write("<h1>De"+ nr1 + 'a'+ nr2 + "Estan esos nros</h1>")
for (var i = nr1; i <=nr2; i++){
    document.write('<h3>'+ i + '</h3>', '<br>');
}


